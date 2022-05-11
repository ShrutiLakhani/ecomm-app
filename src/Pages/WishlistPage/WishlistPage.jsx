import React, { useState } from "react";
import "./WishlistPage.css";
import { WishlistCard } from "../../Components/index";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
export function WishlistPage() {
  const { wishlist } = useWishlist();
  console.log("WishlistPage", wishlist);
  return (
    <>
      <main className="page-wrapper">
        <div class="product-page">
          <div class="wishlist-head">
            <h1 className="page-title">My Wishlist</h1>
            {wishlist.length === 0 ? (
              <h1 className="page-subtitle_wishlist">Wishist list empty :(</h1>
            ) : (
              <div className="wishlist-section">
                {wishlist.map((item) => (
                  <WishlistCard {...item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
