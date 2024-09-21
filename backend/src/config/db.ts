import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI as string;

const connectDB = async () => {
  const conn = await mongoose.connect(mongoURI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
