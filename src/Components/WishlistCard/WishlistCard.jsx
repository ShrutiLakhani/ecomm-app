import React from "react";
import "./WishlistCard.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
export function WishlistCard({ items }) {
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { image, title, description, price, rating } = items;

  function moveToCart(product) {
    addToCart(product);
    removeFromWishlist(product);
  }
  return (
    <div className="product-content-container">
      <div className="product-list">
        <div className="Wishlist-container">
          <div className="card2-container">
            <Link to="#" className=" wishlist-card card-closebtn">
              &times;
            </Link>
            <img src={image} alt="image-bag" />
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h5>{price}</h5>
            <div class="divider-sidebar"></div>
            {wishlist.find((item) => item._id === items._id) ? (
              <button
                className="btn-bag-card"
                onClick={() => removeFromWishlist(items)}
              >
                <span className="material-icons md-24 material-icons-outlined">
                  favorite
                </span>
              </button>
            ) : (
              <button
                className="card-badge card-badge-def badge-right wishlist-badge"
                onClick={() => addToWishlist(items)}
              >
                <span className="material-icons md-24 material-icons-outlined">
                  favorite_border
                </span>
              </button>
            )}
            {cart.find((item) => item._id === items._id) ? (
              <button className="btn link-btn-outline icon-dark">
                <Link to="/cart">Go to Cart</Link>
              </button>
            ) : (
              <button
                className="btn link-btn-outline icon-dark "
                onClick={() => moveToCart(items)}
              >
                MOVE TO BAG
              </button>
            )}

            {/* <Link to="/cart" className="btn-bag-card">
              <span>MOVE TO BAG</span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
