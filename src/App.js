import React, { useEffect } from "react";
import Root from "./root";
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux";
// import { STRIPE_PUBLISH_KEY } from '@env'
import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_PUBLISH_KEY } from "./services/keys";
import Payment from "./screens/payment";


const App = () => {
  // alert(STRIPE_PUBLISH_KEY)
  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_PUBLISH_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      {/* <Payment /> */}
      <NavigationContainer>
        <Root />
      </NavigationContainer>
      </StripeProvider>
    </Provider>

  )
}

export default App;


// import React, { useEffect } from "react";
// import SplashScreen from 'react-native-splash-screen'
// // import { StripeProvider, initPaymentSheet, presentPaymentSheet, useStripe } from "@stripe/stripe-react-native";
// import { STRIPE_PUBLISH_KEY, STRIPE_SECRET_KEY } from '@env'
// import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
// // import Payment from "./screens/payment";
// import Button1 from "./component/atoms/buttons/Button1";
// import { useState } from "react";
// // import createPaymentIntent from "./services/stripeApi";


// const App = () => {
//   // alert(STRIPE_SECRET_KEY)
//   useEffect(() => {
//     SplashScreen.hide();
//   }, [])

  // const { initPaymentSheet, presentPaymentSheet } = useStripe();
  // const [loading, setLoading] = useState(false);

  // const initializePaymentSheet = async () => {

  //   let { error } = await initPaymentSheet({
  //     paymentIntentClientSecret: "sk_test_51Mw8mWSCc88vSVBk4IaSDMxwTanz7R6aiismSJqtSBV0X3LWY6UO0NMgMFUQufINGqEmkENGQKKweVAHdgERapVc00yBaRUYre",
  //     // googlePay: true,
  //     // merchantCountryCode: 'US',
  //     // testEnv: true,
  //   });
  //   if (!error) {
  //     console.log("loading: ", loading)
  //       setLoading(true);
  //   }
  //   if (error) {
  //     alert(`Error code: ${error.code}`, error.message);
  //   } else {
  //     alert('Success', 'Your order is confirmed!');
  //     openPaymentSheet()
  //   }
  // }

  // const openPaymentSheet = async () => {
  //   // const { error } = await presentPaymentSheet()
  //   // const { error, paymentOption } = await presentPaymentSheet({
  //   //   clientSecret: paymentIntent,
  //   // });
  //   presentPaymentSheet({
  //     clientSecret: "sk_test_51Mw8mWSCc88vSVBk4IaSDMxwTanz7R6aiismSJqtSBV0X3LWY6UO0NMgMFUQufINGqEmkENGQKKweVAHdgERapVc00yBaRUYre"
  //   }).then(res => {
  //     console.log("res ; ", res)
  //   }).catch(err => {
  //     console.log("error : ", err)
  //   })

  // };


  // const openSheet = async () => {
  //   const { error, paymentOption } = await initPaymentSheet({
  //     merchantDisplayName: "Example, Inc.",
  //     // customerId: "cus_NiUhpkRKOErFTt",
  //     // ephemeralKey: "ek_test_YWNjdF8xTXc4bVdTQ2M4OHZTVkJrLGF3MXpGTjJFdXZHOXJRZkpZQmppVnpFMGJVNUpkemE_00zoxkuwfD",
  //     paymentIntentClientSecret: "pi_3Mx3hlSCc88vSVBk1hn9oC2I_secret_0fxLe3jPq3VMdv2UpmIMJtIKr",
  //     // paymentIntentClientSecret: "sk_test_51Mw8mWSCc88vSVBk4IaSDMxwTanz7R6aiismSJqtSBV0X3LWY6UO0NMgMFUQufINGqEmkENGQKKweVAHdgERapVc00yBaRUYre"
  //   });
  //   console.log("err : ", error,)
  //   console.log("payment option : ",  paymentOption)
  //   openPaymentSheet()

  // }


//   return (
//     <StripeProvider
    //   publishableKey={STRIPE_PUBLISH_KEY}
    //   merchantIdentifier="merchant.identifier" // required for Apple Pay
    //   urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    // >
//       {/* <Payment /> */}
//       <Button1
//         onPress={openSheet}
//       >Pay</Button1>
//     </StripeProvider>
//   )
// }


// export default App;

