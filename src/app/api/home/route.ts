import { connectToDatabase } from "@/lib/db";
import { Products } from "@/models/Products";

export async function GET() {
  await connectToDatabase();

  const flashProducts = await Products.find({
    discount: { $not: { $eq: "" } },
  }).lean();

  const products = await Products.find({ discount: "" }).limit(15).lean();

  return Response.json({
    flashProducts,
    products,
  });
}
