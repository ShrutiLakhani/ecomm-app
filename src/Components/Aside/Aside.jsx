import React from "react";
import "./Aside.css";

export function Aside() {
    return (

                <div className="product-content-left-sidebar">
                    <aside>
                        <div className="left-sidebar-filter-section header-container">
                            <span className="header-title">FILTERS</span>
                        </div>
                        <div className="left-sidebar-filter-section price-input filters-subheader-title">
                            <span className="price-text">PRICE RANGE</span>
                                {/* <span className="price-text">Min-10000</span>
                                <span className="price-text">Max-100000</span> */}
                            <input type="range" min="10000" max="100000" value="15000" className="slider"></input> 
                        </div>
                        <div className="left-sidebar-filter-section category-container">
                            <span className="filters-subheader-title">CATEGORIES</span>
                             <ul className="categories-list">
                                <li>
                                    <input type="checkbox" className="input-prod-category"></input>  
                                    <label className="checkbox left-sidebar-checkbox left-sidebar-label">
                                      Totes
                                    </label>         
                                </li>
                                <li>
                                    <input type="checkbox" className="input-prod-category"></input>
                                    <label className="checkbox left-sidebar-checkbox left-sidebar-label">
                                        Wallets
                                    </label>    
                                </li>
                                <li>
                                     <input type="checkbox" className="input-prod-category"></input> 
                                    <label className="checkbox left-sidebar-checkbox left-sidebar-label">
                                       Watches
                                    </label>    
                                </li>
                                <li>
                                    <input type="checkbox" className="input-prod-category"></input>
                                    <label className="checkbox left-sidebar-checkbox left-sidebar-label">
                                      Footwear
                                    </label>    
                                </li> 
                            </ul>  
                            <div className="left-sidebar-filter-section category-container">
                                <span className="filters-subheader-title">BRAND</span>
                                <ul className="categories-list">
                                    <li>
                                     <input type="checkbox" className="input-prod-category"></input>
                                       <label className="checkbox left-sidebar-checkbox left-sidebar-label">
                                            Michael Kors
                                       </label>
                                    </li>
                                    <li>
                                         <input type="checkbox" className="input-prod-category"></input>
                                        <label className="checkbox left-sidebar-checkbox left-sidebar-label">
                                        Coach
                                        </label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" className="input-prod-category"></input>
                                        <label className="checkbox left-sidebar-checkbox left-sidebar-label">
                                            Jimmy Choo
                                        </label>            
                                    </li>
                                    <li>
                                         <input type="checkbox" className="input-prod-category"></input>
                                        <label className="checkbox left-sidebar-checkbox left-sidebar-label">
                                         Gucci
                                         </label>  
                                    </li>

                                </ul>

                            </div>
                            <div className="left-sidebar-filter-section category-container">
                                <span className="filters-subheader-title">AVAILABILTY</span>
                                <ul className="categories-list">
                                    <li>
                                        <input type="checkbox" className="input-prod-category"></input>
                                        <label className="checkbox left-sidebar-checkbox left-sidebar-label">
                                            Include Out of Stock
                                        </label>  
                                    </li>
                                </ul>
                            </div>
                            <div className="left-sidebar-filter-section category-container">
                                <span className="filters-subheader-title">RATING</span>
                                <div className="checkbox">
                                    <div>
                                        <input type="radio" className="radio-prod-category" name="radio"></input>
                                        <label className="radio left-sidebar-label">
                                           4 Stars Above 
                                        </label>
                                    </div>
                                    <div>
                                       <input type="radio" className="radio-prod-category" name="radio"></input>
                                         <label className="radio left-sidebar-label">
                                            3 Stars Above
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" className="radio-prod-category" name="radio"></input>
                                         <label className="radio left-sidebar-label">
                                            2 Stars Above
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" className="radio-prod-category" name="radio"></input>
                                        <label className="radio left-sidebar-label">
                                          1 Stars Above
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="left-sidebar-filter-section category-container">
                                <span className="filters-subheader-title">PRICE</span>
                                <div className="checkbox">
                                    <div>
                                        <input type="radio" className="radio-prod-category" name="radio"></input>
                                        <label className="radio left-sidebar-label">
                                           High to Low 
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" className="radio-prod-category" name="radio"></input>
                                        <label className="radio left-sidebar-label">
                                            Low to High
                                        </label>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                </aside>
         </div>
    // </div>
  );
}