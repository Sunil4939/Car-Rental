import { LOADING, LOCATION, SEARCH_DATA, } from "../types";

const initialState = {
    loading: false,
    searchData: null,
    location: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_DATA:
            return {
                ...state,
                searchData: action.payload
            }
        case LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}