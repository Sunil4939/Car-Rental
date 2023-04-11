import { LOADING,  All_CAR_LIST } from "../types";

const initialState = {
    loading: false,
    allCarList: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case All_CAR_LIST:
            return {
                ...state,
                allCarList: action.payload
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