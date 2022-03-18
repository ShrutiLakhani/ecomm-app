import React from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";
export function Navbar() {
 return (
    <nav>
       <header className="header-outer">
            <div className="header-inner">
                <section className="ecomm-navbar">
                    <a className="ecomm-logo-img" href="./index.html">
                    </a>
                    <div>
                        <input className="nav-input-container fa" placeholder="Search"></input>
                    </div>
                    <div className="nav-action-buttons">
                        <div className="dropdown">
                            <Link to="/signup">
                                <i className="fas fa-user fa-lg"></i>
                            </Link>    
                            <div className="dropdown-content">
                                <a href="#">Orders</a>
                                <a href="#">Wishlist</a>
                                <a href="#">Giftcards</a>
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                        <div className="icon-ecomm">
                            <a href="/WishList/Wishlist.html"><i className="far fa-heart fa-lg"></i></a>
                        </div>
                        <div className="icon-ecomm">
                            <a href="/Cart/Cart.html"><span className="material-icons">
                                    shopping_bag
                                </span></a>
                        </div>
                    </div>    
                </section>
            </div>
        </header>
    </nav>
 );
}