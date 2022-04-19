import React from "react";
import "./CartCard.css";
import { Link } from "react-router-dom";
export function CartCard() {
  return (
    <div className="cart-card">
      <div className="card-container">
        <div className="card-top-section">
          <div className="image-box">
            <img
              src="https://michaelkors.scene7.com/is/image/MichaelKors/30F1G9HS7B-1335_1?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90"
              alt="bag-image"
            />
          </div>
          <div className="card-details">
            <h3>Michael Kors</h3>
            <p>MICHAEL Brown & Acorn Carmen Small Satchel</p>
            <p>Brown</p>
            <div className="quantity">
              <label for="quantity">Qty</label>
              <input
                className="cart-quantity"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
                placeholder="1"
              ></input>
            </div>
            <div>₹ 31,500</div>
            <Link to="#" className="card-bottom-section-link">
              Remove
            </Link>
            <span>|</span>
            <Link to="/wishlist" className="card-bottom-section-link">
              Move to wishlist
            </Link>
          </div>
          <Link to="#" className="card-closebtn">
            &times;
          </Link>
        </div>
      </div>
    </div>
  );
}
