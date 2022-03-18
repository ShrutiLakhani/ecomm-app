import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";
export function CategoryCard() {
  return (
                    <div className="card2-container category-card category-img">
                        <Link to="/HomePage"><img
                                src="https://assets.tatacliq.com/medias/sys_master/images/32285859086366.jpg"
                                alt="image-bag" />
                        </Link>        
                    </div>     
  );
}