import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons, } from "../../constants";
import styles from "./styles";
import { AddCarStack, FavoriteStack, HomeStack, InboxStack, LocationStack, MoreStack, SearchStack, TripStack } from "../stackNavigator";
import Icons from "../../component/atoms/Icons";
import { useState } from "react";
import { connect } from "react-redux";
import Auth from "../../screens/auth";
import AddCarList from "../../screens/AddCarList";

const Tab = createBottomTabNavigator();

const BottomTab = ({token,userData}) => {
  const role = userData && userData.role
  // const [role, setRole] = useState("customer")
  // console.log("bottom tab user data : ",  userData && userData.role)

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
      {role == "oldUser" ?
        <>
          <Tab.Screen name="Home" component={HomeStack}
            options={() => ({
              tabBarIcon: ({ color }) => <Icons name={"home"} size={25} color={color} />
            })}
          />
          <Tab.Screen name="LocationStack" component={LocationStack}
            options={() => ({
              tabBarLabel: "Location",
              tabBarIcon: ({ color }) => <Icons name={"location"} size={25} color={color} />
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
          <Tab.Screen name="CarList" component={token? AddCarStack : Auth}
            options={() => ({
              tabBarLabel: token ? "Add Car" : "Car List",
              tabBarIcon: ({ color }) => <Icons name={token ? "addPost" : "accountcircle"} size={token ?25: 30} color={color} />
            })}
          />
          {/* <Tab.Screen name="Favourites" component={FavoriteStack}
            options={() => ({
              tabBarIcon: ({ color }) => <Icons name={"heart"} size={25} color={color} />
            })}
          /> */}
        </>
     }

      <Tab.Screen name="Trips" component={TripStack}
        options={() => ({
          tabBarIcon: ({ color }) => <Icons name={role == "oldUser" ? "calendar2" : "trip"} size={25} color={color} />
        })}
      />
      <Tab.Screen name="Inbox" component={InboxStack}
        options={() => ({
          tabBarIcon: ({ color }) => <Icons name={"inbox"} size={28} color={color} />
        })}
      />
        <Tab.Screen name="More" component={MoreStack}
          options={() => ({
            tabBarIcon: ({ color }) => <Icons name={"threeDots"} size={28} color={color} />
          })}
        />
    </Tab.Navigator>
  )
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  userData: state.auth.userData,
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);

