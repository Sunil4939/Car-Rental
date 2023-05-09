import { RNToasty } from "react-native-toasty";
import { CUSTOMER_DATA, LOADING, PAYMENT_INTENT } from "../types";
import stripeHttp from "../../services/stripeApi";


export const createCustomer = (amount, currency) => async (dispatch, getState) => {
    const { userData } = getState().auth
    dispatch({
        type: LOADING,
        payload: true,
    });

    // console.log("user data customer : ",userData)

    stripeHttp.post(`customers?email=${userData && userData.email}`)
        .then(response => {
            if (response.data) {
                dispatch({
                    type: CUSTOMER_DATA,
                    payload: response.data,
                });
                dispatch(createPaymentIntent(amount, currency, response.data.id))
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: "Customer created successfully",
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

export const createPaymentIntent = (amount, currency, customerId) => async (dispatch, getState) => {

    amount = await amount == 0 ? 1* 100 : amount * 100
    //    currency = "INR"
    dispatch({
        type: LOADING,
        payload: true,
    });
    // console.log("amt and cur : ", amount, currency) 


    stripeHttp.post(`payment_intents?amount=${amount}&currency=INR&customer=${customerId}`)
        .then(response => {
            if (response.data) {
                dispatch({
                    type: PAYMENT_INTENT,
                    payload: response.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: "Payment intent created successfully",
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
            console.log("create payment intent error : ", error)
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


export const confirmPaymentIntent = (payment_intent, payment_method) => async dispatch => {
    console.log("payment_intent and payment_method : ", payment_intent, payment_method)

    dispatch({
        type: LOADING,
        payload: true,
    });
    //  {{server}}/v1/payment_intents/pi_3MxqAjSCc88vSVBk1yfw6Cqv_secret_7BKuI8nA7kG8LwE4IBm08I4Bm/confirm?payment_method=card
    //  stripeHttp.post(`payment_intents/${payment_intent}/confirm?payment_method=${payment_method}`)
    stripeHttp.post(`payment_intents/pi_1GszXG2eZvKYlo2CELvuyh4E/confirm?payment_method=pm_card_visa`)
        .then(response => {
            if (response.data) {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: "Payment confirm successfully",
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
            console.log("confirm payment intent error : ", error.response.data)
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
