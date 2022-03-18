import React from "react";
import "./ProductPage.css";
import { Navbar,Aside, ProductCard, } from "../../Components/index";

export function ProductPage() {
  return (
    <>
      <main className="page-wrapper">
        <Aside />
      {/* <div className="product-content-container">   */}
        <ProductCard />
        <ProductCard />
      {/* </div>   */}
      </main>
    </>          
  );
}