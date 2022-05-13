export const filterReducer = (filterState, action) => {
  const initialState = {
    sortby: "",
    rating: "",
    range: 100000,
    category: [],
    brand: [],
  };
  switch (action.type) {
    case "SORT_BY":
      return { ...filterState, sortby: action.payload };
    case "RATING":
      return { ...filterState, rating: action.payload };
    case "PRICE-RANGE":
      return { ...filterState, range: action.payload };
    case "CATEGORY":
      const { category } = filterState;
      return category.includes(action.payload)
        ? {
            ...filterState,
            category: category.filter(
              (category) => category !== action.payload
            ),
          }
        : { ...filterState, category: [...category, action.payload] };
    case "BRAND":
      const { brand } = filterState;
      return brand.includes(action.payload)
        ? {
            ...filterState,
            brand: brand.filter((brand) => brand !== action.payload),
          }
        : { ...filterState, brand: [...brand, action.payload] };
    case "CLEAR":
      return initialState;
    default:
      return filterState;
  }
};
