import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
export function ProductCard() {
    return (
       <div className="product-content-container">
           <div className="product-list">
               <div className="Wishlist-container">
                    <div className="card2-container wishlist-card">
                        <Link to="/wishlist">
                        <span><i className="far fa-heart fa-sm badge-style"></i></span>
                        </Link>
                             <img src="https://img.tatacliq.com/images/i7/658Wx734H/MP000000010223017_658Wx734H_202108092243441.jpeg"
                                       alt="image-bag" />
                                <h1>Michael Kors</h1>
                                <h2>Karlie Medium Leather Satchel</h2>
                                <h5><ins>₹22,500</ins><del>₹45,000</del>50% Off</h5>
                                <button className="primary-button-icon-cart">
                                    <Link to="/cart" className="prod-btn-bag-card">       
                                       <span className="material-icons"> shopping_bag</span>ADD TO BAG
                                    </Link> 
                                </button>
                    </div>
               </div>
           </div>
        </div>
    )
}