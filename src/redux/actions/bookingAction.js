import AsyncStorage from "@react-native-async-storage/async-storage";
import { RNToasty } from "react-native-toasty";
import { BOOKING_DATA, BOOKING_HISTORY, CLAIM_List, CLAIM_TYPE, LOADING, SESSION_ID, SINGLE_BOOKING, } from "../types";
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
                await dispatch(CreatePaymentApi({ ...postData, session_id: response.data.data.id }, navigation))
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

export const CreatePaymentApi = (postData) => async dispatch => {
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
                dispatch(ShowAllBookingApi())
                dispatch(BookingHistoryApi())
                dispatch(GetAllNotification())
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                //  RNToasty.Success({
                //     title: "payment create successfully",
                //     duration: 2,
                // });
                // RNToasty.Success({
                //     title: "payment create successfully",
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


export const UpdateBookingStatus = (car_booking_id, payment_intent, navigation) => async (dispatch, getState) => {
    const { userRole } = getState().auth
    dispatch({
        type: LOADING,
        payload: true,
    });

    console.log("userData : ", userRole)

    http.get(`booking_status?car_booking_id=${car_booking_id}&payment_intent=f${payment_intent}`)
        .then(response => {
            if (response.data.response) {
                navigation && navigation.navigate("Trips")
                RNToasty.Success({
                    title: "booking status update successfully",
                    duration: 2,
                });
                dispatch(ShowAllBookingApi())
                dispatch(GetAllNotification())
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                navigation && navigation.reset({ routes: [{ name: userRole == "customer" ? "SearchPage" : 'HomePage' }] });

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


export const UpdatePickupLocation = (car_booking_id, postData) => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    postData = await objectToFormData(postData)


    http.post(`store_pick_loc?car_booking_id=${car_booking_id}`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(response => {
            if (response.data.response) {
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                dispatch(ShowAllBookingApi())
                dispatch(GetAllNotification())
                dispatch({
                    type: LOADING,
                    payload: false,
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
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};

export const BookingCancel = (booking_id) => async (dispatch, getState) => {
    const {userRole} = getState().auth
    dispatch({
        type: LOADING,
        payload: true,
    });

    const booking_cancel_url = userRole == "vendor" ? "vendor-booking-cancel" : "customer-booking-cancel"
    console.log("userRole : ",booking_id, userRole)

    http.get(`${booking_cancel_url}?bookingId=${booking_id}`)
        .then(response => {
            if (response.data.response) {
                dispatch(ShowAllBookingApi())
                dispatch(BookingHistoryApi())
                dispatch(GetAllNotification())
                RNToasty.Success({
                    title: "booking cancel successfully",
                    duration: 2,
                });
                // dispatch(GetAllNotification())
                dispatch({
                    type: LOADING,
                    payload: false,
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




export const MarkBookingComplete = (booking_id, postData) => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    postData = await objectToFormData(postData)


    http.post(`mark?booking_id=${booking_id}`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(response => {
            if (response.data.response) {
                dispatch(ShowAllBookingApi())
                dispatch(BookingHistoryApi())
                RNToasty.Success({
                    title: "Booking complete successfully",
                    duration: 2,
                });
                
                dispatch({
                    type: LOADING,
                    payload: false,
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
            if (error.response.data.message) {
                RNToasty.Error({
                    title: error.response.data.message,
                    duration: 2,
                });
            }

        })
};


export const GetBookingComplete = (booking_id) => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true,
    });


    http.get(`book-complete?booking_id=${booking_id}`)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: SINGLE_BOOKING,
                    payload: response.data.data,
                });
                RNToasty.Success({
                    title: "booking complete get successfully",
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
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


export const GetClaimType = () => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true,
    });


    http.get(`claim-type`)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: CLAIM_TYPE,
                    payload: response.data.data,
                });
                // RNToasty.Success({
                //     title: "claim type get successfully",
                //     duration: 2,
                // });
                dispatch({
                    type: LOADING,
                    payload: false,
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

export const GetAllClaim = () => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true,
    });


    http.get(`claim-list`)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: CLAIM_List,
                    payload: response.data.data,
                });
                // RNToasty.Success({
                //     title: "booking complete get successfully",
                //     duration: 2,
                // });
                dispatch({
                    type: LOADING,
                    payload: false,
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

export const CreateClaimApi = (postData, navigation) => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    postData = await objectToFormData(postData)


    http.post(`claim-file`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(response => {
            if (response.data.response) {
                dispatch(GetAllClaim())
                dispatch(ShowAllBookingApi())
                navigation && navigation.replace("ClaimPage")
                RNToasty.Success({
                    title: "Create claim successfully",
                    duration: 2,
                });
                
                dispatch({
                    type: LOADING,
                    payload: false,
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