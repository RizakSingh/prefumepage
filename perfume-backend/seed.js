import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Mongo Connected for Seeding");

    await Product.deleteMany();

    await Product.insertMany([
      {
        name: "Royal Oud",
        description: "Deep woody luxury fragrance with royal vibes.",
        price: 2499,
        sizes: ["50ml", "100ml"],
        images: [
          "https://images.unsplash.com/photo-1615634260167-c8cdede054de",
          "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"
        ]
      },
      {
        name: "Ocean Mist",
        description: "Fresh aquatic perfume perfect for summer days.",
        price: 1899,
        sizes: ["50ml", "100ml"],
        images: [
          "https://images.unsplash.com/photo-1594035910387-fea47794261f",
          "https://images.unsplash.com/photo-1611048268330-53de574cae3b"
        ]
      },
      {
        name: "Velvet Rose",
        description: "Romantic floral fragrance with smooth rose notes.",
        price: 2199,
        sizes: ["30ml", "50ml", "100ml"],
        images: [
          "https://alhassan.in/cdn/shop/files/Al_Hassan-1-Photoroom.jpg?v=1746597458"
        ]
      },
      {
        name: "Citrus Blaze",
        description: "Energetic citrus fragrance for active lifestyle.",
        price: 1599,
        sizes: ["50ml", "100ml"],
        images: [
          "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8"
        ]
      },
      {
        name: "Midnight Musk",
        description: "Bold musky scent for night elegance.",
        price: 2799,
        sizes: ["50ml", "100ml"],
        images: [
          "https://imgs.search.brave.com/-R-iWkF9s9ni8yXOcz1x3h7fZJ6l9LiSl_r_h88P0aY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW50ZW5zZW91ZC5j/b20vY2RuL3Nob3Av/ZmlsZXMvNF85OWY2/ZTk3My02YzRkLTRi/YTQtYmYyMy1kOWVj/MWIzOTg3NDdfbGFy/Z2UuanBnP3Y9MTcy/NTgxNTAzOA"
        ]
      }
    ]);

    console.log("🌱 Products Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(" Seed Error:", error.message);
    process.exit(1);
  }
};

seedProducts();
