import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅Connected to the database successfully");
  } catch (error) {
    console.log("❌Error connecting to the database: ", error);
    process.exit(1);
  }
};

export default connectDB;