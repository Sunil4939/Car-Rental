import AsyncStorage from "@react-native-async-storage/async-storage";
import { RNToasty } from "react-native-toasty";
import { BOOKING_DATA, LOADING, } from "../types";
import http from "../../services/api";

export const ShowAllBookingApi = () => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.post(`show_all_carbooking`)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: BOOKING_DATA,
                    payload: response.data.data,
                });
             
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
                    title: "Get Booking Car successfully",
                    duration: 2,
                });
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            if (error.response.data.message) {
                RNToasty.Error({
                    title: error.response.data.message,
                    duration: 2,
                });
            }

        })
};