import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { CAR_IMAGES, CAR_LIST, LOADING, } from "../types";
import objectToFormData from "../../services/objectToFormData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetUserDataApi } from "./authAction";


export const GetCarListApi = () => async dispatch => {
    // const userId = await AsyncStorage.getItem("@USER_ID")
    // console.log("userId : ",userId)
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.get("show_list")
        .then(response => {
            if (response.data.length > 0) {
                dispatch({
                    type: CAR_LIST,
                    payload: response.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: "Car list fetch successfully",
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
            console.log("vendor car data error : ", error)
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

export const SaveVendorDataApi = (postdataIn, navigation) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });
    let postData = await objectToFormData(postdataIn)
    postdataIn.features && postdataIn.features[0] && postdataIn.features.map((item, index) => {
        postData.append("features", item)
        // console.log("shop banner : ", item)
    })
    console.log("formdata : ", postData)
   
    http.post("save-data", postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(response => {
            if (response.data.response) {
                dispatch(GetUserDataApi())
                dispatch(GetCarListApi())
                RNToasty.Success({
                    title: "Car list added successfully",
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                navigation && navigation.navigate('CarList')
                // navigation && navigation.replace('AllCarList')
                
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
            console.log("vendor error : ", error)
            dispatch({
                type: LOADING,
                payload: false,
            });
            if (error.response.data.message) {
                console.log("vendor error : ", error.response.data.message)
                RNToasty.Error({
                    title: error.response.data.message,
                    duration: 2,
                });
            }

        })
};



export const GetCarImageApi = (imageId) => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    // console.log("userId : ",userId)
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.post(`showimg?image_id=${imageId}&host_id=${userId}`,postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: CAR_IMAGES,
                    payload: response.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: "Car image fetch successfully",
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
            // console.log("vendor image error : ", error)
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

export const DeleteCarDataApi = (carId) => async dispatch => {
    // const userId = await AsyncStorage.getItem("@USER_ID")
    // console.log("carId : ", carId)
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.post(`delete/?car_id=${carId}`)
        .then(response => {
            if (response.data.response) {
                dispatch(GetCarListApi())
                RNToasty.Success({
                    title: response.data.message,
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
            // console.log("vendor error : ", error)
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

export const UpdateCarDataApi = (carId, postdataIn, navigation) => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    
    // console.log("carId : ", carId, userId)
   
    dispatch({
        type: LOADING,
        payload: true,
    });
    const  postData = await objectToFormData(postdataIn)
    // postdataIn.features && postdataIn.features[0] && postdataIn.features.map((item, index) => {
    //     postData.append("features", item)
    //     // console.log("shop banner : ", item)
    // })
    // console.log("formdata : ", postData)

    http.post(`update_car?car_id=${carId}`,postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(response => {
            if (response.data.response) {
                dispatch(GetCarListApi())
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                navigation && navigation.goBack()
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
            console.log("vendor error : ", error.response.data.message)

            }

        })
};


export const UpdateCarImageApi = (image_id, car_image_id, postdataIn) => async dispatch => {
  
   
    dispatch({
        type: LOADING,
        payload: true,
    });
    const  postData = await objectToFormData(postdataIn)
    // postdataIn.features && postdataIn.features[0] && postdataIn.features.map((item, index) => {
    //     postData.append("features", item)
    //     // console.log("shop banner : ", item)
    // })
    // console.log("formdata : ", postData)

    http.post(`updateimg?image_id=${image_id}&image_car_id=${car_image_id}`,postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(response => {
            if (response.data.response) {
                dispatch(GetCarListApi())
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // navigation && navigation.goBack()
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
            console.log("vendor error : ", error.response.data.message)

            }

        })
};