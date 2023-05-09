import { AUTH_TOKEN, HOST_DATA, LOADING, USER_DATA, USER_ID, USER_ROLE } from "../types";

const initialState = {
    token: null,
    userId: null,
    loading: false,
    userData: null,
    userRole: null,
    hostData: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case USER_ID:
            return {
                ...state,
                userId: action.payload
            }
        case USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
            case HOST_DATA:
                return {
                    ...state,
                    hostData: action.payload
                }
        case USER_ROLE:
            return {
                ...state,
                userRole: action.payload
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