import React from "react";
import { TouchableOpacity, FlatList, View, Text, Image, StatusBar } from "react-native";
import styles from "./styles";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, SIZES, dummyData, images } from "../../constants";
import HeaderLeft from "../../component/atoms/HeaderLeft";
import { connect, useDispatch, useSelector } from "react-redux";
import LoginBox from "../../component/atoms/LoginBox";
import NoDataBox from "../../component/atoms/noDataBox";
import Loading1 from "../../component/atoms/Loading/Loading1";


const Tab = createMaterialTopTabNavigator();

const Message = ({ navigation }) => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.booking.loading)
  const messages = dummyData.Message;
  return (
    <>
      {loading ?
        <Loading1 />
        :
        !messages ?
        <View style={styles.container}>
          <View style={styles.box}>
            <FlatList
              data={messages}
              renderItem={({ item, index }) => (
                <TouchableOpacity style={[styles.messageBox, index == messages.length - 1 && { marginBottom: SIZES.height * .03, }]}
                // onPress={() => navigation.navigate("Payment")} 
                >
                  <View style={styles.messageRow} >
                    <View style={styles.row}>
                      <View style={styles.profileBox}>
                        <Image source={item.profile} resizeMode={"contain"} style={styles.profile} />
                      </View>
                      <View style={styles.contentBox}>
                        <Text style={styles.name}>{item.userName}</Text>
                        <Text style={styles.message}>{item.message}</Text>
                      </View>
                    </View>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </TouchableOpacity>
              )}
              key={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        :
        <NoDataBox source={images.notFound} title={"No Messages"} />
      }
    </>
  );
}


const Notification = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.booking.loading)
  const notification = dummyData.Message;
  return (
    <>
      {loading ?
        <Loading1 />
        :
        !notification ?
          <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
              <FlatList
                data={notification}
                renderItem={({ item, index }) => (
                  <TouchableOpacity style={[styles.notificationBox, index == notification.length - 1 && { marginBottom: SIZES.height * .03, }]} >
                    <View style={styles.carImgBox}>
                      <Image source={images.logo} resizeMode={"contain"} style={styles.carImg} />
                    </View>
                    <View style={styles.contentBox1}>
                      <Text style={styles.title}>Welcome to Auto Passion</Text>
                      <Text style={styles.text}>Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </Text>
                      <Text style={styles.time}>Tue, Mar 01, 15:50</Text>
                    </View>
                  </TouchableOpacity>
                )}
                key={item => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
          :
          <NoDataBox source={images.noNotification} title={"No Notification"} />
      }
    </>
  );

}

const InboxPage = ({ navigation, token }) => {

  return (
    <View
      style={styles.container}
    >
      <StatusBar
        backgroundColor={COLORS.light}
        barStyle="dark-content"
      />
      <HeaderLeft navigation={navigation} title={"Message"} />

      {/* <InboxTabs /> */}
      {token ?
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: COLORS.black,
            tabBarInactiveTintColor: "#777777",
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarIndicatorStyle: { backgroundColor: COLORS.black },
          }}

        >
          <Tab.Screen name="Message" component={Message} />
          <Tab.Screen name="Notification" component={Notification} />
        </Tab.Navigator>
        :
        <LoginBox onPress={() => navigation.navigate("Login")} />
      }
    </View>

  )
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(InboxPage)