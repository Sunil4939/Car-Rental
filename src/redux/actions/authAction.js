import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { AUTH_TOKEN, HOST_DATA, LOADING, USER_DATA, USER_ROLE, } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import objectToFormData from "../../services/objectToFormData";
import { GetVendorApi } from "./vendorGetApi";
import { AllCarListApi } from "./homeAction";
import { BookingHistoryApi, ShowAllBookingApi } from "./bookingAction";
import { GetCarListApi } from "./vendorRegistration";
import { AvailableLocationApi } from "./searchAction";
import { GetAllNotification } from "./notificationAction";

const InitialCall = () => async dispatch => {
    dispatch(GetUserDataApi())
    dispatch(ShowAllBookingApi())
    dispatch(BookingHistoryApi())
    dispatch(GetAllNotification())
    dispatch(GetVendorApi())
    dispatch(AllCarListApi())
    dispatch(GetCarListApi())
    dispatch(AvailableLocationApi())
}

export const SignUpApi = (postData, navigation) => async dispatch => {
    postData = await objectToFormData(postData)
    dispatch({
        type: LOADING,
        payload: true,
    });
    http.post(`register`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(async response => {
            if (response.data.response) {
                navigation && navigation.replace("Login")
                RNToasty.Success({
                    title: "Create account successfully",
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Info({
                //     title: "sign up info",
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            console.log("sign up error : ", error)
            dispatch({
                type: LOADING,
                payload: false,
            });
            RNToasty.Error({
                title: "sign up error",
                duration: 2,
            });
        })
};

export const LoginApi = (postData, navigation) => async dispatch => {
    postData = await objectToFormData(postData)

    dispatch({
        type: LOADING,
        payload: true,
    });
    http.post("login", postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: AUTH_TOKEN,
                    payload: response.data.message.token
                })
                await AsyncStorage.setItem('@USER_TOKEN', response.data.message.token);
                await AsyncStorage.setItem('@USER_ID', String(response.data.message.id))
                dispatch(InitialCall())
                RNToasty.Success({
                    title: response.data.data,
                    duration: 2,
                });
                dispatch({
                    type: USER_ROLE,
                    payload: response.data.message.role
                })
               
                navigation && navigation.goBack()
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
                    title: "Please create info new account",
                    duration: 2,
                });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            console.log("login error : ", error)
            RNToasty.Error({
                title: "login error ",
                duration: 2,
            });

        })
};


export const LogoutApi = () => dispatch => {
    dispatch({
        type: AUTH_TOKEN,
        payload: null
    })
    dispatch({
        type: USER_ROLE,
        payload: null,
    })
    dispatch({
        type: USER_DATA,
        payload: null,
    })
    AsyncStorage.removeItem('@USER_TOKEN')
    AsyncStorage.removeItem('@USER_ID')
}


export const UpdateUserApi = (postData, navigation) => async dispatch => {

    postData = await objectToFormData(postData)
    // console.log("update user post data : ", postData)

    dispatch({
        type: LOADING,
        payload: true,
    });
    http.post(`user-profile`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(async response => {
            if (response.data.response) {
                dispatch(GetUserDataApi())
                RNToasty.Success({
                    title: "Edit profile successfully",
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                })
                navigation.goBack()
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
            console.log("edit user error : ", error)
            // if (error.response.data) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }
        })
};



export const GetUserDataApi = () => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    // console.log("usfs fi id ; ", userId)
    dispatch({
        type: LOADING,
        payload: true,
    });
    http.get(`getDetails/${userId}`)
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: USER_DATA,
                    payload: response.data.data[0],
                })
                dispatch({
                    type: USER_ROLE,
                    payload: response.data.data[0].role,
                })
                // RNToasty.Success({
                //     title: "get user data successfully",
                //     duration: 2,
                // });
                dispatch({
                    type: LOADING,
                    payload: false,
                })
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
            // console.log("user data error : ", error.response.data)
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};

export const UpdateHostProfileApi = (postData, navigation) => async dispatch => {

    postData = await objectToFormData(postData)
    // console.log("update host profile post data : ", postData)

    dispatch({
        type: LOADING,
        payload: true,
    });
    http.post(`host-profile`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(async response => {
            if (response.data.response) {
                // dispatch(GetUserDataApi())
                // console.log("host update data : ", response.data.data)
                navigation.goBack()
                RNToasty.Success({
                    title: "Edit host profile successfully",
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Error({
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
            console.log("edit host user error : ", error)
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};



export const GetHostDataApi = () => async dispatch => {
    // const userId = await AsyncStorage.getItem("@USER_ID")
    // console.log("usfs fi id ; ", userId)
    dispatch({
        type: LOADING,
        payload: true,
    });
    http.get(`get-host-profile`)
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: HOST_DATA,
                    payload: response.data.data[0],
                })
                dispatch({
                    type: USER_ROLE,
                    payload: response.data.data[0].role,
                })
                // RNToasty.Success({
                //     title: "get user data successfully",
                //     duration: 2,
                // });
                dispatch({
                    type: LOADING,
                    payload: false,
                })
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
            // console.log("user data error : ", error.response.data)
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};

export const ForgetPasswordApi = (postData, navigation) => async (dispatch, getState) => {

    // const {userData} = getState().auth
    // console.log("forget userData : ", userData)

    postData = await objectToFormData(postData)
    // console.log("forget post data : ", postData)

    dispatch({
        type: LOADING,
        payload: true,
    });
    http.post(`forgot-password`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(async response => {
            if (response.data.response) {
                // console.log("host update data : ", response.data.data)
                navigation && navigation.replace("Login")
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Error({
                //    title: "Invalid email",
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            console.log("forget error : ", error)
            RNToasty.Error({
                title: "Invalid email",
                duration: 2,
            });
        })
};

export const ResetPasswordApi = (postData, navigation) => async dispatch => {

    postData = await objectToFormData(postData)
    // console.log("update host profile post data : ", postData)

    dispatch({
        type: LOADING,
        payload: true,
    });
    http.post(`reset-password`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(async response => {
            if (response.data.response) {
                // dispatch(GetUserDataApi())
                // console.log("host update data : ", response.data.data)
                navigation.goBack()
                RNToasty.Success({
                    title: "Edit host profile successfully",
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Error({
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
            console.log("edit host user error : ", error)
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};