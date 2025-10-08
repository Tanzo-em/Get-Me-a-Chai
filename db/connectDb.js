import mongoose from "mongoose";

const connectDb = async () => {
    if (mongoose.connections[0].readyState) {
        console.log("Already connected to the database");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true, // Keep this if needed
        });
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
};

export default connectDb;