import { connectToDatabase } from "@/lib/db";

export async function GET() {
  const client = await connectToDatabase();

  const db = client.db();

  const flashProducts = await db
    .collection("products")
    .find({ discount: { $not: { $eq: "" } } })
    .toArray();

  const products = await db
    .collection("products")
    .find({ discount: "" })
    .limit(15)
    .toArray();

  return Response.json({
    flashProducts,
    products,
  });
}
