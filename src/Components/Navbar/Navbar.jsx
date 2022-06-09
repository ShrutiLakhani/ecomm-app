import React from "react";
import "./Navbar.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
export function Navbar() {
  const { loggedIn, setLoggedIn } = useAuth();
  const { cartData, setCartData } = useCart();
  const { wishlistData, setWishlistData } = useWishlist();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    setLoggedIn(false);
    setCartData([]);
    setWishlistData([]);
    navigate("/");
  };
  return (
    <nav>
      <header className="header-outer">
        <div className="header-inner">
          <section className="ecomm-navbar">
            <Link to="/" className="ecomm-logo-img"></Link>
            <div>
              <input
                className="nav-input-container fa"
                placeholder="Search"
              ></input>
            </div>
            <div className="nav-action-buttons">
              <div className="dropdown">
                <Link to="/signup">
                  <i className="fas fa-user fa-lg"></i>
                </Link>
                <div className="dropdown-content">
                  <Link to="/cart">Orders</Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <a href="#">Giftcards</a>
                  <a href="#">Contact Us</a>
                  <Link onClick={logoutHandler} to="/">
                    <i className="fas fa-sign-out-alt">Logout</i>
                  </Link>
                </div>
              </div>
              <div className="icon-ecomm">
                <Link to="/wishlist">
                  <i className="far fa-heart fa-lg"></i>
                </Link>
              </div>
              <div className="icon-ecomm">
                <Link to="/cart">
                  <span className="material-icons">shopping_bag</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </header>
    </nav>
  );
}
