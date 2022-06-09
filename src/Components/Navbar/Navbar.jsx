import React from "react";
import "./Navbar.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
export function Navbar() {
  const { loggedIn, setLoggedIn } = useAuth();
  const { cartData, setCartData, cartCount } = useCart();
  const { wishlistData, setWishlistData, wishlistCount } = useWishlist();

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
              {loggedIn ? (
                <div className="icon-ecomm wishlist-icon">
                  <Link to="/wishlist">
                    <span class="material-icons">favorite_border</span>
                  </Link>
                  <div className="style-badge style-badge2 badge-ecomm">
                    {wishlistCount}
                  </div>
                </div>
              ) : (
                <Link to="/login" className="login-link">
                  <span>Login</span>
                </Link>
              )}
              {loggedIn ? (
                <div className="icon-ecomm cart-icon">
                  <Link to="/cart">
                    <span className="material-icons">shopping_bag</span>
                  </Link>
                  <div className="style-badge style-badge2 badge-ecomm">
                    {cartCount}
                  </div>
                </div>
              ) : (
                <Link to="/signup" className="login-link">
                  <span>SignUp</span>
                </Link>
              )}
            </div>
          </section>
        </div>
      </header>
    </nav>
  );
}
