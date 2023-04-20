import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
import Icons from '../../component/atoms/Icons';
import { COLORS, SIZES, icons } from '../../constants';
import styles from './styles';
import RazorpayCheckout from 'react-native-razorpay';
// import { STRIPE_PUBLISH_KEY } from '../../../@env'
import { CardField, StripeProvider, confirmPayment } from '@stripe/stripe-react-native';
// import { CreditCardInput } from 'react-native-payment-card';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../../component/atoms/buttons/Button1';
import { PAYMENT_INTENT_CLIENT_SECRET, STRIPE_PUBLISH_KEY } from '../../services/keys';
import createPaymentIntent from '../../services/stripeApi';
// import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


const StripePayment = ({ navigation }) => {

    const [cardInfo, setCardInfo] = useState(null)

    const fetchCardDetails = (cardDetails) => {
        // console.log('my cardDetails', cardDetails);
        if (cardDetails.complete) {
            setCardInfo(cardDetails)
        } else {
            setCardInfo(null)
        }
    }

    const onDone = async () => {
        const postData = {
            amount: 4000,
            currency: "CAD"
        }
        let res = await confirmPayment("pi_3MxrFQSCc88vSVBk0hMqlg4o_secret_VHNXmbYSpWPQxdTlK1Cux0eOz", { paymentMethodType: "card" })
        console.log("confirmPayment response : ", res)
        //    try{
        //     // let res = await createPaymentIntent(postData)
        //     // let res = await confirmPayment(postData)
        //     console.log("createPaymentIntent response : ", res)
        //    }catch(err){
        //     console.log("payment err : ", err)
        //    }

        // alert("payment success")
        // console.log("card info  : ", cardInfo)

    }
    const handleRazorpay = () => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: '<YOUR_KEY_ID>',
            amount: '5000',
            name: 'Acme Corp',
            order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
            prefill: {
                email: 'gaurav.kumar@example.com',
                contact: '9098194917',
                name: 'Gaurav Kumar'
            },
            theme: { color: '#53a20e' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        })
    }

    return (
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />

            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Icons name={"back"} size={20} color={COLORS.black} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Payment</Text>
                    {/* <View>
                        <Text style={styles.title}>Pay $1,862.22</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.date}>Wed,15 Mar 23, 10:00 AM</Text>
                            <Icons name={"rightArrow"} size={15} color={COLORS.black} style={{ marginHorizontal: SIZES.width * .03 }} />
                            <Text style={styles.date}>Wed,15 Mar 23, 10:00 AM</Text>
                        </View>
                    </View> */}
                </View>
            </View>
            {/* <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={"handled"}
            >
                <View style={styles.cardForm}>
                    <View style={{height: SIZES.height * .78}}>
                        {/* <CreditCardInput
                            autoFocus
                            requiresName
                            requiresCVC
                            requiresEmail
                            labelStyle={styles.labelStyle}
                            inputStyle={styles.inputStyle}
                            validColor={"black"}
                            invalidColor={"red"}
                            placeholderColor={"darkgray"}
                            onChange={(text) => console.log("onchange : ", text)}
                        /> 
                    </View>
                 <Button1 backgroundColor={"#000000"}
                    textColor={COLORS.white}
                    style={{width: SIZES.width * .9, borderWidth: 0}}
                    >
                        Pay Now
                    </Button1> 
                </View>
            </KeyboardAwareScrollView>
            {/* <Button1 backgroundColor={COLORS.black}>
                Pay Now
            </Button1> */}
            {/* <CreditCardInput onChange={(text) => console.log("onchange : ", text)} /> */}
            {/* <LiteCreditCardInput
                autoFocus
                requiresName
                requiresCVC
                requiresEmail
                labelStyle={styles.labelStyle}
                inputStyle={styles.inputStyle}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}
                onChange={(text) => console.log("onchange : ", text)} /> */}

           {/* <StripeProvider
                // publishableKey={STRIPE_PUBLISH_KEY}
                publishableKey={"pk_test_51Mw8mWSCc88vSVBkw6pUOUgLKORLszeJE3JIL3xJKWu1tzHGtKINthXbshNsvSd1N8ME51x2BpjBkxHyEuUAATCY00gY3b3z03"}
                merchantIdentifier="merchant.identifier" // required for Apple Pay
                urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
            > */}
                <View style={styles.container}>
                    <View style={{ width: SIZES.width, padding: 16 }}>
                        <CardField
                            // postalCodeEnabled={true}
                            postalCodeEnabled={false}
                            placeholders={{
                                number: '4242 4242 4242 4242',
                            }}
                            cardStyle={{
                                backgroundColor: '#FFFFFF',
                                textColor: '#000000',
                                borderWidth: 1,
                            }}
                            style={{
                                width: '100%',
                                height: 50,
                                marginVertical: 30,
                            }}
                            onCardChange={(cardDetails) => {
                                fetchCardDetails(cardDetails)
                            }}
                            onFocus={(focusedField) => {
                                console.log('focusField', focusedField);
                            }}
                        />
 <Button1 backgroundColor={"#000000"}
                    textColor={COLORS.white}
                    style={{width: SIZES.width * .9, borderWidth: 0}}
                    onPress={onDone}
                    >
                        Pay Now
                    </Button1>
                        {/* <PaymentButton
                            source={icons.googlePay}
                            title={"Google Pay"}
                            disabled={!cardInfo}
                            onPress={() => onDone()}
                        /> */}
                    </View>
                </View>
            {/* </StripeProvider>  */}
            {/* <View style={{ ...styles.button, marginTop: SIZES.height * .02, }}>
                <Text style={styles.buttonText}>Preferred Payment Method</Text>
            </View>
<PaymentButton
    source={icons.googlePay}
    title={"Google Pay"}
    onPress={() => handleRazorpay()}
/>
            <PaymentButton
                source={icons.paytm}
                title={"Paytm UPI"}
            />
            <PaymentButton
                source={icons.phonePay}
                title={"PhonePe"}
            />

            <View style={styles.button}>
                <Text style={styles.buttonText}>Other Payment Options</Text>
            </View>

            <PaymentButton
                source={icons.netBanking}
                title={"Net Banking"}
                onPress={() => navigation.navigate("PaymentSuccess")}
            />
            <PaymentButton
                source={icons.wallet}
                title={"Credit / Debit Card"}
            />
            <PaymentButton
                source={icons.upi}
                title={"UPI"}
            /> */}


        </View>
    )
}

export default StripePayment;

// import { CardField, createToken, useStripe, confirmPayment, confirmPayment, PaymentMethod } from '@stripe/stripe-react-native';
// import React, { useState } from 'react';
// import { usePaymentSheet, CardField, useCreatePaymentIntentMutation, useConfirmPayment, confirmPayment } from '@stripe/stripe-react-native';
// import { Button, StatusBar, Text, TouchableOpacity, View } from 'react-native';
// import styles from './styles'
// import { COLORS, SIZES } from '../../constants';
// import Icons from '../../component/atoms/Icons';
// import { useEffect } from 'react';
// import Button1 from '../../component/atoms/buttons/Button1';
// import { PAYMENT_INTENT_CLIENT_SECRET, STRIPE_PUBLISH_KEY, STRIPE_SECRET_KEY } from '../../services/keys';
// import axios from 'axios';
// // import createPaymentIntent from '../../services/stripeApi';


// const Payment = () => {
//         const [cardInfo, setCardInfo] = useState(null)

//         const fetchCardDetails = (cardDetails) => {
//             // console.log('my cardDetails', cardDetails);
//             if (cardDetails.complete) {
//                 setCardInfo(cardDetails)
//             } else {
//                 setCardInfo(null)
//             }
//         }
    
//         const onDone = async () => {
//             const postData = {
//                 amount: 5000,
//                 currency: "CAD"
//             }
//             console.log("card info  : ", cardInfo)
//         }

//     const { initPaymentSheet, presentPaymentSheet, } = usePaymentSheet();
//     const [loading, setLoading] = useState(false);
//     // const API_URL = "http://localhost:3000"
  
//     const fetchPaymentSheetParams = async () => {
//         const postData = {
//             amount: 2000,
//             currency: "CAD"
//         }
//         axios.post(`http://localhost:3000/payment-sheet`, postData).then((res) => {
//             console.log("res api : ", res)
//         }).catch((err) => {
//             console.log("err : ", err)
//         })
//     //   const response = await fetch(`http://localhost:3000/payment-sheet`, {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },
//     //     data: {
//     //         "amount": 2000,
//     //         "currency": "CAD"
//     //     }
//     //   });
//     //   const { paymentIntent, ephemeralKey, customer} = await response.json();
      
  
//     //   return {
//     //     paymentIntent,
//     //     ephemeralKey,
//     //     customer,
//     //   };
//     };
//     // fetchPaymentSheetParams()
  
//     // const initializePaymentSheet = async () => {
//     //   const {
//     //     paymentIntent,
//     //     ephemeralKey,
//     //     customer,
//     //     publishableKey,
//     //   } = await fetchPaymentSheetParams();
  
//     //   const { error } = await initPaymentSheet({
//     //     merchantDisplayName: "Example, Inc.",
//     //     // customerId: customer,
//     //     // customerEphemeralKeySecret: ephemeralKey,
//     //     paymentIntentClientSecret: PAYMENT_INTENT_CLIENT_SECRET,
//     //     // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
//     //     //methods that complete payment after a delay, like SEPA Debit and Sofort.
//     //     // allowsDelayedPaymentMethods: true,
//     //     // defaultBillingDetails: {
//     //     //   name: 'Jane Doe',
//     //     // }
//     //   });
//     //   if (!error) {
//     //     setLoading(true);
//     //     openPaymentSheet()
//     //   }
//     // };
  
//     // const openPaymentSheet = async () => {
//     //   // see below
//     //   const {error} = await presentPaymentSheet()
//     //   console.log("eroo : ", error)
//     // };
  
//     // useEffect(() => {
//     //   initializePaymentSheet();
//     // }, []);
    
// //  const [ready, setReady] = useState(false);
// //     const { initPaymentSheet, presentPaymentSheet, loading  } = usePaymentSheet();
//     // const [loading, setLoading] = useState(false);

//     const handleCreatePaymentIntent = () => {
//         const [createPaymentIntent] = useCreatePaymentIntentMutation( )
//         // const [createPaymentIntent] = useCreatePaymentIntentMutation({
//         //     amount: 1099,
//         //     currency: 'eur',
//         //     // customer: customer.id,
//         //     automatic_payment_methods: {
//         //       enabled: true,
//         //     },
//         // })
//          console.log("createPaymentIntent  : ", createPaymentIntent)
//         // console.log("confirmPayment  : ", confirmPayment)
//     }
    

//     const initializePaymentSheet = async () => {
//         let { error } = await initPaymentSheet({
//             merchantDisplayName: "Example, Inc.",
//             paymentIntentClientSecret: PAYMENT_INTENT_CLIENT_SECRET,
//         });
//         if (!error) {
//             console.log("loading: ", loading)
//             setLoading(true);
//         }
//         if (error) {
//             alert(`Error code: ${error.code}`, error.message);
//         } else {
//             openPaymentSheet()
//         }
//     }

//     const openPaymentSheet = async () => {
         
//         presentPaymentSheet().then((response) => {
//             console.log("payment sheet response : ", response)
//         }).catch((error) => {
//             alert(`Error code: ${error.code}`, error.message);
//         })
//     };

  
//     const handlePayment = async () => {
//         console.log("card info : ", cardInfo)
//         let confirmPaymentIntent = await confirmPayment(PAYMENT_INTENT_CLIENT_SECRET, { paymentMethodType: "card" })

//         console.log("confirmPaymentIntent response : ", confirmPaymentIntent)
//         // alert("payment success")
//     }

//     return (
//         <View>
//             <View style={styles.container}>
//                 <View style={{ width: SIZES.width, padding: 16 }}>
//                     <CardField
//                         // postalCodeEnabled={true}
//                         postalCodeEnabled={false}
//                         placeholders={{
//                             number: '4242 4242 4242 4242',
//                         }}
//                         cardStyle={{
//                             backgroundColor: '#FFFFFF',
//                             textColor: '#000000',
//                             borderWidth: 1,
//                         }}
//                         style={{
//                             width: '100%',
//                             height: 50,
//                             marginVertical: 30,
//                         }}
//                         onCardChange={(cardDetails) => {
//                             fetchCardDetails(cardDetails)
//                         }}
//                         onFocus={(focusedField) => {
//                             console.log('focusField', focusedField);
//                         }}
//                     />


//                 </View>
//             </View>
//             <Button1 backgroundColor={COLORS.black}
//                 // onPress={initializePaymentSheet}
//                 // onPress={handleCreatePaymentIntent}
//                 onPress={handlePayment}
//                 textColor={COLORS.white}
//             >
//                 Pay Now
//             </Button1>

//         </View>
//     );

// }

// export default Payment;