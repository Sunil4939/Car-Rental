import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons, } from "../../constants";
import styles from "./styles";
import { AddCarStack, CarListStack, FavoriteStack, HomeStack, InboxStack, MoreStack, SearchStack, TripStack } from "../stackNavigator";
import Icons from "../../component/atoms/Icons";
import { useState } from "react";
import { connect } from "react-redux";
import Auth from "../../screens/auth";

const Tab = createBottomTabNavigator();

const BottomTab = ({ token, userData, userRole }) => {
  const role = userData && userData.role
  // const [role, setRole] = useState("customer")
  // console.log("bottom tab user role : ",  userRole)

  return (
    <Tab.Navigator
      // initialRouteName='Home'
      screenOptions={() => ({
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.light3,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: styles.labelStyle,
        headerShown: false,
      })} >
      {userRole == "vendor" ?
        <>
          <Tab.Screen name="Home" component={HomeStack}
            options={() => ({
              tabBarIcon: ({ color }) => <Icons name={"home"} size={25} color={color} />
            })}
          />
           <Tab.Screen name="CarList" component={AddCarStack}
            options={() => ({
              tabBarLabel: "Add Car",
              tabBarIcon: ({ color }) => <Icons name={"addPost"} size={25} color={color} />
            })}
          />

          {/* <Tab.Screen name="LocationStack" component={LocationStack}
            options={() => ({
              tabBarLabel: "Location",
              tabBarIcon: ({ color }) => <Icons name={"location"} size={25} color={color} />
            })}
          /> */}
          <Tab.Screen name="Trips" component={TripStack}
            options={() => ({
              tabBarIcon: ({ color }) => <Icons name={"trip"} size={25} color={color} />
            })}
          />
          <Tab.Screen name="Inbox" component={InboxStack}
            options={() => ({
              tabBarLabel: "Notifications",
              tabBarIcon: ({ color }) => <Icons name={"inbox"} size={28} color={color} />
            })}
          />
          <Tab.Screen name="More" component={MoreStack}
            options={() => ({
              tabBarIcon: ({ color }) => <Icons name={"threeDots"} size={28} color={color} />
            })}
          />
        </>
        :
        <>
          <Tab.Screen name="Search" component={SearchStack}
            options={() => ({
              tabBarIcon: ({ color }) => <Icons name={"search"} size={25} color={color} />
            })}
          />
             {/* <Tab.Screen name="CarList" component={token ? AddCarStack : Auth}
            options={() => ({
              tabBarLabel: token ? "Add Car" : "Login",
              tabBarIcon: ({ color }) => <Icons name={token ? "addPost" : "accountcircle"} size={token ? 25 : 30} color={color} />
            })}
          /> */}
           <Tab.Screen name="CarList" component={token ? CarListStack : Auth}
              options={() => ({
                tabBarLabel: token ? "Car List" : "Login",
                tabBarIcon: ({ color }) => <Icons name={token ? "carlist" : "accountcircle"} size={token ? 25 : 30} color={color} />
              })}
            />
          
          <Tab.Screen name="Trips" component={TripStack}
            options={() => ({
              tabBarIcon: ({ color }) => <Icons name={"trip"} size={25} color={color} />
            })}
          />
          <Tab.Screen name="Inbox" component={InboxStack}
            options={() => ({
              tabBarLabel: "Notifications",
              tabBarIcon: ({ color }) => <Icons name={"inbox"} size={28} color={color} />
            })}
          />
          <Tab.Screen name="More" component={MoreStack}
            options={() => ({
              tabBarIcon: ({ color }) => <Icons name={"threeDots"} size={28} color={color} />
            })}
          />
        </>
      }

    </Tab.Navigator>
  )
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  userData: state.auth.userData,
  userRole: state.auth.userRole,

})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);

