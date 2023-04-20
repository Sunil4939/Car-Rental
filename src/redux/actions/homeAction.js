import AsyncStorage from "@react-native-async-storage/async-storage";
import { RNToasty } from "react-native-toasty";
import { All_CAR_LIST,  LOADING, } from "../types";
import http from "../../services/api";

export const AllCarListApi = () => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.get(`cars`)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: All_CAR_LIST,
                    payload: response.data.data,
                });
             
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: "Get all Car list successfully",
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