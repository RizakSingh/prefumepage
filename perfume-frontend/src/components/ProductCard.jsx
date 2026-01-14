import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <img
        src={product.images[0]}
        className="h-60 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        <p className="text-lg font-bold mt-2">₹{product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
