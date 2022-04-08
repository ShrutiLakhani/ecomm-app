export const filterReducer = (filterState, action) => {
    const initialState = {
        sortby:"",
    }
    switch (action.type){
        case "SORT_BY":
            return {...filterState, sortby: action.payload}
        default:
           return filterState;
    }
}