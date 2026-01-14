import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchProducts = () => API.get("/products");
export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchReviews = (id) => API.get(`/reviews/${id}`);
export const addReview = (data) => API.post("/reviews", data);
