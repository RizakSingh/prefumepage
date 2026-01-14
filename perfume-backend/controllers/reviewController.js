import Review from "../models/Review.js";

export const getReviews = async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId });
  res.json(reviews);
};

export const addReview = async (req, res) => {
  const review = await Review.create(req.body);
  res.json(review);
};
