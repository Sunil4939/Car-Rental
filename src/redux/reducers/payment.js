import { LOADING, PAYMENT_INTENT, CUSTOMER_DATA } from "../types";

const initialState = {
    loading: false,
    paymentIntent: null,
    customerData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PAYMENT_INTENT:
            return {
                ...state,
                paymentIntent: action.payload
            }
        case CUSTOMER_DATA:
            return {
                ...state,
                customerData: action.payload
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