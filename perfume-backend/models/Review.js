import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  user: String,
  comment: String,
  rating: Number,
});

export default mongoose.model("Review", reviewSchema);
