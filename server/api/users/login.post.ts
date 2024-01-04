import argon from "argon2"
import { User } from "~/server/models/user.model"
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        const user = await User.findOne({
            email: body.email
        })

        if (user === undefined || !user) {
            event.res.statusCode = 404
            event.res.statusMessage = "User not found"
        }

        // handle token
        const isPasswordValid = await argon.verify(user!.password, body.password)

        if (!isPasswordValid) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid password',
              })
        }

        const token = jwt.sign(
            { userId: user?._id, email: user?.email },
            process.env.APP_SECRET_KEY || "mysupersecret",
            {
                expiresIn: '1h'
            }
        )

        event.res.statusCode = 200
        event.res.statusMessage = "success login"

        setCookie(event, 'token', token)

        return {
            status: 200,
            message: 'success login',
            data: token
        }

    } catch (error) {
        console.error("server error : ", error);
        
        return error
    }
})
