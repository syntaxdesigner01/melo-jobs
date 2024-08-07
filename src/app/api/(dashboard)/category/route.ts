import { NextResponse } from "next/server";
import connect from "../../../../../lib/db";
import User from "../../../../../lib/models/users";
import Category from "../../../../../lib/models/category";
import { Types } from "mongoose";


export const GET = async (request: Request) => {
    try {
        const { searchParams } = new URL(request.url)
        const userId = searchParams.get('userId')

        await connect();

        if (!userId) {
            return new NextResponse(
                JSON.stringify({ message: 'Invalid user id', status: 400 })
            )
        }

        const user = await User.findById(userId)

        if (!user || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(
                JSON.stringify({
                    message: 'User not found',
                    status: 400
                })
            )
        }

        const categories = await Category.find({ user: new Types.ObjectId(userId) })

        if (!categories) {
            return new NextResponse(
                JSON.stringify({ message: 'No category found', staus: 400 })
            )
        }

        return new NextResponse(
            JSON.stringify({
                message: {
                    username: user.username,
                    email: user.email
                },
                data: categories,
                status: 200
            })
        )
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify(
                {
                    message: 'Error:', error
                }
            )
        ), { status: 500 }
    }
}