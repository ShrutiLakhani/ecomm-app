import React from "react";
import "./CartPage.css";
import { CartCard } from "../../Components/index";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { TotalBill } from "../../Components/TotalBill/TotalBill";
export function CartPage() {
  const { cart } = useCart();
  return (
    <>
      <main className="page-wrapper">
        <div className="cart-page">
          <div className="cart-container">
            <div class="wishlist-head">
              My Cart
              <div className="cart-card-container">
                {cart?.length === 0 ? (
                  <div className="cart-empty-section">
                    <h1>Bag is empty 😔</h1>
                  </div>
                ) : (
                  cart.map((item) => (
                    <CartCard cartItem={item} key={item._id} />
                  ))
                )}
              </div>
              {cart?.length === 0 ? "" : <TotalBill />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
