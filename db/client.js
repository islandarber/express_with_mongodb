import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Database connected");
    return mongoose.connection;
  } catch (error) {
    console.log("Error connecting to database", error.message);
    process.exit(1);
  }
}