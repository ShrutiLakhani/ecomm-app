import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext()

const initialState = {
    sortby:"",
}

const FilterProvider = ({children}) => {
    const [filterState, filterDispatch] = useReducer(filterReducer, initialState)
    
return(
    <FilterContext.Provider value={{filterState, filterDispatch}}>
        {children}
    </FilterContext.Provider>
)
}

const useFilter = () => useContext(FilterContext)

const sortByPrice = ({sortby}, products) => {
    const sortedList = [...products]
    switch (sortby){
        case "LOW-TO-HIGH":
            return sortedList.sort((prod1, prod2) => prod2.price - prod1.price)
        case "HIGH-TO-LOW":
            return sortedList.sort((prod1, prod2) => prod1.price - prod2.price)
        default:
            return sortedList
    }
}

const applyFilters = (filterState, ...args)=>(products)=>{
    return args.reduce((acc,curr)=>{
        return curr(filterState, acc)
    },products)
}

export const getProductList =(filterState, products)=> applyFilters(
    filterState,
    sortByPrice,
)(products)

export {FilterProvider, useFilter}