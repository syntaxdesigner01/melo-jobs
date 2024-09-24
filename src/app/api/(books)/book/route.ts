import { NextResponse } from "next/server";
import connect from "../../../../../lib/db";
import Book from "../../../../../lib/models/books";
import User from "../../../../../lib/models/users";
import { Types } from "mongoose";
import { ObjectId } from "mongodb";

export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        const { title, author, genre } = body;

        await connect();

        // Validate the user ID
        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({
                message: 'Invalid user ID',
                status: 400
            }));
        }

        // Validate the required fields
        if (!title || !author || !genre) {
            return new NextResponse(JSON.stringify({
                message: 'Missing title, author, or genre',
                status: 400
            }));
        }

        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({
                message: 'User not found',
                status: 404
            }));
        }

        // Create a new book object
        const newBook = new Book({
            title,
            author,
            genre,
            user: new Types.ObjectId(userId)
        });

        // Save the new book to the database
        await newBook.save();

        // Respond with a success message
        return new NextResponse(JSON.stringify({
            message: 'Book created successfully',
            status: 200
        }));
    } catch (error: any) {
        // Handle errors
        return new NextResponse(JSON.stringify({
            message: 'Error occurred: ' + error.message,
            status: 500
        }));
    }
};


// export const PATCH =async(request:Request)=>{
//     try {
        
//         const body = await request.json()
//         const { searchParams } = new URL(request.url)
//         const bookId = searchParams.get('bookId')

//         await connect()

//     if(!bookId){
//         return new NextResponse(JSON.stringify({ message: 'Book Id not found ', status: 400 }))
//     }

//     if(!Types.ObjectId.isValid(bookId)){
//         return new NextResponse(JSON.stringify({ message: 'Invalid book id', status: 400 }))
//     }

//         const updatedBook = await User?.findByIdAndUpdate(
//             { _id: new ObjectId(bookId) },
//             {...body },
//             { new: true }
//         )

//         if (!updatedBook) {
//             return new NextResponse(JSON.stringify({
//                 message: 'Book not found',
//                 status: 404
//             }));
//         }

//         return new NextResponse(JSON.stringify({
//             message: 'Book updated successfully',
//             status: 200,
//             data: updatedBook
//         }));
//     } catch (error:any) {
//         return new NextResponse('Error in updating book' + error.message, { status: 500 })
//     }
//     }



export const PATCH = async (request: Request) => {
    try {
        const body = await request.json();
        const { searchParams } = new URL(request.url);
        const bookId = searchParams.get('bookId');

        await connect();

        // Validate book ID
        if (!bookId) {
            return new NextResponse(JSON.stringify({
                message: 'Book ID not provided',
                status: 400
            }));
        }

        if (!Types.ObjectId.isValid(bookId)) {
            return new NextResponse(JSON.stringify({
                message: 'Invalid book ID',
                status: 400
            }));
        }

        // Update the book
        const updatedBook = await Book.findByIdAndUpdate(
            bookId,
            { ...body },
            { new: true }
        );


        // await Book.fi
        // Check if the book was found and updated
        if (!updatedBook) {
            return new NextResponse(JSON.stringify({
                message: 'Book not found',
                status: 404
            }));
        }

        // Return the updated book
        return new NextResponse(JSON.stringify({
            message: 'Book updated successfully',
            status: 200,
            data: updatedBook
        }));
    } catch (error: any) {
        // Handle errors
        return new NextResponse(JSON.stringify({
            message: `Error in updating book: ${error.message}`,
            status: 500
        }));
    }
};
