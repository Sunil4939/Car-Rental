import { AVAILABILITY, CAR_IMAGES, CAR_LIST, COUNTRIES, CURRENCIES, DIST_UNIT_LIST, FEATURES, FUEL_LIST, LOADING, PRICE_LIST, TRANS_LIST, } from "../types";

const initialState = {
    countries: {},
    loading: false,
    transmissionList: [],
    fuelList: [],
    priceList: {},
    currencies: {},
    distanceList: {},
    features: [],
    availability: [],
    carList: [],
    carImages: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case CURRENCIES:
            return {
                ...state,
                currencies: action.payload
            }
        case FUEL_LIST:
            return {
                ...state,
                fuelList: action.payload
            }
        case TRANS_LIST:
            return {
                ...state,
                transmissionList: action.payload
            }
        case PRICE_LIST:
            return {
                ...state,
                priceList: action.payload
            }
        case DIST_UNIT_LIST:
            return {
                ...state,
                distanceList: action.payload
            }
        case FEATURES:
            return {
                ...state,
                features: action.payload
            }
        case AVAILABILITY:
            return {
                ...state,
                availability: action.payload
            }
        case CAR_LIST:
            return {
                ...state,
                carList: action.payload
            }
        case CAR_IMAGES:
            return {
                ...state,
                carImages: action.payload
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