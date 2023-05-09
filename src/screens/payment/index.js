// import React, { useState } from 'react';
// import { View, Text, StatusBar, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
// import Icons from '../../component/atoms/Icons';
// import { COLORS, SIZES, icons } from '../../constants';
// import styles from './styles';
// import RazorpayCheckout from 'react-native-razorpay';
// import { CardField, StripeProvider, initPaymentSheet, presentPaymentSheet, useConfirmPayment } from '@stripe/stripe-react-native';
// // import { CreditCardInput } from 'react-native-payment-card';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import Button1 from '../../component/atoms/buttons/Button1';
// import { PAYMENT_INTENT_CLIENT_SECRET, STRIPE_PUBLISH_KEY } from '../../services/keys';
// import { confirmPaymentIntent, createPaymentIntent, createCustomer} from '../../redux/actions/paymentAction';
// import { connect } from 'react-redux';
// import { useEffect } from 'react';


// // import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


// const PaymentButton = ({ source, iconStyle, onPress, title, disabled }) => {
//     return (
//         <TouchableOpacity
//             disabled={disabled}
//             style={styles.btn}
//             onPress={onPress ? onPress : null}
//         >
//             <View
//                 style={styles.row}
//             >
//                 <View
//                     style={styles.iconBox}
//                 >
//                     <Image source={source} style={{ ...styles.iconStyle, ...iconStyle }} resizeMode='contain' />

//                 </View>
//                 <View>
//                     <Text style={styles.btnText}>{title}</Text>
//                 </View>
//             </View>

//         </TouchableOpacity>
//     )
// }

// const Payment = ({ navigation, confirmPaymentIntent, paymentIntent, customerData }) => {

//     const [cardInfo, setCardInfo] = useState(null)
//     const [loading, setLoading] = useState(false);
//     const {confirmPayment} = useConfirmPayment();

//     const fetchCardDetails = (cardDetails) => {
//         // console.log('my cardDetails', cardDetails);
//         if (cardDetails.complete) {
//             setCardInfo(cardDetails)
//             console.log("card info : ", cardInfo)
//         } else {
//             setCardInfo(null)
//         }
//     }


//     const initializePaymentSheet = async () => {
//         let { error } = await initPaymentSheet({
//             merchantDisplayName: "Example, Inc.",
//             paymentIntentClientSecret: paymentIntent && paymentIntent.client_secret,
//             customerId: customerData && customerData.id,
//         });
//         if (!error) {
//             console.log("loading: ", loading)
//             setLoading(true);
//         }
//         if (error) {
//             alert(`Error code: ${error.code}`, error.message);
//         } 
//         else {
//             openPaymentSheet()
//         }
//     }

//     const openPaymentSheet = async () => {
// presentPaymentSheet().then((response) => {
//     console.log("payment sheet response : ", response)
// }).catch((error) => {
//     alert(`Error code: ${error.code}`, error.message);
// })
//     };

//     useEffect(() => {
//         initializePaymentSheet()
//     },[])

//     const onDone = async () => {
//        const clientSecret = paymentIntent && paymentIntent.client_secret
//     //    const billingDetails: BillingDetails = {
//     //     email: 'jenny.rosen@example.com',
//     //   };
//         const postData = {
//             amount: 4000,
//             currency: "CAD"
//         }
//         // if(PAYMENT_INTENT_CLIENT_SECRET){
//         //     confirmPaymentIntent( paymentIntent.id, "pm_card_visa")
//         // }
//         // let res = await confirmPayment(paymentIntent.client_secret, { paymentMethodType: "card" })
//         // console.log("confirmPayment response : ", res)
//         const {paymentIntent, error} = await confirmPayment(clientSecret, {
//             paymentMethodType: 'Card',
//             // paymentMethodData: {
//             //   billingDetails,
//             // },
//           });

//     if (error) {
//         console.log('Payment confirmation error', error);
//       } else if (paymentIntent) {
//         console.log('Success from promise', paymentIntent);
//       }
//     };

//         // alert("payment success")
//         // console.log("card info  : ", cardInfo)

//     // }

//     return (
// <View
//     style={styles.container}
// >
//     <StatusBar
//         backgroundColor={COLORS.light}
//         barStyle="dark-content"
//     />

//     <View style={styles.header}>
//         <View style={styles.headerRow}>
//             <TouchableOpacity
//                 style={styles.backBtn}
//                 onPress={() => navigation.goBack()}
//             >
//                 <Icons name={"back"} size={20} color={COLORS.black} />
//             </TouchableOpacity>
//             <Text style={styles.title}>Payment</Text>
//             {/* <View>
//                 <Text style={styles.title}>Pay $1,862.22</Text>
//                 <View style={{ flexDirection: 'row', }}>
//                     <Text style={styles.date}>Wed,15 Mar 23, 10:00 AM</Text>
//                     <Icons name={"rightArrow"} size={15} color={COLORS.black} style={{ marginHorizontal: SIZES.width * .03 }} />
//                     <Text style={styles.date}>Wed,15 Mar 23, 10:00 AM</Text>
//                 </View>
//             </View> */}
//         </View>
//     </View>
//             {/* <KeyboardAwareScrollView
//                 showsVerticalScrollIndicator={false}
//                 keyboardShouldPersistTaps={"handled"}
//             >
//                 <View style={styles.cardForm}>
//                     <View style={{height: SIZES.height * .78}}>
//                         {/* <CreditCardInput
//                             autoFocus
//                             requiresName
//                             requiresCVC
//                             requiresEmail
//                             labelStyle={styles.labelStyle}
//                             inputStyle={styles.inputStyle}
//                             validColor={"black"}
//                             invalidColor={"red"}
//                             placeholderColor={"darkgray"}
//                             onChange={(text) => console.log("onchange : ", text)}
//                         /> 
//                     </View>
//  <Button1 backgroundColor={"#000000"}
//     textColor={COLORS.white}
//     style={{width: SIZES.width * .9, borderWidth: 0}}
//     >
//         Pay Now
//     </Button1> 
//                 </View>
//             </KeyboardAwareScrollView>
//             {/* <Button1 backgroundColor={COLORS.black}>
//                 Pay Now
//             </Button1> */}
//             {/* <CreditCardInput onChange={(text) => console.log("onchange : ", text)} /> */}

//                 <View style={styles.container}>
//                     <View style={{ width: SIZES.width, padding: 16 }}>
//                         <CardField
//                             // postalCodeEnabled={true}
//                             postalCodeEnabled={false}
//                             placeholders={{
//                                 number: '4242 4242 4242 4242',
//                             }}
//                             cardStyle={{
//                                 backgroundColor: '#FFFFFF',
//                                 textColor: '#000000',
//                                 borderWidth: 1,
//                             }}
//                             style={{
//                                 width: '100%',
//                                 height: 50,
//                                 marginVertical: 30,
//                             }}
//                             onCardChange={(cardDetails) => {
//                                 console.log('focusField', cardDetails);
//                                 fetchCardDetails(cardDetails)
//                             }}
//                             onFocus={(focusedField) => {
//                                 console.log('focusField', focusedField);
//                             }}
//                         />
//  <Button1 backgroundColor={"#000000"}
//                     textColor={COLORS.white}
//                     style={{width: SIZES.width * .9, borderWidth: 0}}
//                     onPress={onDone}
//                     >
//                         Pay Now
//                     </Button1>

//                     </View>
//                 </View>

//         </View>
//     )
// }
// const mapStateToProps = (state) => ({
//     loading: state.payment.loading,
//     customerData: state.payment.customerData,
//     paymentIntent: state.payment.paymentIntent,
// })

// const mapDispatchToProps = {
//     createPaymentIntent,
//     createCustomer,
//     confirmPaymentIntent
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Payment)



import { connect } from 'react-redux';
import { confirmPaymentIntent, createCustomer, createPaymentIntent } from '../../redux/actions/paymentAction';
import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import Button1 from '../../component/atoms/buttons/Button1';
import { COLORS, SIZES } from '../../constants';
import styles from './styles'
import Loading1 from '../../component/atoms/Loading/Loading1'
import { CreatePaymentApi, CreateSessionId, UpdateBookingStatus } from '../../redux/actions/bookingAction';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from '../../component/atoms/Icons';



// onPress={() => { setVisible(!visible), CreateSessionId(postData, {amount: (Number(data.price) + Number(data.additional_price))}, navigation)}}
// onPress={() => navigation.navigate("CheckOut", { data: postData, carData: singleCarData })}
const Payment = ({ navigation, CreatePaymentApi, createCustomer, UpdateBookingStatus, customerData, route, paymentIntent, loading }) => {
    const [paymentStatus, setPaymentStatus] = useState(null);
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const amount = route.params && route.params.amount
    const car_booking_id = route.params && route.params.car_booking_id

    // console.log("payment intent secret key : ", paymentIntent && paymentIntent.id)

    // console.log("payment intent secret key : ", paymentIntent && paymentIntent.id, paymentIntent && paymentIntent.client_secret)
    const initializePaymentSheet = async () => {
        const result = await initPaymentSheet({
            merchantDisplayName: "Example, Inc.",
            paymentIntentClientSecret: paymentIntent && paymentIntent.client_secret,
            customerId: customerData && customerData.id,
        });
        if (result.error) {
            console.log('Error initializing payment sheet:', result.error);
        } else {
            openPaymentSheet()
        }
    };

    const openPaymentSheet = async () => {

        const result = await presentPaymentSheet({
            paymentIntentClientSecret: paymentIntent && paymentIntent.client_secret,
            paymentMethodTypes: ['card'],
        });
        // console.log('Error processing payment:', result);
        if (result.error) {
            // console.log('Error processing payment:', result.error);
            setPaymentStatus('failed');
            navigation.navigate("PaymentFailed")
        } else {
            navigation.navigate("PaymentSuccess", { routeName: route.params && route.params.routeName, amount: amount})
            // navigation.navigate("PaymentSuccess", { amount: amount })
            // UpdateBookingStatus(car_booking_id, paymentIntent && paymentIntent.id, navigation)
            CreatePaymentApi({
                car_booking_id: car_booking_id,
                payment_intent: paymentIntent && paymentIntent.id,
                currency: "inr"
            })
            setPaymentStatus('succeeded');
        }
        //  else if (result.paymentStatus === 'succeeded') {
        //     console.log('Payment succeeded!');
        //     setPaymentStatus('succeeded');
        //     navigation.navigate("PaymentSuccess", { success: "success", paymentResult: result, amount:amount })
        // } else {
        //     console.log('Payment failed:', result.paymentStatus);
        //     setPaymentStatus('failed');
        //     navigation.navigate("PaymentSuccess", { success: "failed", amount:amount })
        // }
    };

    // const stripe = useStripe()

    // const [cardInfo, setCardInfo] = useState(null)

    //   const fetchCardDetails = (cardDetails) => {
    //     // console.log('my cardDetails', cardDetails);
    //     if (cardDetails.complete) {
    //       setCardInfo(cardDetails)
    //     } else {
    //       setCardInfo(null)
    //     }
    //   }

    //   const onDone = async () => {

    //     try {
    //       let res = await stripe.confirmPayment("pi_3MzYl9SCc88vSVBk1ttwwxtN_secret_UGxebmE33pSw5D1Tnj9eMEviE", { 
    //         paymentMethodType: "Card" 
    //     })
    //       console.log("confirmPaymentIntent response : ", res)
    //       alert("payment success")
    //     } catch (err) {
    //       console.log("payment err : ", err)
    //     }
    //     console.log("card info  : ", cardInfo)

    //   }
    //   const { confirmPayment } = useStripe();

    //   const handlePayment = async () => {

    //     try {
    //       const { paymentIntent, error } = await confirmPayment('pi_3Myf8WSCc88vSVBk1SsJrx1V_secret_H9cB1RC3kpqp2mgGmSzWqUIk9', {
    //         paymentMethodType: 'Card',
    //         cardDetails: cardInfo,
    //         billingDetails: {
    //           name: 'John Doe',
    //           email: 'john.doe@example.com',
    //         },
    //       });

    //       if (error) {
    //         console.log('Payment failed:', error);
    //       } else {
    //         console.log('Payment succeeded:', paymentIntent);
    //       }
    //     } catch (e) {
    //       console.log('Error:', e);
    //     }
    //   };

    return (
        <>
            {loading ?
                <Loading1 />
                :
                <View
                    style={styles.container}
                >
                    <StatusBar
                        backgroundColor={COLORS.light}
                        barStyle="dark-content"
                    />

                    <View style={styles.btn_box}>
                        <Button1 backgroundColor={"#000000"}
                            textColor={COLORS.white}
                            style={{ width: SIZES.width * .9, borderWidth: 0 }}
                            onPress={initializePaymentSheet}
                        >
                            Pay Now
                        </Button1>
                    </View>

                </View>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    loading: state.payment.loading,
    customerData: state.payment.customerData,
    paymentIntent: state.payment.paymentIntent,
})

const mapDispatchToProps = {
    createPaymentIntent,
    createCustomer,
    confirmPaymentIntent,
    UpdateBookingStatus,
    CreatePaymentApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)