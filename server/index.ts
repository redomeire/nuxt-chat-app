import mongoose from "mongoose";
import { Nitro } from "nitropack"

export default async (_nitroApp: Nitro) => {
    const config = useRuntimeConfig();

    try {
        await mongoose.connect(config.mongodbUri);
        console.log("Mongodb connected");
    } catch (error) {
        console.error("error connection : ", error);
    }
}
