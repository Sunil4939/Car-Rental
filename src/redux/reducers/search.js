import {  LOADING, SEARCH_DATA, } from "../types";

const initialState = {
    loading: false,
    searchData: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_DATA:
            return {
                ...state,
                searchData: action.payload
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