import AsyncStorage from "@react-native-async-storage/async-storage";
import { RNToasty } from "react-native-toasty";
import { FILTER, FILTER_DATA, LOADING, SINGLE_CAR_DATA, } from "../types";
import http from "../../services/api";
import RazorpayCheckout from "react-native-razorpay";
import objectToFormData from "../../services/objectToFormData";
import razorPay from "../../services/razorPay";

export const FilterApi = (filterUrl, postData) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    console.log("filter uril : ", filterUrl)
    http.get(filterUrl)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: FILTER_DATA,
                    payload: response.data.data,
                });
                dispatch({
                    type: FILTER,
                    payload: postData,
                })
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
                    title: "Apply filter successfully",
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
            console.log("search car data error : ", error)
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



export const SearchFilterApi = (searchTitle) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.get(`search_car?search=${searchTitle}`)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: FILTER_DATA,
                    payload: response.data.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
                    title: "Search car data successfully",
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
            console.log("search car data error : ", error)
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

export const ResetFilterApi = (postData) => dispatch => {
   
    dispatch({
        type: FILTER,
        payload: postData,
    })
    dispatch(SearchFilterApi("b"))
    RNToasty.Success({
        title: "Reset filter successfully",
        duration: 2,
    });
    // navigation.goBack()
    
};

export const SingleCarDataApi = (carId) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.post(`show/${carId}`)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: SINGLE_CAR_DATA,
                    payload: response.data.data,
                });
                
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
                    title: "Get single car data successfully",
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



const handleRazorpay = (carData,currency, userDetails, navigation) => {
    console.log("car book data : ", currency)
    var options = {
        currency: currency,
        key: 'rzp_test_RgalfgmjSAdlNS',
        amount: carData.price + "00",
        // amount: carData.price,
        name: 'Car Rental',
        prefill: userDetails,

        theme: { color: '#53a20e' }
    }
    RazorpayCheckout.open(options).then((data) => {
        // handle success
        // alert(`Success: ${data.razorpay_payment_id}`);
        navigation.navigate("PaymentSuccess",{data: data, success: "success"} )
        // const postData = {
        //     transactionId: data.razorpay_payment_id,
        //     status: "confirm"
        // }
        // dispatch(UpdateOrderApi(orderId, postData, navigation))
    }).catch((error) => {
        // handle failure
        // console.log("error", error)
        navigation.navigate("PaymentSuccess",{success: "failed"} )
        // alert(`Error: ${error.code} | ${error.description}`);
    })
}

export const StoreCarBookingApi = (postData,currency, userDetails, navigation) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    // console.log("post data car booking : ", postData)
    
    postData = await objectToFormData(postData)

    http.post(`store_car_Booking`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    } )
        .then(async response => {
            if (response.data.response) {
                handleRazorpay(response.data.data,currency,userDetails, navigation)
                dispatch({
                    type: LOADING,
                    payload: false
                })
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });

            } else {
                dispatch({
                    type: LOADING,
                    payload: false
                })
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            console.log("store car booking error : ", error)
            dispatch({
                type: LOADING,
                payload: false
            })
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};

export const UpdateCarBookingApi = (orderId, postData, navigation) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });
     postData = await objectToFormData(postData)
    
    http.post(`postProduct/${id}`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
    http.post(`updateOrder/${orderId}`,postData )
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: ORDER_STATUS,
                    payload: true
                })
                dispatch({
                    type: LOADING,
                    payload: false
                })
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                navigation.navigate("AboutOrder", {order : response.data.data})

            } else {
                dispatch({
                    type: LOADING,
                    payload: false
                })
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false
            })
            RNToasty.Error({
                title: error.response.data.message,
                duration: 2,
            });
        })
};