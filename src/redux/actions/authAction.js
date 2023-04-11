import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { AUTH_TOKEN, LOADING, USER_DATA, } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import objectToFormData from "../../services/objectToFormData";
import objectToUrlencoded from "../../services/objectToUrlencoded";

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
                RNToasty.Error({
                    title: response.data.data,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            RNToasty.Error({
                title: error.response.data.message,
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
                await AsyncStorage.setItem('@USER_TOKEN', response.data.message.token);
                await AsyncStorage.setItem('@USER_ID', response.data.message.token.split("|")?.[0])
                dispatch(GetUserDataApi())
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
                    title: "Please create new account",
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
    const userId = await AsyncStorage.getItem("@USER_ID")
    // postData = await objectToFormData(postData)
    postData = await objectToUrlencoded(postData)
    console.log("update user post data : ", postData)
    dispatch({
        type: LOADING,
        payload: true,
    });
    http.put(`update/${userId}`, postData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
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
                RNToasty.Error({
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
            console.log("edit user error : ", error)
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};


export const GetUserDataApi = () => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
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
                RNToasty.Error({
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
            RNToasty.Error({
                title: error.response.data.message,
                duration: 2,
            });
        })
};