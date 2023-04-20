import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Favourite from '../../screens/favourite';
import MorePage from '../../screens/morePage';
import Terms from '../../screens/terms';
import YourCar from '../../screens/yourCar';
import CarProfile from '../../screens/carProfile';
import CarDetails from '../../screens/carDetails';
import Goals from '../../screens/goals';
import CarPhotos from '../../screens/carPhotos';
import PayoutStripe from '../../screens/payoutStripe';
import DriverLicense from '../../screens/driverLicense';
import CarAvailability from '../../screens/carAvailability';
import SetUpAccount from '../../screens/setUpAccount';
import Quality from '../../screens/quality';
import SubmitList from '../../screens/submitList';
import SearchPage from '../../screens/searchPage';
import TripPage from '../../screens/tripPage';
import InboxPage from '../../screens/inboxPage'
import EditProfile from '../../screens/editProfile';
import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constants';
import Location from '../../screens/location';
import ChooseTrip from '../../screens/chooseTrip';
import Product from '../../screens/product';
import ProductDetails from '../../screens/productDetails';
import Payment from '../../screens/payment';
import PaymentSuccess from '../../screens/paymentSuccess';
import SearchScreen from '../../screens/searchScreen';
import CheckOut from '../../screens/checkOut';
import ApprovedDrive from '../../screens/approvedDrive';
import HomePage from '../../screens/homePage';
import EditHostProfile from '../../screens/editHostProfile'
import StripePayment from '../../screens/StripePayment';
import AddCarList from '../../screens/AddCarList';


const Stack = createStackNavigator();

const bottomBarCondition = (navigation, route, nm) => {
  if (getFocusedRouteNameFromRoute(route) === nm || getFocusedRouteNameFromRoute(route) === undefined) {
    navigation.setOptions({
      tabBarStyle: { backgroundColor: COLORS.white, borderRadius: 12, marginHorizontal: 0, paddingVertical: 8, height: SIZES.height * .08, paddingBottom: 8, elevation: 15 },
      tabStyle: {
        alignItems: 'center'
      }
    })
  }
  else {
    navigation.setOptions({
      tabBarStyle: { display: 'none' }
    });
  }
}

const HomeStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "HomePage")
  }, [route])
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="ApprovedDrive" component={ApprovedDrive} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
}

const LocationStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "Location")
  }, [route])
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="ApprovedDrive" component={ApprovedDrive} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
}



const SearchStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "SearchPage")
  }, [route])
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="ApprovedDrive" component={ApprovedDrive} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Stack.Screen name="StripePayment" component={StripePayment} />
    </Stack.Navigator>
  );
}

const AddCarStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "AddCarList")
  }, [route])
  return (
    <Stack.Navigator
      // initialRouteName='SubmitList'
      screenOptions={() => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="AddCarList" component={AddCarList} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="ChooseTrip" component={ChooseTrip} />

      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="YourCar" component={YourCar} />
      <Stack.Screen name="CarProfile" component={CarProfile} />
      <Stack.Screen name="Goals" component={Goals} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="CarPhotos" component={CarPhotos} />
      <Stack.Screen name="PayoutStripe" component={PayoutStripe} />
      <Stack.Screen name="DriverLicense" component={DriverLicense} />
      <Stack.Screen name="CarAvailability" component={CarAvailability} />
      <Stack.Screen name="SetUpAccount" component={SetUpAccount} />
      <Stack.Screen name="Quality" component={Quality} />
      <Stack.Screen name="SubmitList" component={SubmitList} />

      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="ApprovedDrive" component={ApprovedDrive} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
}


const FavoriteStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "FavouritePage")
  }, [route])
  return (
    <Stack.Navigator
      // initialRouteName='SubmitList'
      screenOptions={() => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="FavouritePage" component={Favourite} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="ChooseTrip" component={ChooseTrip} />

      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="YourCar" component={YourCar} />
      <Stack.Screen name="CarProfile" component={CarProfile} />
      <Stack.Screen name="Goals" component={Goals} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="CarPhotos" component={CarPhotos} />
      <Stack.Screen name="PayoutStripe" component={PayoutStripe} />
      <Stack.Screen name="DriverLicense" component={DriverLicense} />
      <Stack.Screen name="CarAvailability" component={CarAvailability} />
      <Stack.Screen name="SetUpAccount" component={SetUpAccount} />
      <Stack.Screen name="Quality" component={Quality} />
      <Stack.Screen name="SubmitList" component={SubmitList} />

      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="ApprovedDrive" component={ApprovedDrive} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
}

const TripStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "TripPage")
  }, [route])
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="TripPage" component={TripPage} />

      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="StripePayment" component={StripePayment} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
}

const InboxStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "InboxPage")
  }, [route])
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="InboxPage" component={InboxPage} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
}

const MoreStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "MorePage")
  }, [route])
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="MorePage" component={MorePage} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditHostProfile" component={EditHostProfile} />
    </Stack.Navigator>
  );
}

export {
  SearchStack,
  FavoriteStack,
  TripStack,
  InboxStack,
  MoreStack,
  HomeStack,
  LocationStack,
  AddCarStack,
}