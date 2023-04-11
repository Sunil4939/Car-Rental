import {  FILTER_DATA, LOADING,FILTER, SINGLE_CAR_DATA } from "../types";

const initialState = {
    loading: false,
    filterData: null,
    filter: null,
    singleCarData: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FILTER_DATA:
            return {
                ...state,
                filterData: action.payload
            }
            case FILTER:
                return {
                    ...state,
                    filter: action.payload
                }
                case SINGLE_CAR_DATA:
                return {
                    ...state,
                    singleCarData: action.payload
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