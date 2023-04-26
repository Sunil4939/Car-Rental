import AsyncStorage from "@react-native-async-storage/async-storage";
import { RNToasty } from "react-native-toasty";
import { BOOKING_DATA, BOOKING_HISTORY, LOADING, SESSION_ID, } from "../types";
import http from "../../services/api";
import objectToFormData from "../../services/objectToFormData";
import { createCustomer, createPaymentIntent } from "./paymentAction";
import { GetAllNotification } from "./notificationAction";

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
                // RNToasty.Success({
                //     title: "Get Booking Car successfully",
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


export const CreateSessionId = (postData, amount, navigation) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });
    // console.log("amot : ", postData, amount.amount)

    http.post(`session_id`, amount, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(async response => {
            if (response.data.response) {
                await dispatch(CreatePaymentApi({...postData, session_id: response.data.data.id}, navigation))
                dispatch({
                    type: SESSION_ID,
                    payload: response.data.data,
                });
             
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
                    title: "session id create successfully",
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

export const CreatePaymentApi = (postData, navigation) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    postData = await objectToFormData(postData)

    http.post(`create_payment`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(response => {
            if (response.data.response) {
                console.log("data payment : ", response.data.data)
                dispatch(createCustomer(response.data.data.booking_amount, response.data.data.currency))
                // dispatch(ShowAllBookingApi())
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
                    title: "create payment successfully",
                    duration: 2,
                });
                navigation && navigation.navigate("Payment")
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



export const BookingHistoryApi = () => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.post(`booking_history`)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: BOOKING_HISTORY,
                    payload: response.data.data,
                });
             
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: "Get Booking Car successfully",
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


export const UpdateBookingStatus = (car_booking_id, payment_intent, navigation) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    // console.log("navigation : ", navigation)

    http.get(`booking_status?car_booking_id=${car_booking_id}&payment_intent=f${payment_intent}`)
        .then(response => {
            if (response.data.response) {
                dispatch(ShowAllBookingApi())
                navigation && navigation.navigate("Trips")
                dispatch(GetAllNotification())
                dispatch({
                    type: LOADING,
                    payload: false,
                });
       
                RNToasty.Success({
                    title: "booking status update successfully",
                    duration: 2,
                });
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