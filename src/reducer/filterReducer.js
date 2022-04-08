export const filterReducer = (filterState, action) => {
    const initialState = {
        sortby:"",
        rating:"",
    }
    switch (action.type){
        case "SORT_BY":
            return {...filterState, sortby: action.payload}
        case "RATING":
            return {...filterState, rating: action.payload}
        default:
           return filterState;
    }
}