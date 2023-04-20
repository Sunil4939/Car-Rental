import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
import Icons from '../../component/atoms/Icons';
import { COLORS, SIZES, icons } from '../../constants';
import styles from './styles';
import RazorpayCheckout from 'react-native-razorpay';
// import { STRIPE_PUBLISH_KEY } from '../../../@env'
import { CardField, StripeProvider, initPaymentSheet, presentPaymentSheet, useConfirmPayment } from '@stripe/stripe-react-native';
// import { CreditCardInput } from 'react-native-payment-card';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../../component/atoms/buttons/Button1';
import { PAYMENT_INTENT_CLIENT_SECRET, STRIPE_PUBLISH_KEY } from '../../services/keys';
import { confirmPaymentIntent, createPaymentIntent, createCustomer} from '../../redux/actions/paymentAction';
import { connect } from 'react-redux';
import { useEffect } from 'react';


// import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


const PaymentButton = ({ source, iconStyle, onPress, title, disabled }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={styles.btn}
            onPress={onPress ? onPress : null}
        >
            <View
                style={styles.row}
            >
                <View
                    style={styles.iconBox}
                >
                    <Image source={source} style={{ ...styles.iconStyle, ...iconStyle }} resizeMode='contain' />

                </View>
                <View>
                    <Text style={styles.btnText}>{title}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const Payment = ({ navigation, confirmPaymentIntent, paymentIntent, customerData }) => {

    const [cardInfo, setCardInfo] = useState(null)
    const [loading, setLoading] = useState(false);
    const {confirmPayment} = useConfirmPayment();

    const fetchCardDetails = (cardDetails) => {
        // console.log('my cardDetails', cardDetails);
        if (cardDetails.complete) {
            setCardInfo(cardDetails)
            console.log("card info : ", cardInfo)
        } else {
            setCardInfo(null)
        }
    }

    
    const initializePaymentSheet = async () => {
        let { error } = await initPaymentSheet({
            merchantDisplayName: "Example, Inc.",
            paymentIntentClientSecret: paymentIntent && paymentIntent.client_secret,
            customerId: customerData && customerData.id,
        });
        if (!error) {
            console.log("loading: ", loading)
            setLoading(true);
        }
        if (error) {
            alert(`Error code: ${error.code}`, error.message);
        } 
        else {
            openPaymentSheet()
        }
    }

    const openPaymentSheet = async () => {
        presentPaymentSheet().then((response) => {
            console.log("payment sheet response : ", response)
        }).catch((error) => {
            alert(`Error code: ${error.code}`, error.message);
        })
    };

    useEffect(() => {
        initializePaymentSheet()
    },[])

    const onDone = async () => {
       const clientSecret = paymentIntent && paymentIntent.client_secret
    //    const billingDetails: BillingDetails = {
    //     email: 'jenny.rosen@example.com',
    //   };
        const postData = {
            amount: 4000,
            currency: "CAD"
        }
        // if(PAYMENT_INTENT_CLIENT_SECRET){
        //     confirmPaymentIntent( paymentIntent.id, "pm_card_visa")
        // }
        // let res = await confirmPayment(paymentIntent.client_secret, { paymentMethodType: "card" })
        // console.log("confirmPayment response : ", res)
        const {paymentIntent, error} = await confirmPayment(clientSecret, {
            paymentMethodType: 'Card',
            // paymentMethodData: {
            //   billingDetails,
            // },
          });
           
    if (error) {
        console.log('Payment confirmation error', error);
      } else if (paymentIntent) {
        console.log('Success from promise', paymentIntent);
      }
    };

        // alert("payment success")
        // console.log("card info  : ", cardInfo)

    // }

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
                                console.log('focusField', cardDetails);
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
                       
                    </View>
                </View>

        </View>
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
    confirmPaymentIntent
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)

// // import { CardField, createToken, useStripe, confirmPayment, usePaymentSheet, } from '@stripe/stripe-react-native';
// import React, { useState } from 'react';
// import { usePaymentSheet, CardField, useConfirmPayment,  initStripe } from '@stripe/stripe-react-native';
// import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
// import styles from './styles'
// import { COLORS, SIZES } from '../../constants';
// import Icons from '../../component/atoms/Icons';
// import { useEffect } from 'react';
// import Button1 from '../../component/atoms/buttons/Button1';
// import { PAYMENT_INTENT_CLIENT_SECRET, STRIPE_PUBLISH_KEY, STRIPE_SECRET_KEY } from '../../services/keys';
// import { confirmPaymentIntent, createCustomer, createPaymentIntent } from '../../redux/actions/paymentAction';
// import { connect } from 'react-redux';


// const Payment = ({ createPaymentIntent, createCustomer, paymentIntent,confirmPaymentIntent, customerData, }) => {

//     // console.log("customer data : ", customerData && customerData.id)
//     // console.log("payment intent : ", paymentIntent && paymentIntent.client_secret)

//     const { initPaymentSheet, presentPaymentSheet, } = usePaymentSheet();
//     const [loading, setLoading] = useState(false);
//     const {confirmPayment} = useConfirmPayment();

    
//     const [cardInfo, setCardInfo] = useState(null)

//     const fetchCardDetails = (cardDetails) => {
//         // console.log('my cardDetails', cardDetails);
//         if (cardDetails.complete) {
//             setCardInfo(cardDetails)
//         } else {
//             setCardInfo(null)
//         }
//     }


//         const onDone = async () => {
//         const postData = {
//             amount: 4000,
//             currency: "CAD"
//         }
//         console.log("payds fintent ; ", paymentIntent.id)
//         // confirmPaymentIntent(PAYMENT_INTENT_CLIENT_SECRET, "pm_card_visa")
        // if(PAYMENT_INTENT_CLIENT_SECRET){
        //     confirmPaymentIntent( paymentIntent.id, "pm_card_visa")
        // }
//         // const {paymentIntent, error} = await confirmPayment(PAYMENT_INTENT_CLIENT_SECRET, {
//         //     paymentMethodType: 'Card',
//         //     // paymentMethodData: {
//         //     //   billingDetails,
//         //     // },
//         //   });
      
//         //   if (error) {
//         //     console.log('Payment confirmation error', error);
//         //   } else if (paymentIntent) {
//         //     console.log('Success from promise', paymentIntent);
//         //   }
      
//         //    try{
//         //     // let res = await createPaymentIntent(postData)
//         //     // let res = await confirmPayment(postData)
//         //     console.log("createPaymentIntent response : ", res)
//         //    }catch(err){
//         //     console.log("payment err : ", err)
//         //    }

//         // alert("payment success")
//         // console.log("card info  : ", cardInfo)

//     }
  
   
   

//     // useEffect(() => {
//     //     createCustomer()
//     //     createPaymentIntent(6000, "USD")
//     //     initializePaymentSheet()
//     // }, [ paymentIntent]);

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
//                 onPress={onDone}
//                 textColor={COLORS.white}
//             >
//                 Pay Now
//             </Button1>

//         </View>
//     );
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
