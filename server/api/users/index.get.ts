import { User } from "../../models/user.model";

export default defineEventHandler(async (event) => {
    try {
        const users = await User.find();
    
        return users;
    } catch (error) {
        return { error }
    }
})
