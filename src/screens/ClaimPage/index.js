import React from "react";
import { TouchableOpacity, FlatList, View, Text, Image, StatusBar } from "react-native";
import styles from "./styles";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, SIZES, dummyData, images } from "../../constants";
import { connect, useDispatch, useSelector } from "react-redux";
import LoginBox from "../../component/atoms/LoginBox";
import NoDataBox from "../../component/atoms/noDataBox";
import Loading1 from "../../component/atoms/Loading/Loading1";
import { useEffect } from "react";
import { http2 } from "../../services/api";
import formatDate from "../../services/date";
import { GetAllClaim } from "../../redux/actions/bookingAction";
import ClaimBox from "../../component/atoms/ClaimBox";



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


const Notification = ({navigation}) => {
  const loading = useSelector(state => state.booking.loading)
  const claimList = useSelector(state => state.booking.claimList)
  const userData = useSelector(state => state.auth.userData)
  // const notification = dummyData.Message;
  // console.log("claimList : ",  claimList && http2 + claimList[0].insurance_claim.image)
  // console.log("claimList : ",  claimList && claimList[0])
  return (
    <>
      {loading ?
        <Loading1 />
        :
        claimList && claimList[0] ?
          <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
              <FlatList
                data={claimList}
                renderItem={({ item, index }) => (
                  <ClaimBox
                    source={item.insurance_claim ? { uri: http2 + item.insurance_claim.image } : images.car1}
                    type={item.insurance_claim && item.insurance_claim.type}
                    amount={item.amount > 0 ? "$"+item.amount : "$"+0}
                    description={item.insurance_claim.description}
                    date={formatDate(item.insurance_claim && item.insurance_claim.created_at)}
                    status={item.status && item.status.status}
                    // bookingId={item.booking_details && item.booking_details.booking_id}
                    // carName={item.title}
                    style={index == 0 ? {marginTop: SIZES.height * .02} : null}
                    // price={item.booking_details && item.booking_details.price} 
                    // location={item.booking_details && item.booking_details.location}
                    // customer_name={userData && userData[0]&& userData[0].role == "vendor" ? item.booking_details && item.booking_details.customer_name : null}
                    // onPress={() => navigation.navigate("TripDetails", {data: item})}
                  />
                 
                )}
                key={item => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
          :
          <NoDataBox source={images.noNotification} title={"No Claims"} />
      }
    </>
  );

}

const ClaimPage = ({ navigation, token, GetAllClaim }) => {
  useEffect(() => {
    GetAllClaim()
  }, [])
  return (
    <View
      style={styles.container}
    >
      <StatusBar
        backgroundColor={COLORS.light}
        barStyle="dark-content"
      />

      {/* <InboxTabs /> */}
      {token ?
      <Notification navigation={navigation} />
        // <Tab.Navigator
        //   screenOptions={{
        //     tabBarActiveTintColor: COLORS.black,
        //     tabBarInactiveTintColor: "#777777",
        //     tabBarLabelStyle: styles.tabBarLabelStyle,
        //     tabBarIndicatorStyle: { backgroundColor: COLORS.black },
        //   }}

        // >
        //   <Tab.Screen name="Message" component={Message} />
        //   <Tab.Screen name="Notification" component={Notification} />
        // </Tab.Navigator>
        :
        <LoginBox onPress={() => navigation.navigate("Login")} />
      }
    </View>

  )
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  claimList: state.booking.claimList
})

const mapDispatchToProps = {
  GetAllClaim,
}

export default connect(mapStateToProps, mapDispatchToProps)(ClaimPage)