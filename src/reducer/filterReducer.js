export const filterReducer = (filterState, action) => {
    const initialState = {
        sortby:"",
        rating:"",
        range: 10000,
    }
    switch (action.type){
        case "SORT_BY":
            return {...filterState, sortby: action.payload}
        case "RATING":
            return {...filterState, rating: action.payload}
        case "PRICE-RANGE":
            return {...filterState, range: action.payload}    
        default:
           return filterState;
    }
}