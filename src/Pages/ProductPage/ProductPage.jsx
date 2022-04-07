import React from "react";
import axios from "axios";
import "./ProductPage.css";
import { Aside, ProductCard } from "../../Components/index";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function ProductPage() {

  const [products, setProducts] = useState([]);
  async function getProducts() {
    try {
      const { data } = await axios.get("./api/products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(getProducts, []);

  return (
    <>
  <main className="page-wrapper">
        <div className="product-page">
         <Aside /> 
          <div className="product-content-container"> 
        {/* <div> */}
        <ul className="product-content-container">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard products={product} />
          </li>
        ))}
      </ul>
      </div>
      </div>
  </main>
    </>          
  );
}