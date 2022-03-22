import React from "react";
import "./CartPage.css";
import { CartCard} from "../../Components/index";
import { Link } from "react-router-dom";
export function CartPage() {
  return (
    <>
  <main className="page-wrapper">
        <div class="product-page">
            <div class="wishlist-head">My Cart
         <div className="product-content-container">    
        <CartCard />
        <CartCard />
              </div>
       </div>
      </div>
  </main>
    </>          
  );
}