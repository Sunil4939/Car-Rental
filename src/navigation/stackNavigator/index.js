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
import AddCarList from '../../screens/AddCarList';
import UpdateCar from '../../screens/UpdateCar'
import TripDetails from '../../screens/TripDetails';
import PaymentFailed from '../../screens/PaymentFailed';
import Header from '../../component/atoms/Header';
import Header1 from '../../component/atoms/Header1';
import HeaderLeft from '../../component/atoms/HeaderLeft';
import AllCarList from '../../screens/AllCarList';
import Account from '../../screens/Account';
import AutoPassion from '../../screens/AutoPassion';
import ContactSupport from '../../screens/ContactSupport';
import ChangePassword from '../../screens/ChangePassword';
import EnterMobileNo from '../../screens/EnterMobileNo';
import NotificationSetting from '../../screens/NotificationSetting';
import ConfirmMobile from '../../screens/ConfirmMobileNo';
import AlmostDone from '../../screens/AlmostDone';
import AddClaim from '../../screens/AddClaim';
import ClaimPage from '../../screens/ClaimPage';


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
      initialRouteName='HomePage'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="HomePage" component={HomePage}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Search"} />
          ),
        })}
      />
      <Stack.Screen name="Product" component={Product}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CheckOut" component={CheckOut}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ApprovedDrive" component={ApprovedDrive}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="Payment" component={Payment}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment"} />
          ),
        })}
      />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Booking Confirmed"} showBack={false} />
          ),
        })}
      />
      <Stack.Screen name="PaymentFailed" component={PaymentFailed}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment Failed"} />
          ),
        })}
      />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Edit Profile"} boxStyle={{ backgroundColor: COLORS.light, }} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const CarListStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "AllCarList")
  }, [route])
  return (
    <Stack.Navigator
      // initialRouteName='Location'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="AllCarList" component={AllCarList}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="Location" component={Location}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="SearchPage" component={SearchPage}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Search"} />
          ),
        })}
      />
      <Stack.Screen name="Product" component={Product}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CheckOut" component={CheckOut}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ApprovedDrive" component={ApprovedDrive}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="Payment" component={Payment}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment"} />
          ),
        })}
      />

      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Booking Confirmed"} showBack={false} />
          ),
        })}
      />
      <Stack.Screen name="PaymentFailed" component={PaymentFailed}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment Failed"} />
          ),
        })}
      />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Edit Profile"} boxStyle={{ backgroundColor: COLORS.light, }} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}



const SearchStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "SearchPage")
  }, [route])
  return (
    <Stack.Navigator
      initialRouteName='SearchPage'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="SearchPage" component={SearchPage}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Search"} />

          ),
        })}
      />
      <Stack.Screen name="Product" component={Product}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CheckOut" component={CheckOut}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ApprovedDrive" component={ApprovedDrive}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="Payment" component={Payment}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment"} />
          ),
        })}
      />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Booking Confirmed"} showBack={false} />
          ),
        })}
      />
      <Stack.Screen name="PaymentFailed" component={PaymentFailed}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment Failed"} />
          ),
        })}
      />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Edit Profile"} boxStyle={{ backgroundColor: COLORS.light, }} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const AddCarStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "AddCarList")
  }, [route])
  return (
    <Stack.Navigator
      initialRouteName='AddCarList'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="AddCarList" component={AddCarList}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="Location" component={Location}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ChooseTrip" component={ChooseTrip}
        options={() => ({
          headerShown: false,
        })}
      />


      <Stack.Screen name="UpdateCar" component={UpdateCar}
        options={() => ({
          header: ({ navigation }) => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="Terms" component={Terms}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="YourCar" component={YourCar}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CarProfile" component={CarProfile}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="Goals" component={Goals}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CarDetails" component={CarDetails}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CarPhotos" component={CarPhotos}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="PayoutStripe" component={PayoutStripe}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="DriverLicense" component={DriverLicense}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CarAvailability" component={CarAvailability}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="SetUpAccount" component={SetUpAccount}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="Quality" component={Quality}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="SubmitList" component={SubmitList}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />

      <Stack.Screen name="Product" component={Product}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CheckOut" component={CheckOut}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ApprovedDrive" component={ApprovedDrive}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="Payment" component={Payment}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment"} />
          ),
        })}
      />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Booking Confirmed"} showBack={false} />
          ),
        })}
      />
      <Stack.Screen name="PaymentFailed" component={PaymentFailed}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment Failed"} />
          ),
        })}
      />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Edit Profile"} boxStyle={{ backgroundColor: COLORS.light, }} />
          ),
        })}
      />
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
      <Stack.Screen name="CheckOut" component={CheckOut}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ApprovedDrive" component={ApprovedDrive}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="Payment" component={Payment}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment"} />
          ),
        })}
      />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Stack.Screen name="PaymentFailed" component={PaymentFailed} />
    </Stack.Navigator>
  );
}

const TripStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "TripPage")
  }, [route])
  return (
    <Stack.Navigator
      initialRouteName='TripPage'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="TripPage" component={TripPage}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Trip"} />
          ),
        })}
      />
      <Stack.Screen name="TripDetails" component={TripDetails}
        options={() => ({
          header: ({ navigation }) => (
            <Header1 navigation={navigation} />
          ),
        })}
      />

      <Stack.Screen name="Product" component={Product}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={() => ({
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })} />
      <Stack.Screen name="Payment" component={Payment}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment"} />
          ),
        })}
      />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Booking Confirmed"} showBack={false} />
          ),
        })}
      />
      <Stack.Screen name="PaymentFailed" component={PaymentFailed}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment Failed"} />
          ),
        })}
      />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Edit Profile"} boxStyle={{ backgroundColor: COLORS.light, }} />
          ),
        })}
      />
      <Stack.Screen name="AddClaim" component={AddClaim}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Add Claim"} />
          ),
        })}
      />
      <Stack.Screen name="ClaimPage" component={ClaimPage}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Claims"} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const InboxStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "InboxPage")
  }, [route])
  return (
    <Stack.Navigator
      initialRouteName='InboxPage'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="InboxPage" component={InboxPage}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Notification"} />
          ),
        })}
      />
      <Stack.Screen name="Payment" component={Payment}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment"} />
          ),
        })}
      />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Booking Confirmed"} showBack={false} />
          ),
        })}
      />
      <Stack.Screen name="PaymentFailed" component={PaymentFailed}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Payment Failed"} />
          ),
        })}
      />
      <Stack.Screen name="TripDetails" component={TripDetails}
        options={() => ({
          header: ({ navigation }) => (
            <Header1 navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Edit Profile"} boxStyle={{ backgroundColor: COLORS.light, }} />
          ),
        })}
      />
      <Stack.Screen name="ClaimPage" component={ClaimPage}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Claims"} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const MoreStack = ({ navigation, route }) => {

  useEffect(() => {
    bottomBarCondition(navigation, route, "MorePage")
  }, [route])
  return (
    <Stack.Navigator
      initialRouteName='MorePage'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} >
      <Stack.Screen name="MorePage" component={MorePage}
        options={() => ({
          header: ({ navigation }) => (
            <Header1 navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Edit Profile"} boxStyle={{ backgroundColor: COLORS.light, }} />
          ),
        })}
      />
      <Stack.Screen name="EditHostProfile" component={EditHostProfile}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Edit Host Profile"} boxStyle={{ backgroundColor: COLORS.light, }} />
          ),
        })}
      />
      <Stack.Screen name="Account" component={Account}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Account"} />
          ),
        })}
      />
      <Stack.Screen name="AutoPassion" component={AutoPassion}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="ContactSupport" component={ContactSupport}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="ChangePassword" component={ChangePassword}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Change Password"} />
          ),
        })}
      />

      <Stack.Screen name="EnterMobileNo" component={EnterMobileNo}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Change Password"} />
          ),
        })}
      />
      <Stack.Screen name="NotificationSetting" component={NotificationSetting}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Notification Settings"} />
          ),
        })}
      />
      <Stack.Screen name="ConfirmMobile" component={ConfirmMobile}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Confirm Mobile Phone"} />
          ),
        })}
      />
      <Stack.Screen name="AlmostDone" component={AlmostDone}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Almost done"} />
          ),
        })}
      />
      <Stack.Screen name="ClaimPage" component={ClaimPage}
        options={() => ({
          header: ({ navigation }) => (
            <HeaderLeft navigation={navigation} title={"Claims"} />
          ),
        })}
      />

      <Stack.Screen name="AddCarList" component={AddCarList}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />

      <Stack.Screen name="Terms" component={Terms}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="YourCar" component={YourCar}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CarProfile" component={CarProfile}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="Goals" component={Goals}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CarDetails" component={CarDetails}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CarPhotos" component={CarPhotos}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="PayoutStripe" component={PayoutStripe}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="DriverLicense" component={DriverLicense}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="CarAvailability" component={CarAvailability}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="SetUpAccount" component={SetUpAccount}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="Quality" component={Quality}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="SubmitList" component={SubmitList}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
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
  CarListStack,
  AddCarStack,
}