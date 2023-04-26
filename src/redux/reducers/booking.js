import { LOADING, BOOKING_DATA, BOOKING_HISTORY } from "../types";

const initialState = {
    loading: false,
    bookingData: null,
    bookingHistory: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_DATA:
            return {
                ...state,
                bookingData: action.payload
            }
            case BOOKING_HISTORY:
                return {
                    ...state,
                    bookingHistory: action.payload
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