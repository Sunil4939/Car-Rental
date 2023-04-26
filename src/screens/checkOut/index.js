import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, FlatList, Image, PermissionsAndroid } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS, SIZES, images, dummyData, icons } from '../../constants'
import Icons from '../../component/atoms/Icons'
import Slider from '../../component/atoms/slider'
import { connect } from 'react-redux';
import Loading from '../../component/atoms/Loading'
import { useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Geolocation from "@react-native-community/geolocation";
import Button1 from '../../component/atoms/buttons/Button1'
import { BottomSheet } from 'react-native-btr'
import { StoreCarBookingApi } from '../../redux/actions/productAction'
import filterImageObjectToArray from '../../services/filterImageObjectToArray'
import { CreatePaymentApi, CreateSessionId } from '../../redux/actions/bookingAction'




const CheckOut = ({ navigation, route, loading, userData,CreateSessionId, StoreCarBookingApi }) => {

  // const slider = [images.car1, images.car2, images.car3, images.car4]
  const slider = filterImageObjectToArray(route.params.carData.image)
  let singleCarData = route.params && route.params.carData

  const data = route.params.carData && route.params.carData.location
  
  const userDetails = {
    "email": userData.email,
    "contact": null,
    "name": userData.name,
  }

  

  const [visible, setVisible] = useState(false)

  const [postData, setPostData] = useState({
    ...route.params.data,
    "carPrice": data.price,
    "locations": data.location,
    "carPriceDurationId": data.price_duration_id,
    "currencyId": data.currency_id,
    "carId": data.car_id,
    "distanceAllowed": data.distance,
    "distanceUnitId": data.distance_unit_id
  })

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    })
  }

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  
  const handlePickLocation = () => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    })
      .catch((err) => {
        console.log("error : ", err);
      });
  }


  const permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log("You can use the location")
        Geolocation.getCurrentPosition(
          async (position) => {
            const postData = {
              user: {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
              }
            }
            console.log("position : ", position)
            // GetCityApi(postData)
            // setLocationdata(position)
            // setLatitudeLongitude(position)
          },
          (error) => {
            console.log("errol locat", error.code, error.message);
            // navigation.navigate('SetLocation')
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log("location permission denied")
        // navigation.navigate('SetLocation')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  // useEffect(()=> {
  // permission()
  // },[])

  return (
    <>
      {loading ?
        <Loading />
        :
        <View style={styles.container}>
          <StatusBar
            backgroundColor={COLORS.light}
            barStyle="dark-content"
          />
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
            >
              <Icons name={"back"} size={20} color={COLORS.black} />
            </TouchableOpacity>
          </View>
          {singleCarData &&
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.sliderBox}>
                <Slider data={slider} duration={5000} />
              </View>
              <View style={{ alignItems: 'center' }}>
                {/* car features */}
                <View style={styles.box}>
                  <Text style={styles.carName}>{`${singleCarData.name} ${singleCarData.build_year}`}</Text>
                  <View style={styles.row}>
                    <View style={styles.featuresRow}>
                      <View style={styles.dot} />
                      <Text style={styles.features}>{singleCarData.brand}</Text>
                    </View>
                    <View style={styles.featuresRow}>
                      <View style={styles.dot} />
                      <Text style={styles.features}>{singleCarData.transmission}</Text>
                    </View>
                    <View style={styles.featuresRow}>
                      <View style={styles.dot} />
                      <Text style={styles.features}>{singleCarData.fuel}</Text>
                    </View>
                    <View style={styles.featuresRow}>
                      <View style={styles.dot} />
                      <Text style={styles.features}>{singleCarData.seat} Seats</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.hr_line} />

                {/* car location container */}
                <View>
                  <Text style={styles.carTitle}>Car Location</Text>
                  <View style={styles.locRow} >
                    <View style={styles.leftBox}>
                      <Text style={styles.carText}>Lorem Ipsum has been the industry's standard dummy</Text>
                      <View style={styles.kmBox}>
                        <Text style={styles.km}>1.32 kms</Text>
                      </View>
                      <Text style={styles.locText}>From Your Location</Text>
                    </View>
                    <View style={styles.rightBox}>

                      <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        initialRegion={position}
                        region={{
                          latitude: 37.78825,
                          longitude: -122.4324,
                          latitudeDelta: 0.015,
                          longitudeDelta: 0.0121,
                        }}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        followsUserLocation={true}
                        showsCompass={true}
                        scrollEnabled={true}
                        zoomEnabled={true}
                        pitchEnabled={true}
                        rotateEnabled={true}
                      >
                        <Marker
                          title='Yor are here'
                          description='This is a description'
                          coordinate={position}
                        />
                      </MapView>
                    </View>
                  </View>

                </View>

                <View style={styles.policyRow}>
                  <Text style={styles.policyTitle}>Cancellation Policy</Text>
                  <TouchableOpacity style={styles.policyBtn}>
                    <Text style={styles.policyBtnText}>Read More</Text>
                  </TouchableOpacity>
                </View>

                {/* car total box */}
                <View style={styles.bottomBox}>
                  <View style={styles.total_row}>
                    <Text style={styles.price}>{data.currency.symbol + data.price}</Text>
                    <View style={styles.totalRow}>
                      <Image source={icons.file} style={styles.file} resizeMode='contain' />
                      <Text style={styles.cart_total}>Cart Totals</Text>
                    </View>
                  </View>

                  <Button1 style={styles.btn}
                    backgroundColor={COLORS.black} textColor={COLORS.white}
                    onPress={() => setVisible(!visible)}
                  // onPress={() => navigation.navigate("CheckOut", { data: singleCarData })}
                  >
                    Process To Check Out
                  </Button1>
                </View>

                {/* bottom sheet */}
                <BottomSheet
                  visible={visible}
                  onBackButtonPress={() => setVisible(!visible)}
                  onBackdropPress={() => setVisible(!visible)}
                >
                  <View style={styles.bottom_container}>
                    <View style={styles.close_container}>
                      <TouchableOpacity style={styles.closeBox}
                        onPress={() => setVisible(!visible)}
                      >
                        <Icons name={"close"} size={20} color={COLORS.black} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.bottom_container}>
                      <View style={styles.bottomSheet}>
                        <View style={styles.priceBox}>
                          <Text style={styles.price}>{data.currency.symbol + data.price}</Text>
                        </View>

                        <View style={{ ...styles.totalBtn, backgroundColor: COLORS.light, borderWidth: 0 }}>
                          <Text style={styles.totalBtnText}>Cart Totals</Text>
                        </View>

                        <View style={styles.totalBtn}>
                          <Text style={styles.totalBtnText}>Subtotal</Text>
                          <Text style={styles.totalBtnText}>{data.currency.symbol + data.price}</Text>
                        </View>
                        <View style={styles.totalBtn}>
                          <Text style={styles.totalBtnText}>GST</Text>
                          <Text style={styles.totalBtnText}>{data.currency.symbol + data.additional_price}</Text>
                        </View>
                        <View style={styles.totalBtn}>
                          <Text style={styles.totalBtnText}>QST</Text>
                          <Text style={styles.totalBtnText}>{data.currency.symbol + "0"}</Text>
                        </View>
                        <View style={styles.totalBtn}>
                          <Text style={styles.totalBtnText}>Total</Text>
                          <Text style={styles.totalBtnText}>{data.currency.symbol + (Number(data.price) + Number(data.additional_price))}</Text>
                        </View>


                        <Button1 style={styles.btn}
                          backgroundColor={COLORS.black} textColor={COLORS.white}
                          // onPress={() => { setVisible(!visible), StoreCarBookingApi(postData,data.currency.short_code, userDetails, navigation) }}
                        // onPress={() => { setVisible(!visible), navigation.navigate("ApprovedDrive") }}
                        onPress={() => { setVisible(!visible), CreateSessionId(postData, {amount: (Number(data.price) + Number(data.additional_price))}, navigation)}}
                        >
                          Process To Check Out
                        </Button1>
                      </View>
                    </View>
                  </View>

                </BottomSheet>

              </View>
            </ScrollView>
          }
        </View>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  loading: state.product.loading,
  singleCarData: state.product.singleCarData,
  userData: state.auth.userData
})

const mapDispatchToProps = {
  StoreCarBookingApi,
  CreateSessionId,
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut)