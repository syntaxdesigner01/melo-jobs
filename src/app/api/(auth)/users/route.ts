import { NextResponse } from "next/server"
import connect from "../../../../../lib/db"
import User from "../../../../../lib/models/users";
import { Types } from 'mongoose'
import { ObjectId } from "mongodb";



const objectId = require('mongoose').Types.objectId

export const GET = async () => {

    try {
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users), { status: 200 })
    } catch (error: any) {

        return new NextResponse('Error in fetching users ' + error.message, { status: 500 })
    }

}

export const POST = async (request: Request) => {
    try {
        const body = await request.json()
        await connect()
        const newUser = new User(body)
        await newUser.save()
        return new NextResponse(JSON.stringify({ message: 'User is created', user: newUser }), { status: 200 })
    } catch (error: any) {
        return new NextResponse('Error in creating user' + error.message, { status: 500 })
    }
}


export const PATCH = async (request: Request) => {
    try {
        const body = await request.json()
        const { userId, newUsername } = body

        await connect()

        if (!userId || !newUsername) {
            return new NextResponse(JSON.stringify({ message: 'Id or New username not found ', status: 400 }))
        }

        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: 'Invalid user id', status: 400 }))
        }

        const updateUser = await User.findOneAndUpdate(
            { _id: new ObjectId(userId) },
            { username: newUsername },
            { new: true }
        )

        if (!updateUser) {
            return new NextResponse(
                JSON.stringify({ message: 'user not found in the database', status: 400 })
            )
        }

        return new NextResponse(JSON.stringify({ message: 'User updated succefully', status: 200 }))

    } catch (error: any) {
        return new NextResponse('Error in updating user' + error.message, { status: 500 })
    }
}


export const DELETE = async (request: Request) => {
    try {
        const body = await request.json()

        await connect()

        const { userId } = body

        if (!userId) {
            return new NextResponse(JSON.stringify({ message: 'No user Id passed', status: 400 }))
        }

        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: 'Invalid user id', status: 400 }))
        }
        
        const deleteUser = await User.findByIdAndDelete(userId)

        if(!deleteUser){
            return new NextResponse(JSON.stringify({message:'failed',status:400}))
        }


        
        return new NextResponse(JSON.stringify({message:'user deleted successfully',status:200}))
    } catch (error:any) {
        return new NextResponse(JSON.stringify({message:'Error '+error , status:500}))
    }


}