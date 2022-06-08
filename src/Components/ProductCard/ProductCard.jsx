import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import "./ProductCard.css";
export function ProductCard({ products }) {
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

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
            {wishlist.find((item) => item._id === products._id) ? (
              <i
                className="far fa-heart badge-style"
                onClick={() => removeFromWishlist(products(_id))}
              ></i>
            ) : (
              <i
                className="far fa-heart badge-style"
                onClick={() => addToWishlist(products)}
              ></i>
            )}
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <h5>₹{price}</h5>
            <h5>{rating}*</h5>
            {cart.find((item) => item._id === products._id) ? (
              <div className="btn-container">
                <i className="prod-btn-bag-card">
                  <Link className="chg-color" to="/cart">
                    Go to Cart
                  </Link>
                </i>
              </div>
            ) : (
              <div className="btn-container">
                <i
                  className="prod-btn-bag-card"
                  onClick={() => addToCart(products)}
                >
                  MOVE TO BAG
                </i>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
