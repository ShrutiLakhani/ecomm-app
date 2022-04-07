import { createContext, React, useReducer, useContext } from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

export const initialObj = {
  sortBy: null,
};
const FilterProvider = ({ children }) => {
  const [filter, filterDispatch] = useReducer(filterReducer, initialObj);

  return (
    <FilterContext.Provider value={{ filterDispatch, filter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };