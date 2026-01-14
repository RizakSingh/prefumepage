import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProduct, fetchReviews, addReview } from "../services/api";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchProduct(id).then((res) => setProduct(res.data));
    fetchReviews(id).then((res) => setReviews(res.data));
  }, [id]);

  const submitReview = async () => {
    if (!comment) return;

    await addReview({
      productId: id,
      user: "Guest",
      comment,
      rating: 5,
    });

    const updated = await fetchReviews(id);
    setReviews(updated.data);
    setComment("");
  };

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-10">
      {/* PRODUCT INFO */}
      <div className="grid md:grid-cols-2 gap-10">
        <motion.img
          src={product.images[0]}
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        />

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-500 mt-3">{product.description}</p>
          <p className="text-2xl font-bold mt-4">₹{product.price}</p>

          <div className="flex gap-3 mt-4">
            {product.sizes.map((size) => (
              <button
                key={size}
                className="border px-4 py-2 rounded-full text-sm sizebutton hover:bg-gray-800 hover:text-white"
              
              >
                {size}
              </button>
            ))}
          </div>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
            Share Product
          </button>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

        <div className="space-y-3">
          {reviews.map((r) => (
            <div key={r._id} className="border p-3 rounded">
              <p className="font-semibold">{r.user}</p>
              <p className="text-sm text-gray-600">{r.comment}</p>
            </div>
          ))}
        </div>

        {/* ADD REVIEW */}
        <div className="flex gap-3 mt-4">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a review..."
            className="border p-2 flex-1 rounded"
          />
          <button
            onClick={submitReview}
            className="bg-black text-white px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
