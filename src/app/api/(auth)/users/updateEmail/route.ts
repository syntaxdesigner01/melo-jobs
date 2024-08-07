import connect from "../../../../../../lib/db";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
import User from "../../../../../../lib/models/users";

export const PATCH = async (request: Request) => {
    try {
        // Parse JSON body
        const body = await request.json();
        const { userId, userEmail } = body;

        // Connect to the database
        await connect();

        // Validate input
        if (!userId || !userEmail) {
            return new NextResponse(
                JSON.stringify({ message: 'Invalid user ID or Email', status: 400 })
            );
        }

        // Check if userId is a valid ObjectId
        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(
                JSON.stringify({ message: 'Invalid user ID', status: 400 })
            );
        }

        // Update user's email
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { email: userEmail },
            { new: true }
        );

        // Handle case where user is not found
        if (!updatedUser) {
            return new NextResponse(
                JSON.stringify({ message: 'User not found', status: 404 })
            );
        }

        // Respond with success message
        return new NextResponse(
            JSON.stringify({ message: 'User updated successfully', status: 200 })
        );
    } catch (error:any) {
        // Handle errors
        return new NextResponse(
            JSON.stringify({ message: `Error updating user: ${error.message}`, status: 500 })
        );
    }
};
