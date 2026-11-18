import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the main backend-tutorial folder
dotenv.config({
    path: path.resolve(__dirname, "../../../.env")
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            autoSelectFamily: false
        });

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Database Connection Failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;