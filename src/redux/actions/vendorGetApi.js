import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { AVAILABILITY, COUNTRIES, CURRENCIES, DIST_UNIT_LIST, FEATURES, FUEL_LIST, LOADING, PRICE_LIST, TRANS_LIST, } from "../types";

export const  GetVendorApi = () => async dispatch =>  {
    dispatch(GetAllCountryApi())
    dispatch(GetAllCurrencyApi())
    dispatch(GetDistanceUnitApi())
    dispatch(GetFuelListApi())
    dispatch(GetPriceListApi())
    dispatch(GetTransmissionListApi())
    dispatch(GetFeaturesApi())
    dispatch(GetAvailabilityApi())
}

export const GetAllCountryApi = () => async dispatch => {
    http.get("countries")
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: COUNTRIES,
                    payload: response.data.data,
                });
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};

export const GetAllCurrencyApi = () => async dispatch => {
    http.get("currencies-list")
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: CURRENCIES,
                    payload: response.data.data,
                });
            
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};

export const GetFuelListApi = () => async dispatch => {
    http.get("fuel")
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: FUEL_LIST,
                    payload: response.data.data,
                });
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};

export const GetTransmissionListApi = () => async dispatch => {
    http.get("transmission")
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: TRANS_LIST,
                    payload: response.data.data,
                });
            
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};

export const GetPriceListApi = () => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.get("price")
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: PRICE_LIST,
                    payload: response.data.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};

export const GetDistanceUnitApi = () => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.get("unit")
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: DIST_UNIT_LIST,
                    payload: response.data.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};

export const GetFeaturesApi = () => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.get("feature-list")
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: FEATURES,
                    payload: response.data.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};

export const GetAvailabilityApi = () => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.get("avail-list")
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: AVAILABILITY,
                    payload: response.data.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};