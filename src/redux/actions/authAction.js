import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { AUTH_TOKEN, LOADING, USER_DATA, } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import objectToFormData from "../../services/objectToFormData";
import objectToUrlencoded from "../../services/objectToUrlencoded";
import { GetVendorApi } from "./vendorGetApi";
import { AllCarListApi } from "./homeAction";
import { ShowAllBookingApi } from "./bookingAction";
import { GetCarListApi } from "./vendorRegistration";

const InitialCall = () => async dispatch => {
    dispatch(GetUserDataApi())
    dispatch(GetVendorApi())
    dispatch(AllCarListApi())
    dispatch(ShowAllBookingApi())
    dispatch(GetCarListApi())
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
                navigation.navigate("Login")
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
                // RNToasty.Error({
                //     title: response.data.data,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
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
                dispatch(InitialCall())
                await AsyncStorage.setItem('@USER_TOKEN', response.data.message.token);
                await AsyncStorage.setItem('@USER_ID', String(response.data.message.id))
                dispatch({
                    type: AUTH_TOKEN,
                    payload: response.data.message.token
                })
                navigation && navigation.goBack()
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
                    title: response.data.data,
                    duration: 2,
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
            RNToasty.Normal({
                title: "Please create new account",
                duration: 2,
            });

        })
};


export const LogoutApi = () => dispatch => {
    dispatch({
        type: AUTH_TOKEN,
        payload: null
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
                navigation.goBack()
                RNToasty.Success({
                    title: "Edit profile successfully",
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
            console.log("edit user error : ", error)
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
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
                    payload: response.data.data,
                })
                RNToasty.Success({
                    title: "get user data successfully",
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
            // console.log("user data error : ", error.response.data)
            RNToasty.Error({
                title: error.response.data.message,
                duration: 2,
            });
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