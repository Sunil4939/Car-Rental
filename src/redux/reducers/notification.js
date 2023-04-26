import { LOADING,  NOTIFICATION } from "../types";

const initialState = {
    loading: false,
    notification: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATION:
            return {
                ...state,
                notification: action.payload
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