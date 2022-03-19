import React from "react";
import "./ProductPage.css";
import { Navbar,Aside, ProductCard, } from "../../Components/index";
import { Link } from "react-router-dom";
export function ProductPage() {
  return (
    <>
  <main className="page-wrapper">
        <div class="product-page">
         <Aside /> 
         <div className="product-content-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>
      </div>
  </main>
    </>          
  );
}