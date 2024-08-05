import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDb = async () => {
    try {
        console.log(`${process.env.MONGODB_URL}/${DB_NAME}`)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected at ${process.env.PORT}!!! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error: ",error)
        process.exit(1);
    }
}

export default connectDb