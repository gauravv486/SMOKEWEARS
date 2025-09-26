import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      default: null, 
    },
    countInStock: {
      type: Number,
      required: true,
      min: 0, 
    },
    sku: {
      type: String, 
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    sizes: {
      type: [String], 
      enum: ["S", "M", "L", "XL", "XXL"], 
    },
    colors: {
      type: [String],
    },
    collections: {
      type: String,
    },
    material: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Men", "Women", "Unisex"], 
      required: true,
    },
    images: [
      {
        url: { type: String, required: true },
        altText: { type: String },
      },
    ],
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } 
);

const Product = mongoose.model("Product", productSchema);

export default Product;
