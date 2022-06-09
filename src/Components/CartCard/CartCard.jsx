import React from "react";
import "./CartCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

export function CartCard({ cartItem }) {
  const { image, title, description, price, qty } = cartItem;
  const { deleteFromCart, incrementCart, decrementCart } = useCart();
  const { addToWishlist } = useWishlist();
  const moveToWishlist = (cartItem) => {
    addToWishlist(cartItem);
    deleteFromCart(cartItem);
  };
  return (
    <div className="cart-card">
      <div className="card-container">
        <div className="card-top-section">
          <div className="image-box">
            <img src={image} alt="{title}" />
          </div>
          <div className="card-details">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="quantity">
              <label for="quantity">Quantity</label>
              <button
                className="qty-button"
                onClick={() => decrementCart(cartItem)}
              >
                -
              </button>
              <span className="item-qty">{qty}</span>
              <button
                className="qty-button"
                onClick={() => incrementCart(cartItem)}
              >
                +
              </button>
            </div>
            <div>{price}</div>
            <i
              onClick={() => deleteFromCart(cartItem)}
              className="card-bottom-section-link"
            >
              Remove
            </i>
            <span>|</span>
            <i
              onClick={() => moveToWishlist(cartItem)}
              className="card-bottom-section-link"
            >
              Move to wishlist
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
