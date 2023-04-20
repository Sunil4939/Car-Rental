import React from "react";
import { TouchableOpacity, FlatList, View, Text, Image, StatusBar, ScrollView, ActivityIndicator } from "react-native";
import styles from "./styles";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, SIZES, dummyData, icons, images } from "../../constants";
import HeaderLeft from "../../component/atoms/HeaderLeft";
import { connect, useDispatch, useSelector } from "react-redux";
import { ShowAllBookingApi } from "../../redux/actions/bookingAction";
import { useEffect } from "react";
import formatDate from "../../services/date";
import LoginBox from "../../component/atoms/LoginBox";
import NoDataBox from "../../component/atoms/noDataBox";
import Loading1 from "../../component/atoms/Loading/Loading1";
import BookedCar from "../../component/atoms/BookedCar";
import { http2 } from "../../services/api";
import { createCustomer, createPaymentIntent } from "../../redux/actions/paymentAction";


const TripBox = ({ source, time, customerData, startTrip, endTrip, currentLocation, price, onPress }) => {
  return (
    <TouchableOpacity style={styles.tripBox} onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.carImgBox}>
          <Image source={source ? source : icons.car1} resizeMode="contain" style={styles.carImg} />
        </View>
        <View style={styles.textBox}>
          <View>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.currentLocation}>{currentLocation}</Text>
          </View>

          {/* <View> */}
          {/* <View style={styles.tripContainer}>
            <View style={styles.row1}>
              <View style={styles.row2}>
                <View style={styles.dot} />
                <View style={styles.line} />
                <View style={{ ...styles.dot, backgroundColor: "#FF0000" }} />
              </View>
              <View style={styles.tripTextBox}>
                <Text style={styles.trip}>{startTrip}</Text>
                <Text style={styles.trip}>{endTrip}</Text>
              </View>
            </View>

          </View> */}

          {/* </View> */}
        </View>
      </View>
      <View style={styles.rightBox}>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.wheelBox}>
          <Image source={icons.wheel} resizeMode="contain" style={styles.wheel} />
        </View>
      </View>
    </TouchableOpacity>
  )
}


const Tab = createMaterialTopTabNavigator();

const Booked = ({ navigation, }) => {
  const dispatch = useDispatch()

  // const customerData = useSelector(state => state.payment.customerData)

  const createPaymentSheet = async (amount, currency) => {
    // console.log("amt, andkf cur : ", amount, currency, customerData && customerData.id)
    dispatch(createCustomer(amount, currency))
    // if (customerData) {
    //   dispatch(createPaymentIntent(amount, currency, customerData && customerData.id))
    // }
  }
  const bookingData = useSelector(state => state.booking.bookingData)
  const loading = useSelector(state => state.booking.loading)
  // console.log("booking data : ", bookingData && bookingData[0])
  return (
    <>
      {loading ?
        <Loading1 />
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
        //   <ActivityIndicator size={40} color={COLORS.black} />
        // </View>
        :
        bookingData ?
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.container1}>
              {bookingData && bookingData.map((item) => (
                <View style={styles.listBox} key={item.id}>
                  <BookedCar
                    source={item.car && item.car.image ? { uri: http2 + item.car.image.front } : images.car2}
                    brand={item.car && item.car.brand}
                    carName={item.car && item.car.name}
                    date={item.booking_date}
                    bookingId={item.booking_id}
                    price={"$" + item.price}
                    bookingStatus={item.booking_status.status}
                    paymentPress={() => {  createPaymentSheet(item.price, "USD"), navigation.navigate("Payment")}}
                  // onPress={() => navigation.navigate("Product")}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          :
          <NoDataBox source={images.notFound} title={"No Booking List"} />
      }
    </>
  );
}


const History = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.booking.loading)
  const history = dummyData.Booked
  return (
    <>
      {loading ?
        <Loading1 />
        :
        !history ?
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.container1}>
              {history && history.map((item) => (
                <View style={styles.listBox} key={item.id}>
                  <TripBox
                    source={item.source}
                    time={item.time}
                    currentLocation={item.currentLocation}
                    startTrip={item.startTrip}
                    endTrip={item.endTrip}
                    price={item.price}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          :
          <NoDataBox source={images.notFound} title={"No History"} />
      }
    </>
  );
}

const TripPage = ({ navigation, ShowAllBookingApi, token }) => {
  useEffect(() => {
    ShowAllBookingApi()
  }, [])

  return (
    <View
      style={styles.container}
    >
      <StatusBar
        backgroundColor={COLORS.light}
        barStyle="dark-content"
      />
      <HeaderLeft navigation={navigation} title={"Trip"} />
      {token ?
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: COLORS.black,
            tabBarInactiveTintColor: "#777777",
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarIndicatorStyle: { backgroundColor: COLORS.black },
          }}
        >
          <Tab.Screen name="Booked" component={Booked} />
          <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
        :
        <LoginBox onPress={() => navigation.navigate("Login")} />
      }
    </View>



  )
}

const mapStateToProps = (state) => ({
  loading: state.booking.loading,
  bookingData: state.booking.bookingData,
  token: state.auth.token,
})

const mapDispatchToProps = {
  ShowAllBookingApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(TripPage)