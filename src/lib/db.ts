// import { MongoClient } from "mongodb";

// export const connectToDatabase = async () => {
//   const client = await MongoClient.connect(
//     `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qnkir.mongodb.net/e-commerce?retryWrites=true&w=majority`
//   );
//   return client;
// };
// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "e-commerce", // ✅ ya jo bhi tumhara db name hai
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
    throw err;
  }
};
