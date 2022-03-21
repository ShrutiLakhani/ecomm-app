 import React from "react";
import "./WishlistCard.css";
import { Link } from "react-router-dom";
export function WishlistCard() {
    return (
 
 <div class="cart-card">
                            <div class="card-container">
                                <div class="card-top-section">
                                    <div class="image-box">
                                        <img src="https://michaelkors.scene7.com/is/image/MichaelKors/30F1G9HS7B-1335_1?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90"
                                            alt="bag-image" />
                                    </div>
                                    <div class="card-details">
                                        <h3>Michael Kors</h3>
                                        <p>MICHAEL Brown & Acorn Carmen Small Satchel</p>
                                        <p>Brown<p>
                                                <div class="quantity">
                                                    <label for="quantity">Qty
                                                        <input class="cart-quantity" type="number" id="quantity"
                                                            name="quantity" min="1" max="5" placeholder="1">
                                                </div>
                                                <div>₹ 31,500</div>
                                                <div class="card-bottom-section-links">
                                                    <a href="#">Remove</a>
                                                    <span>|</span>
                                                    <a href="#">Move to wishlist</a>
                                                </div>
                                    </div>
                                    <a href="#" class="card-closebtn">&times;</a>
                                </div>
                            </div>
                            )
                            }