import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "../../context/cart-context";
// import { useWishlist } from "../../context/wishlist-context";

import "./ProductCard.css";
export function ProductCard({ products }) {
  const {
    title,
    image,
    price,
    description,
    categoryName,
    rating,
    badge,
    id,
    _id,
  } = products;
  return (
    <div className="product-content-container">
      <div className="product-list">
        <div className="Wishlist-container">
          <div className="card2-container wishlist-card">
            <Link to="/wishlist">
              <span>
                <i className="far fa-heart fa-sm badge-style"></i>
              </span>
            </Link>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <h5>₹{price}</h5>
            <h5>{rating}*</h5>
            <button className="primary-button-icon-cart">
              <Link to="/cart" className="prod-btn-bag-card">
                <span className="material-icons"> shopping_bag</span>ADD TO BAG
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
