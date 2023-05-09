import React, { useEffect } from "react";
import Root from "./root";
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux";
import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_PUBLISH_KEY } from "./services/keys";


const App = () => {
useEffect(() => {
  SplashScreen.hide();
}, [])

  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_PUBLISH_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <NavigationContainer>
        <Root />
      </NavigationContainer>
      </StripeProvider>
    </Provider>

  )
}

export default App;
