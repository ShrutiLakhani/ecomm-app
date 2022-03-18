import React from "react";
import "./HeroSection.css";
import heroImg from "../../assets/Images/Hero-Image.webp";
import { Link } from "react-router-dom";
export function HeroSection() {
  return (
     <div className="hero-img-container">
          <img className="hero-img" src={heroImg} alt="Hero-Image" />
                <div className="overlay-text">
                    <a href="/Product/Product.html" className="btn-primary">SHOP NOW</a>
                </div>
      </div>    
  );
}