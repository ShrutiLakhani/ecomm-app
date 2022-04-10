import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "../../context/cart-context";
// import { useWishlist } from "../../context/wishlist-context";

import "./ProductCard.css";
export function ProductCard({products}) {
  const { title, image, price, categoryName, rating, badge, id, _id } = products;
  return (
   <div className="product-content-container">
            <div className="product-list">
                <div className="Wishlist-container">
                     <div className="card2-container wishlist-card">
                         <Link to="/wishlist">
                         <span><i className="far fa-heart fa-sm badge-style"></i></span>
                         </Link>
                              <img src={image}
                                        alt="" />
                                 <h1>{title}</h1>
                                 <h2>{price}</h2>
                                 <h2>{rating}</h2>
                                 <h2>{categoryName}</h2>
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