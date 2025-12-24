import mongoose from "mongoose";

let isConnected = false; 

const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
    isConnected = true;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("Database connection failed");
  }
};

export default connectDB;
