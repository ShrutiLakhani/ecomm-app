import { initialObj } from "../context/filter-context";

export function filterReducer(state, action) {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
}