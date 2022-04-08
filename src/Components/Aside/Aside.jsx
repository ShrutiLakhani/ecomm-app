import React from "react";
import { useFilter } from "../../context/filter-context";
import "./Aside.css";

export function Aside() {
    const {filterState, filterDispatch} = useFilter()
    return (

                <div className="product-content-left-sidebar">
                    <aside>
                        <div className="left-sidebar-filter-section header-container">
                            <span className="header-title">FILTERS</span>
                        </div>
                        <div className="left-sidebar-filter-section price-input filters-subheader-title">
                             <span className="price-text">PRICE RANGE</span>
                            <form className="price-form">
                                <span>10000</span>
                                <span>100000</span>  
                            </form>
                               <input type="range" 
                                      min={10000} 
                                      max={100000} 
                                    //   step={50000}
                                      className="slider-input"
                                      ></input>
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
                                        <input type="radio" className="radio-prod-category" name="rating" value="4" checked={filterState.rating==="4"} onChange={(e)=>
                                        filterDispatch({type:"RATING",payload:e.target.value})} ></input>
                                        <label className="radio left-sidebar-label">
                                           4 Stars Above 
                                        </label>
                                    </div>
                                    <div>
                                       <input type="radio" className="radio-prod-category" name="rating" value="3" checked={filterState.rating==="3"} onChange={(e)=>
                                    filterDispatch({type:"RATING",payload:e.target.value})}></input>
                                         <label className="radio left-sidebar-label">
                                            3 Stars Above
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" className="radio-prod-category" name="rating" value="2" checked={filterState.rating==="2"} onChange={(e)=>
                                        filterDispatch({type:"RATING",payload:e.target.value})}></input>
                                         <label className="radio left-sidebar-label">
                                            2 Stars Above
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" className="radio-prod-category" name="rating" value="1" checked={filterState.rating==="1"} onChange={(e)=>
                                        filterDispatch({type:"RATING",payload:e.target.value})}></input>
                                         <label className="radio left-sidebar-label">
                                            1 Stars Above
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="left-sidebar-filter-section category-container">
                                <span className="filters-subheader-title">SORT BY</span>
                                <div className="checkbox">
                                    <div>
                                        <input type="radio" className="radio-prod-category" name="radio" checked={filterState.sortby==="LOW-TO-HIGH"} onChange={()=>filterDispatch({type:"SORT_BY", payload:"LOW-TO-HIGH"})}></input>
                                        <label className="radio left-sidebar-label">
                                           High to Low 
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" className="radio-prod-category" name="radio " checked={filterState.sortby==="HIGH-TO-LOW"} onChange={()=>filterDispatch({type:"SORT_BY", payload:"HIGH-TO-LOW"})}></input>
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