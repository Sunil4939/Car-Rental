import { LOADING, BOOKING_DATA, BOOKING_HISTORY, SINGLE_BOOKING, CLAIM_TYPE, CLAIM_List } from "../types";

const initialState = {
    loading: false,
    bookingData: null,
    bookingHistory: null,
    singleBooking: null,
    claimType: null,
    claimList: null
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
        case SINGLE_BOOKING:
            return {
                ...state,
                singleBooking: action.payload
            }

            case CLAIM_TYPE:
                return {
                    ...state,
                    claimType: action.payload
                }
            case CLAIM_List:
                return {
                    ...state,
                    claimList: action.payload
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