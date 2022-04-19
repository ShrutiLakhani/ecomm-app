import React from "react";
import "./WishlistPage.css";
import { WishlistCard } from "../../Components/index";
import { Link } from "react-router-dom";
export function WishlistPage() {
  return (
    <>
      <main className="page-wrapper">
        <div class="product-page">
          <div class="wishlist-head">
            My Wishlist
            <div className="product-content-container">
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
