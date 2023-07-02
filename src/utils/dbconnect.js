import mongoose from "mongoose"

const MONGODB_URL = process.env.MONGODB_URL;

const dbConnect = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            return await mongoose.connect(MONGODB_URL)
        }
    } catch (e) {
        console.log(e)
    }
}
export default dbConnect;

