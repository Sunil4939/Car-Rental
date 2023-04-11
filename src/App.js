import React, { useEffect } from "react";
import Root from "./root";
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux";
const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  )
}

export default App;

