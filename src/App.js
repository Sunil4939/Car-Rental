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


// import React, { useState, useEffect } from 'react';
// import { Button, Image, NativeModules, View } from 'react-native';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import SplashScreen from 'react-native-splash-screen';

// const App = () => {
//   const [imageSource, setImageSource] = useState(null);

//   useEffect(() => {
//     SplashScreen.hide();
//   }, [])

//   const chooseImage = async () => {
//     console.log("enter choose image ")
//     ImageCropPicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true
//     }).then( image => {
//       console.log("selected image1 : ", image)
//        setImageSource({ uri: image.path });
//         console.log("selected image2 : ", image)
//     }).catch(error => {
//       console.log("select image error : ", error);
//     });
//   };

//   // const { Memory } = NativeModules;
//   // console.log("memoryInfo : ", Memory);

//   // // Check if Memory module is available
//   // if (Memory) {
//   //   const memoryInfo = Memory.getMemoryInfo();
//   //   console.log(memoryInfo);
//   // } else {
//   //   console.log('Memory module not available');
//   // }

//   // useEffect(() => {
//   //   const { Memory } = NativeModules;
//   //   console.log("memory : ", Memory)
//   //   Memory.getMemoryInfo().then(info => {
//   //     console.log(`Available memory: ${info.available}`);
//   //   });
//   // }, []);

//   console.log("image : ", imageSource);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Choose Image" onPress={chooseImage} />
//       {imageSource &&
//         <Image source={imageSource} style={{ width: 200, height: 200 }} />
//       }
//     </View>
//   );
// };

// export default App;
