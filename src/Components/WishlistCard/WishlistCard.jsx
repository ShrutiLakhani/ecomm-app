import React from "react";
import "./WishlistCard.css";
import { Link } from "react-router-dom";
export function WishlistCard() {
  return (
    <div className="product-content-container">
      <div className="product-list">
        <div className="Wishlist-container">
          <div className="card2-container">
            <Link to="#" className=" wishlist-card card-closebtn">
              &times;
            </Link>
            <img
              src="https://img.tatacliq.com/images/i7/658Wx734H/MP000000010223017_658Wx734H_202108092243441.jpeg"
              alt="image-bag"
            />
            <h1>Michael Kors</h1>
            <h2>Karlie Medium Leather Satchel</h2>
            <h5>
              <ins>₹22,500</ins>
              <del>₹45,000</del>50% Off
            </h5>
            <div class="divider-sidebar"></div>
            <Link to="/cart" className="btn-bag-card">
              <span>MOVE TO BAG</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
