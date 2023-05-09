import React from "react";
import { TouchableOpacity, FlatList, View, Text, Image, StatusBar, ScrollView, ActivityIndicator, TextInput } from "react-native";
import styles from "./styles";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, SIZES, dummyData, icons, images } from "../../constants";
import HeaderLeft from "../../component/atoms/HeaderLeft";
import { connect, useDispatch, useSelector } from "react-redux";
import { BookingCancel, BookingHistoryApi, GetBookingComplete, MarkBookingComplete, ShowAllBookingApi } from "../../redux/actions/bookingAction";
import { useEffect } from "react";
import formatDate from "../../services/date";
import LoginBox from "../../component/atoms/LoginBox";
import NoDataBox from "../../component/atoms/noDataBox";
import Loading1 from "../../component/atoms/Loading/Loading1";
import BookedCar from "../../component/atoms/BookedCar";
import { http2 } from "../../services/api";
import { createCustomer, createPaymentIntent } from "../../redux/actions/paymentAction";
import { useState } from "react";
import { RNToasty } from "react-native-toasty";
import Modal from 'react-native-modal'
import Button1 from "../../component/atoms/buttons/Button1";
import AsyncStorage from "@react-native-async-storage/async-storage";



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

  const [isModalVisible, setModalVisible] = useState(false);

  const createPaymentSheet = async (amount, currency) => {
    dispatch(createCustomer(amount, currency))
  }
  const bookingData = useSelector(state => state.booking.bookingData)
  const loading = useSelector(state => state.booking.loading)
  const userRole = useSelector(state => state.auth.userRole)
  const singleBooking = useSelector(state => state.booking.singleBooking)

  const [bookingDays, setBookingDays] = useState();

  const today = new Date()

  const [userId, setUserId] = useState()

  const getUserId = async () => {
    let id = await AsyncStorage.getItem("@USER_ID")
    setUserId(id)
  }

  useEffect(() => {
    getUserId()
  }, [])
  // console.log("userId : ",userId)

  // let booking_days;
  // booking_days = booking_days == 0 ? 1 : booking_days
  // console.log("datra f : ", bookingData && bookingData.trip_end_date && bookingData.trip_end_date.split("-")?.[2])


  // booking_days = Number(bookingData && bookingData.trip_end_date && bookingData.trip_end_date.split("-")?.[2]) - Number(bookingData && bookingData.trip_start_date && bookingData.trip_start_date.split("-")?.[2])


  // console.log("singleBooking  ; ", singleBooking)

  const handleBookingCancel = (booking_id, startDate, student_id) => {
    // console.log("startDate ; ", startDate)
    // console.log("userId : ",userId, student_id)
    setBookingDays(
      Number(startDate.split("-")?.[2]) - today.getDate()
    )
    if (userRole == "vendor") {
      if (userId == student_id) {
        dispatch(BookingCancel(booking_id))
      } else {
        RNToasty.Normal({
          title: "You are not able for booking cancel",
          duration: 2
        })
      }
    } else if (userRole == "customer") {
      if (Number(startDate.split("-")?.[2]) - today.getDate() >= 1) {
        dispatch(BookingCancel(booking_id))
      } else {
        RNToasty.Normal({
          title: "You are not able for booking cancel",
          duration: 2
        })
      }
    }

  }

  // console.log("booking data : ",  bookingData && bookingData[0].price)

  const [postData, setPostData] = useState({
    extraAmount: 0,
    current_odometer: null,
    last_odometer: '',
    distance_unit_id: null,
    booking_price: null,
    allowed_distance: null,
    booking_id: null,
  })



  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value
    })
    // onChangeValue && onChangeValue(postData)
  }

  const handleSubmit = () => {
    if (postData.current_odometer) {
      dispatch(MarkBookingComplete(postData.booking_id, { extraAmount: postData.extraAmount }))
      setModalVisible(!isModalVisible)
      setPostData({
        "extraAmount": 0,
        "current_odometer": null,
        "last_odometer": null,
        "distance_unit_id": null,
        "booking_price": null,
        "allowed_distance": null,
        "booking_id": null
      })
    } else {
      RNToasty.Error({
        title: "Please fill current odometer ",
        duration: 2
      })
    }
  }
  useEffect(() => {
    let extraAmount;
    // let allowed_distance = postData.distance_unit_id == 1 ? (postData.allowed_distance * 1.60934) : postData.allowed_distance
    // console.log("allowed_distance  : ", allowed_distance , postData.current_odometer - postData.last_odometer)
    if ((postData.current_odometer - postData.last_odometer) > postData.allowed_distance) {
      console.log("odometer : ", (postData.current_odometer - postData.last_odometer- postData.allowed_distance))
      extraAmount = ((postData.current_odometer - postData.last_odometer - postData.allowed_distance) * (postData.booking_price / postData.allowed_distance)).toFixed(2);
      // extraAmount = Math.round(Math.abs(postData.current_odometer - postData.last_odometer - allowed_distance) * (postData.booking_price / postData.allowed_distance)).toFixed(2);
      console.log("extra amt : ", extraAmount)
    } else {
      extraAmount = 0;
    }
    handleChange("extraAmount", extraAmount)
  }, [postData.current_odometer])

  // console.log("postData  : ", postData)

  const handleComplete = (distance_unit_id, last_odometer, price, allowed_distance, booking_id) => {
    setPostData({
      ...postData,
      "last_odometer": last_odometer,
      "distance_unit_id": distance_unit_id,
      "booking_price": price,
      "allowed_distance": allowed_distance == 0 ? 250 : allowed_distance,
      "booking_id": booking_id,
    })
  }
  //   extra charge kaise calculate karein:
  // input ki gayi odomoeter reading , last jo car ki odometer reading(api se milegi) se jayda hai kya aur jayda hai to allowed distance se bhi jayda hai kya ??
  // agar nahin to extra charge  = 0
  // :
  // agar haan to ye karenge : (everything in kms)
  // extra amount = (odometerInput inKM - lastOdometer in KM - bookedAllowedDistance in km ) * (booking Price / AllowedDistance)

  // api me agar miles me value hai too usko phele km me convert karna hoga
  // (1miles = 1.609344kms)
  // php hint code
  // if (($this->odometerInput - $this->lastOdometer) > $this->bookedAllowedDistance) {
  //             $this->extraAmount = round(($this->odometerInput - $this->lastOdometer - $this->bookedAllowedDistance) * ($this->calcbookPrice / $this->bookedAllowedDistance), 2);
  //         } else {
  //             $this->extraAmount = 0;
  //         }

  const handleBooking = (bookingStatus) => {
    if (bookingStatus == "Booked") {
      setModalVisible(!isModalVisible)
      // dispatch(GetBookingComplete(bookingId))
    } else {
      RNToasty.Normal({
        title: "Booking is pending",
        duration: 2
      })
    }
  }

  const handleCancel = () => {
    setPostData({
      "extraAmount": 0,
      "current_odometer": null,
      "last_odometer": null,
      "distance_unit_id": null,
      "booking_price": null,
      "allowed_distance": null,
      "booking_id": null
    })
  }

  const handleInsurance = (student_id, insurance_id) => {
    // console.log("userId : ", userId, student_id)
    if (student_id == userId) {
      navigation.navigate("AddClaim", { data: insurance_id })
    } else {
      RNToasty.Normal({
        title: "You are not able for apply claim",
        duration: 2
      })
    }
  }

  return (
    <>
      {loading ?
        <Loading1 />
        :
        bookingData && bookingData[0] ?
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={'handled'}
          >
            <View style={styles.container1}>
              {bookingData.map((item) => (
                <View style={styles.listBox} key={item.id}>
                  <BookedCar
                    source={item.car && item.car.image ? { uri: http2 + item.car.image.front } : images.car2}
                    brand={item.car && item.car.brand}
                    carName={item.car && item.car.name}
                    date={item.booking_date}
                    bookingId={item.booking_id}
                    price={"$" + item.price}
                    showCancel={true}
                    showLocation={userRole == "vendor" ? true : false}
                    car_booking_id={item.id}
                    pick_up_lat={item.pick_up_lat}
                    pick_up_lng={item.pick_up_lng}
                    description={item.description}
                    cancelPress={() => { handleBookingCancel(item.id, item.trip_start_date, item.student_id) }}
                    insurancePress={() => handleInsurance(item.student_id, item.insurance.id)}
                    // markPress={() => handleComplete(item.distance_unit_id)}
                    markPress={() => { handleBooking(item.booking_status.status), handleComplete(item.distance_unit_id, item.car.odometer, item.price, item.distance, item.id) }}
                    showMark={userRole == "vendor" ? true : false}
                    // showInsurance={userRole == "vendor" ? true : false}
                    showInsurance={item.insurance ? true : false}
                    bookingStatus={item.booking_status.status}
                    showRetryPayment={item.booking_status.status == "Pending" ? true : false}
                    paymentPress={() => { createPaymentSheet(item.price, "USD"), navigation.navigate("Payment", { routeName: "TripPage", car_booking_id: item.id, amount: item.price }) }}
                    onPress={() => navigation.navigate("TripDetails", { data: item })}
                  />

                </View>
              ))}


              <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                  <Text style={styles.title}>Mark the Booking Completed</Text>

                  <View>
                    <Text style={styles.label1}>Current Odometer</Text>
                    <TextInput
                      placeholder='Current Odometer Reading (kms only)'
                      placeholderTextColor={"#BABFD1"}
                      style={styles.input}
                      keyboardType="numeric"
                      value={postData.current_odometer ? String(postData.current_odometer) : ''}
                      onChangeText={(text) => { handleChange("current_odometer", Number(text)) }}
                    />
                  </View>
                  <View>
                    <Text style={styles.label1}>Last Odometer</Text>
                    <TextInput
                      placeholder='Last Odometer'
                      placeholderTextColor={"#BABFD1"}
                      style={styles.input}
                      editable={false}
                      // onChangeText={(text) => handleChange("pick_up_lng", text)}
                      value={String(postData.last_odometer)}
                    />
                  </View>
                  <View>
                    <Text style={styles.label1}>Extra Amount</Text>
                    <TextInput
                      placeholder='Extra Charge'
                      placeholderTextColor={"#BABFD1"}
                      style={styles.input}
                      keyboardType="numeric"
                      // value={String(extraAmt)}
                      // onChangeText={(text) => setExtraAmt(Number(text))}
                      value={postData.extraAmount ? String(postData.extraAmount) : "0"}
                      onChangeText={(text) => handleChange("extraAmount", Number(text))}
                    />
                  </View>


                  <View style={styles.btnRow}>
                    <Button1
                      style={styles.btn}
                      backgroundColor={COLORS.black}
                      textColor={COLORS.white}
                      onPress={handleSubmit}
                    >Done</Button1>
                    <Button1
                      style={styles.btn}
                      onPress={() => { setModalVisible(!isModalVisible), handleCancel() }}
                    >Cancel</Button1>
                  </View>
                </View>
              </Modal>
            </View>
          </ScrollView>
          :
          <NoDataBox source={images.notFound} title={"No Booking List"} />
      }
    </>
  );
}


const History = () => {

  const loading = useSelector(state => state.booking.loading)
  const bookingHistory = useSelector(state => state.booking.bookingHistory)
  return (
    <>
      {loading ?
        <Loading1 />
        :
        bookingHistory ?
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.container1}>
              {bookingHistory && bookingHistory.map((item) => (
                <View style={styles.listBox} key={item.id}>
                  <BookedCar
                    source={item.car && item.car.image ? { uri: http2 + item.car.image.front } : images.car2}
                    brand={item.car && item.car.brand}
                    carName={item.car && item.car.name}
                    date={item.booking_date}
                    bookingId={item.booking_id}
                    price={"$" + item.price}
                    bookingStatus={item.booking_status.status}
                  // onPress={() => navigation.navigate("Product")}
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

const TripPage = ({ navigation, route, ShowAllBookingApi, BookingHistoryApi, token }) => {


  useEffect(() => {
    ShowAllBookingApi()
    BookingHistoryApi()
  }, [])

  // console.log("trip route : ", token)

  return (
    <View
      style={styles.container}
    >
      <StatusBar
        backgroundColor={COLORS.light}
        barStyle="dark-content"
      />
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
  bookingHistory: state.booking.bookingHistory,
})

const mapDispatchToProps = {
  ShowAllBookingApi,
  BookingHistoryApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(TripPage)