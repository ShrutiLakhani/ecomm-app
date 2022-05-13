import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";

// import { useWishlist } from "../../context/wishlist-context";

import "./TotalBill.css";
export function TotalBill() {
  const { cartCount, cartTotalPrice, cartFinalAmount, checkOut } = useCart();

  return (
    <div class="price-total">
      <div>
        <div class="price-title">PRICE DETAILS</div>
        <div class="price-breakdown">
          <span>Price ({cartCount} Items)</span>
          <span>₹ {cartTotalPrice}</span>
        </div>
        <div class="price-breakdown">
          <span>Coupon Discount</span>
          <span>Apply Coupon</span>
        </div>
        <div class="price-breakdown border-bottom">
          <span>Delivery Charges</span>
          <span>Free</span>
        </div>
        <div class="price-breakdown price-style">
          <span>Total Amount</span>
          <span>₹ {cartFinalAmount}</span>
        </div>
        <button
          class="primary-button-solid cart-button"
          onClick={() => checkOut()}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
