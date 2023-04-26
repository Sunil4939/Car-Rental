import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { LOADING, NOTIFICATION } from "../types";

export const GetAllNotification = () => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.get(`get-notification`)
        .then(response => {
            if (response.data) {
                dispatch({
                    type: NOTIFICATION,
                    payload: response.data
                });
             
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
                    title: "Get all notification successfully",
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