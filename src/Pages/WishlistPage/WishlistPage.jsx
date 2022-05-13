import React, { useState } from "react";
import "./WishlistPage.css";
import { WishlistCard } from "../../Components/index";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
export function WishlistPage() {
  const { wishlist } = useWishlist();
  return (
    <>
      <main className="page-wrapper">
        <div class="wishlist-page">
          <div class="wishlist-head">My Wishlist</div>
          {wishlist.length === 0 ? (
            <div className="wishlist-empty-section">
              <h1>Wishist list empty 😔</h1>
            </div>
          ) : (
            <div className="wishlist-container">
              {wishlist.map((item) => (
                <WishlistCard {...item} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
