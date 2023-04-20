import AsyncStorage from "@react-native-async-storage/async-storage";
import { RNToasty } from "react-native-toasty";
import { LOADING, SEARCH_DATA } from "../types";
import http from "../../services/api";

export const SearchCarApi = (searchTitle) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.get(`search_car?search=${searchTitle}`)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: SEARCH_DATA,
                    payload: response.data.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: "Search car data successfully",
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
            console.log("search car data error : ", error)
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
