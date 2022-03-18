import React from "react";
import "./HomePage.css";
import { CategoryCard, HeroSection } from "../../Components/index";

export function HomePage() {
  return (
    <>
    <HeroSection />      
      <div className="homepage-category-container">
            <h2>SHOP BY CATEGORIES</h2>
            <div className="divider-underline"></div>
      </div>  
      <div className="card-category-shop">      
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      </div>
      </>      
  );
}