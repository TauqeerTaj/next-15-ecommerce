import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qnkir.mongodb.net/e-commerce?retryWrites=true&w=majority`
  );
  return client;
};
