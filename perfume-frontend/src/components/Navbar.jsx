import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="bg-black text-white px-10 py-5 flex justify-between items-center"
    >
      <Link to="/" className="text-2xl font-bold tracking-widest">
        LUXE SCENT
      </Link>

      <div className="space-x-6 text-sm uppercase">
        <a href="#" className="hover:text-yellow-400">Home</a>
        <a href="#" className="hover:text-yellow-400">Collection</a>
        <a href="#" className="hover:text-yellow-400">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
