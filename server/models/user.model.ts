import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    fullname: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String
})

export const User = model<{ fullname: string, email: string, password: string }>("user", UserSchema)
