import argon from "argon2";
import { User } from "../../models/user.model";

export default defineEventHandler(async (event) => {
    
    try {
        const body = await readBody(event)

        const existingUser = await User.findOne({ email: body.email })

        if(existingUser) {
            event.res.statusCode = 400
            event.res.statusMessage = "user has been created before"
        }

        const hashedPassword = await argon.hash(body.password)

        const newUser = await User.create({
            email: body.email,
            name: body.fullname,
            password: hashedPassword
        })

        return {
            status: 200,
            message: "new user created",
            data: {
                ...newUser
            }
        }
    } catch (error) {
        return error
    }
})
