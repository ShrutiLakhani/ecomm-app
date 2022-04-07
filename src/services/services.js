import axios from "axios";

export const getProducts = async () => axios.get("/api/products");
