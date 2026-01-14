import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      {/* HERO */}
      <div className="h-[70vh] bg-gradient-to-r from-black to-gray-800 text-white flex flex-col justify-center items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Discover Your Signature Scent
        </motion.h1>
        <p className="mt-4 text-gray-300">
          Premium luxury perfumes curated for you.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
