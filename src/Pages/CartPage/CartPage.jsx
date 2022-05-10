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
        <div class="product-page">
          <div class="wishlist-head">
            My Cart
            <div className="product-content-container">
              {cart?.length === 0 ? (
                <h1 className="page-subtitle_wishlist">Bag is empty :(</h1>
              ) : (
                cart.map((item) => <CartCard cartItem={item} key={item._id} />)
              )}
            </div>
          </div>
        </div>
        {cart?.length === 0 ? "" : <TotalBill />}
      </main>
    </>
  );
}
