import React from "react";
import "./WishlistCard.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
export function WishlistCard(items) {
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { image, title, description, price, rating } = items;
  console.log(items);

  function moveToCart(product) {
    addToCart(product);
    removeFromWishlist(product);
  }
  return (
    <div className="product-content-container">
      <div className="product-list">
        <div className="Wishlist-container">
          <div className="card2-container">
            {/* <Link to="#" className=" wishlist-card card-closebtn">
              &times;
            </Link>  */}
            <img src={image} alt="image-bag" />
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h5>{price}</h5>
            <div class="divider-sidebar"></div>
            {wishlist.find((item) => item._id === items._id) ? (
              <i
                className="far fa-heart badge-style"
                onClick={() => removeFromWishlist(items)}
              ></i>
            ) : (
              <i
                className="far fa-heart badge-style"
                onClick={() => addToWishlist(items)}
              ></i>
            )}
            {cart.find((item) => item._id === items._id) ? (
              <button className="prod-btn-bag-card">
                <Link to="/cart">Go to Cart</Link>
              </button>
            ) : (
              <button
                className="prod-btn-bag-card"
                onClick={() => moveToCart(items)}
              >
                MOVE TO BAG
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
