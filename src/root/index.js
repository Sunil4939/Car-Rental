import React, { useEffect, useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from '../navigation/bottomTab';
import { connect, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_TOKEN } from '../redux/types';
import Terms from '../screens/terms';
import YourCar from '../screens/yourCar';
import CarProfile from '../screens/carProfile';
import CarDetails from '../screens/carDetails';
import Goals from '../screens/goals';
import CarPhotos from '../screens/carPhotos';
import PayoutStripe from '../screens/payoutStripe';
import DriverLicense from '../screens/driverLicense';
import CarAvailability from '../screens/carAvailability';
import SetUpAccount from '../screens/setUpAccount';
import Quality from '../screens/quality';
import SubmitList from '../screens/submitList';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
import ResetPassword from '../screens/resetPassword';
import Auth from '../screens/auth';
import Loading from '../component/atoms/Loading'
import { LogBox } from 'react-native';
import { GetCarListApi } from '../redux/actions/vendorRegistration';
import { GetUserDataApi } from '../redux/actions/authAction';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Root = ({ token, userData, GetUserDataApi, }) => {

    const [rootLoading, setRootLoading] = useState(true)
    const dispatch = useDispatch()

    const preLoad = async () => {
        await AsyncStorage.getItem('@USER_TOKEN').then(value => {
            // console.log(value)
            if (value) {
                dispatch({
                    type: AUTH_TOKEN,
                    payload: value
                })
                setRootLoading(false)
            } else {
                setRootLoading(false)
            }
        })
            .catch(err => console.log("Root error : ", err))

    }

    useEffect(() => {
        preLoad()
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        GetUserDataApi()
    }, [])

    return (
        <>
            {rootLoading ?
                <Loading />
                :
                <Stack.Navigator
                    initialRouteName='BottomTab'
                    screenOptions={() => ({
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    })}>
                        <Stack.Screen
                        name="BottomTab"
                        component={BottomTab}
                    />
                    <Stack.Screen name="Auth" component={Auth} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} />
                </Stack.Navigator>
            }
        </>
    );
}
const mapStateToProps = (state) => ({
    token: state.auth.token,
    userData: state.auth.userData,
})

const mapDispatchToProps = {
    GetCarListApi,
    GetUserDataApi,
}
export default connect(mapStateToProps, mapDispatchToProps)(Root);