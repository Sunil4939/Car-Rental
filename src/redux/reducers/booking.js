import { LOADING, BOOKING_DATA } from "../types";

const initialState = {
    loading: false,
    bookingData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_DATA:
            return {
                ...state,
                bookingData: action.payload
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