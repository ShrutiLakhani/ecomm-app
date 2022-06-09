import React, { useEffect } from "react";
import "./HomePage.css";
import { CategoryCard, HeroSection } from "../../Components/index";
import { useFilter } from "../../context/filter-context";

export function HomePage() {
  const { filterDispatch } = useFilter();
  const clearCategory = () => {
    filterDispatch({ type: "CLEAR" });
  };
  useEffect(() => {
    clearCategory();
  }, []);
  return (
    <>
      <HeroSection />
      <div className="homepage-category-container">
        <h2>SHOP BY CATEGORIES</h2>
        <div className="divider-underline"></div>
      </div>
      <CategoryCard />
    </>
  );
}
