import { Schema, model, models, Document } from "mongoose";
import type { Product } from "@/constant/detailProduct";

const DetailImagesSchema = new Schema({
  front: String,
  back: String,
  left: String,
  Right: String,
});

const ReviewSchema = new Schema({
  text: String,
});

const ProductSchema = new Schema<Product & Document>({
  image: String,
  productHeading: String,
  productPrice: String,
  priceOff: String,
  discount: String,
  detailImages: { type: DetailImagesSchema },
  rating: { type: String, min: 0, max: 5 },
  reviews: { type: [ReviewSchema], default: [] },
  availability: Boolean,
  description: String,
  available_colours: { type: [String], default: [] },
  colour: String,
});

export const Products =
  models.Product || model<Product>("Products", ProductSchema);
