import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { COLORS, SIZES, images, dummyData, icons } from '../../constants'
import Icons from '../../component/atoms/Icons'
import Slider from '../../component/atoms/slider'
import { connect } from 'react-redux';
import Loading from '../../component/atoms/Loading'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react'
import formatAMPM from '../../services/time'
import * as Progress from 'react-native-progress';
import { ReviewCard } from '../../component/atoms/cards'
import Button1 from '../../component/atoms/buttons/Button1';
import SelectDropdown from 'react-native-select-dropdown'
import SwitchToggle from 'react-native-switch-toggle'
import { BottomSheet } from 'react-native-btr'
import filterImageObjectToArray from '../../services/filterImageObjectToArray'
import { RNToasty } from 'react-native-toasty'
import { createCustomer } from '../../redux/actions/paymentAction'
import { StoreCarBookingApi } from '../../redux/actions/productAction'



const BottomSheetBox = ({ onPress, visible, children }) => {

  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={onPress}
      onBackdropPress={onPress}
    >
      <View style={styles.bottom_sheet}>
        <View style={styles.bottom_top_row}>
          <Icons name={"questioncircle"} size={40} color={COLORS.black} />
        </View>
        <Text style={styles.bottom_text}>{children}</Text>
      </View>
    </BottomSheet>
  )
}

const ResourceRow = ({ price, title }) => {
  return (
    <View style={styles.resource_row}>
      <View style={styles.toggle_row}>
        <SwitchToggle
          // switchOn={toggle.includes(data.item.id)}
          // onPress={() => handleArrayChange(data.item.id)}
          switchOn={true}
          circleColorOff={COLORS.white}
          circleColorOn={COLORS.white}
          backgroundColorOn={COLORS.green1}
          backgroundColorOff={COLORS.lightGrey2}
          containerStyle={styles.toggleContainerStyle}
          circleStyle={styles.toggleCircleStyle}
        />
        <Text style={styles.toggle_title}>{title}</Text>
      </View>
      <Text style={styles.toggle_price}>{price}</Text>
    </View>
  )
}

const RatingRow = ({ text, rating }) => {
  return (
    <View style={styles.rating_row}>
      <Text style={styles.rating_row_text}>{text}</Text>
      <View style={styles.rating_row1}>
        <Progress.Bar
          progress={Number(rating) / 5}
          width={SIZES.width * .5}
          height={6}
          style={styles.progressBar}
          color={COLORS.black}
          unfilledColor={'#F1F1F1'}
          borderColor={'#F1F1F1'}
          showsText={true}
        />
        <Text style={styles.rating_row_text}>{rating}</Text>
      </View>
    </View>
  )
}

const SelectTrip = ({ style, placeholderDate, label, placeholderTime, onChangeDate, onChangeTime, date, time }) => {
  // const [date, setDate] = useState(false);
  const [display, setDisplay] = useState(false);

  const selectDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setDisplay(false);
    let month = String(currentDate.getMonth() + 1).length == 1 ? `0${(currentDate.getMonth() + 1)}` : `${(currentDate.getMonth() + 1)}`
    let d = String(currentDate.getDate()).length == 1 ? `0${currentDate.getDate()}` : `${currentDate.getDate()}`
    onChangeDate && onChangeDate(`${d}-${month}-${currentDate.getFullYear()}`)
  }
  const [timePicker, setTimePicker] = useState(false);

  const onTimeSelected = (event, value) => {
    onChangeTime && onChangeTime(formatAMPM(value))
    setTimePicker(false);
  };

  return (
    <View style={style}>
      <Text style={styles.tripLabel}>{label}</Text>
      <View style={styles.tripBoxRow}>
        <View style={styles.dateBtnBox}>
          <TouchableOpacity style={styles.dateBtn} onPress={() => setDisplay(!display)}>
            <TextInput style={{ ...styles.dateText, width: SIZES.width * .42, }}
              placeholder={placeholderDate} value={date}
              placeholderTextColor={'#59595A'}
              editable={false}
            />
            <Icons name={"down-outline"} size={20} color={COLORS.black} />
          </TouchableOpacity>
          {display && (
            <DateTimePicker
              value={new Date()}
              mode={'date'}
              display="default"
              onChange={selectDate}
            />
          )}
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.dateBtn} onPress={() => setTimePicker(!timePicker)}>
            {/* <Text style={{ ...styles.dateText, color: value ? COLORS.black : "#59595A" }}>{value ? value : placeholder}</Text> */}
            <TextInput style={styles.dateText}
              placeholder={placeholderTime} value={time}
              placeholderTextColor={'#59595A'}
              editable={false}
            />
            <Icons name={"down-outline"} size={20} color={COLORS.black} />
          </TouchableOpacity>
          {timePicker && (
            <DateTimePicker
              value={new Date()}
              mode={'time'}
              display="default"
              onChange={onTimeSelected}
            />
          )}
        </View>
      </View>
    </View>
  )
}

const ProductDetails = ({ navigation, createCustomer, StoreCarBookingApi, route, token, loading, }) => {
  const singleCarData = route.params && route.params.carData;
  // let slider = [images.car1, images.car2, images.car3, images.car4]
  let sliderImages = filterImageObjectToArray(singleCarData.image);

  //  console.log("singleCarData : ", singleCarData);
  const data = route.params && route.params.carData && route.params.carData.location


  const [visible, setVisible] = useState(false)
  const [checkout, setCheckout] = useState(false)
  let date , time;


  useEffect(() => {
    let d = new Date()
     time = formatAMPM(d)
    let month = String(d.getMonth() + 1).length == 1 ? `0${(d.getMonth() + 1)}` : `${(d.getMonth() + 1)}`
     date = String(d.getDate()).length == 1 ? `0${d.getDate()}` : `${d.getDate()}`
    date = `${date}-${month}-${d.getFullYear()}`
 
    setPostData({
      "startDate": date,
      "endDate": date,
      "startTime": time,
      "endTime": time,
    })
  },[])

  // console.log("single car data : ", singleCarData && singleCarData.car_rating) 

  const [postData, setPostData] = useState({
    startDate: date,
    endDate: date,
    startTime: time,
    endTime: time,
  })

  useEffect(() => {
    setPostData({
      "carPrice": data.price,
      "locations": data.location,
      "carPriceDurationId": data.price_duration_id,
      "currencyId": data.currency_id,
      "carId": data.car_id,
      "distanceAllowed": data.distance,
      "distanceUnitId": data.distance_unit_id
    })
  },[])

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    })
  }

  const handleCarBook = () => {
    console.log("ksdljfas")
    if (token) {
      setCheckout(!checkout)
    } else {
      RNToasty.Normal({
        title: 'Please Login first',
        duration: 2
      })
    }
  }

  // console.log("loading: ", loading)
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
                <Slider data={sliderImages} duration={5000} />
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

                {/* trip box  */}
                <View style={styles.tripBox}>
                  <SelectTrip
                    label={"Trip Start"}
                    placeholderDate={"start date"}
                    placeholderTime={"start time"}
                    onChangeDate={(date) => handleChange("startDate", date)}
                    onChangeTime={(time) => handleChange("startTime", time)}
                    date={postData.startDate}
                    time={postData.startTime}
                  />
                  <SelectTrip
                    style={{ marginTop: SIZES.height * .02, }}
                    label={"Trip End"}
                    placeholderDate={"end date"}
                    placeholderTime={"end time"}
                    onChangeDate={(date) => handleChange("endDate", date)}
                    onChangeTime={(time) => handleChange("endTime", time)}
                    date={postData.endDate}
                    time={postData.endTime}
                  />
                </View>

                {/* features  */}
                {singleCarData && singleCarData.features[0] ?
                  <View style={styles.featuresContainer}>
                    <Text style={styles.title}>Features</Text>
                    <View style={styles.featuresBox}>
                      <FlatList
                        data={singleCarData.features}
                        renderItem={({ item }) => (
                          <View style={styles.featureRow} key={item.id}>
                            
                            {/* <View style={styles.featureIcon}>
                             
                              <Icons name={item.icon} size={10} color={COLORS.white} />
                            </View> */}
                            <Text style={styles.featureText}>{item.feature}</Text>
                          </View>
                        )}
                        key={item => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                      />

                    </View>
                  </View>
                  :
                  <View style={styles.no_data_box}>
                    <Text style={styles.no_data}>No Features Available</Text>
                  </View>
                }

                {/* description */}
                <View style={styles.descriptionBox}>
                  <Text style={styles.title}>Description</Text>
                  {singleCarData.description &&
                    <Text style={styles.text}>{singleCarData.description.length > 100 ? singleCarData.description.slice(0, 100) + "..." : singleCarData.description}</Text>
                  }
                  <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.readMoreBtn}>
                      <Text style={styles.readMoreText}>Read More</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.hr_line1} />

                {/* distance */}
                <View style={styles.descriptionBox}>
                  <Text style={styles.title}>Distance Included</Text>
                  <Text style={styles.text}>Unlimited</Text>
                </View>
                <View style={styles.hr_line1} />

                {/* Insurance & Protection */}
                <View style={styles.descriptionBox}>
                  <Text style={styles.title}>Insurance & Protection</Text>
                  <Text style={styles.text}>Insurance & Protection</Text>
                  <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.readMoreBtn}
                      onPress={() => setVisible(!visible)}
                    >
                      <Text style={styles.readMoreText}>Read More</Text>
                    </TouchableOpacity>
                    <BottomSheetBox
                      visible={visible}
                      onPress={() => setVisible(!visible)}
                    >
                      All protection plans include coverage under a third-party liability insurance policy issued to Auto Passion from Travelers Excess and Surplus Lines Company (“Travelers”). The Travelers policy provides secondary (excess) coverage
                      for third-party liability unless primary coverage is explicitly required by an applicable state statute (e.g., Maryland and New York).
                      Liability coverage is up to $750,000 depending on the plan chosen, except in some states
                      and at some airports that require additional coverage. For New York trips, the liability coverage is $1,250,000. Protection plans also come with 24/7 customer support and access
                      to roadside service, subject to additional terms, conditions, and costs described here
                    </BottomSheetBox>
                  </View>
                </View>
                <View style={styles.hr_line1} />

                {/* car basics */}
                <View style={styles.descriptionBox}>
                  <Text style={styles.title}>Car Basics</Text>
                  <View style={styles.car_basic_row}>
                    <View style={styles.featureRow1} >
                      <View style={styles.featureIcon}>
                        <Icons name={"play"} size={10} color={COLORS.white} />
                      </View>
                      <Text style={styles.featureText}>{singleCarData.seat} Seats</Text>
                    </View>
                    <View style={styles.featureRow1} >
                      <View style={styles.featureIcon}>
                        <Icons name={"play"} size={10} color={COLORS.white} />
                      </View>
                      <Text style={styles.featureText}>2 Door</Text>
                    </View>
                    <View style={styles.featureRow1}>
                      <View style={styles.featureIcon}>
                        <Icons name={"play"} size={10} color={COLORS.white} />
                      </View>
                      <Text style={styles.featureText}>Gas (Premium)</Text>
                    </View>
                  </View>
                </View>

                {/* deluxe class */}
                <View style={styles.descriptionBox}>
                  <Text style={styles.title}>Deluxe Class</Text>
                  {singleCarData.description &&
                    <Text style={styles.text}>{singleCarData.description.length > 100 ? singleCarData.description.slice(0, 100) + "..." : singleCarData.description}</Text>
                  }
                  <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.readMoreBtn}>
                      <Text style={styles.readMoreText}>Read More</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.hr_line1} />

                {/* rating and review box */}
                {/* {singleCarData && singleCarData.car_rating[0] ?
                    <View style={styles.rating_card_container}>
                    <FlatList
                      data={dummyData.RatingCard}
                      renderItem={({ item }) => (
                        <ReviewCard
                          source={item.source}
                          name={item.name}
                          rating={item.rating}
                          message={item.text}
                          date={item.date}
                        />
                      )}
                      key={item => item.id}
                      horizontal={true}
                      showsVerticalScrollIndicator={false}
                    />
                    <View style={{ width: SIZES.width * .94, alignItems: 'flex-end' }}>
                      <TouchableOpacity style={styles.readMoreBtn}>
                        <Text style={styles.readMoreText}>See All Reviews</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  :
                  <View style={styles.no_data_box}>
                    <Text style={styles.no_data}>No Car Ratings Available</Text>
                  </View>
                } */}
                {/* <View style={styles.ratingContainer}>
                  <Text style={styles.ratingTitle}>Ratings and Reviews </Text>
                  <View style={styles.rating_title_row}>
                    <Text style={styles.rating_title1}>5.0</Text>
                    <Image source={icons.star} style={styles.star} resizeMode='contain' />
                    <Text style={styles.rating_title1}>(43 ratings)</Text>
                  </View>
                  <RatingRow text={"Cleanliness"} rating={"5.0"} />
                  <RatingRow text={"Maintenance"} rating={"4.2"} />
                  <RatingRow text={"Communication"} rating={"5.0"} />
                  <RatingRow text={"Convenience"} rating={"4.8"} />
                  <RatingRow text={"Lisitng Accuracy"} rating={"5.0"} />
                  <Text style={styles.rating_text1}>Baser on 33 guest ratings</Text>
                </View> */}

                {/* rating card container */}

                {/* <View style={styles.hr_line1} /> */}

                {/* hosted container */}
                <View style={styles.hostContainer}>
                  <Text style={styles.title}>Hosted By</Text>
                  <View style={styles.hostRow}>
                    <View style={styles.hostImgBox}>
                      <Image source={images.profileImage} style={styles.hostImage} resizeMode='contain' />
                    </View>
                    <View style={styles.host_title_box}>
                      <Text style={styles.host_name}>Arjun Shrama</Text>
                      <Text style={styles.host_subtitle}>t has survived not only five centuries, but also the leap into electronic typesetting, </Text>
                    </View>
                  </View>


                  <View style={styles.hostIconRow}>
                    <View style={styles.hostIconBox}>
                      <Image source={icons.shield1} style={styles.hostIcon} resizeMode='contain' />
                    </View>
                    <View style={styles.host_text_box}>
                      <Text style={styles.host_text}>lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,</Text>
                      <View style={{ alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.readMoreBtn}>
                          <Text style={styles.readMoreText}>Learn More</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={styles.hostIconRow}>
                    <View style={styles.handBox}>
                      <Image source={icons.hand} style={styles.hostIcon} resizeMode='contain' />
                    </View>
                    <View style={styles.host_text_box}>
                      <Text style={styles.host_text}>lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,</Text>
                      <View style={{ alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.readMoreBtn}>
                          <Text style={styles.readMoreText}>Learn More</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.hr_line1} />

                {/* more info container */}
                <View style={styles.more_container}>
                  <Text style={styles.infoTitle}>Extras (2)</Text>
                  <Text style={styles.infoText}>Add optional Extras to your trip at check out</Text>
                  <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.readMoreBtn}>
                      <Text style={styles.readMoreText}>More Info</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* safety container */}
                <View>
                  <View style={styles.safetyBox}>
                    <Text style={styles.safetyTitle}>Child Safety Seat</Text>
                    <View style={styles.safetyRow}>
                      <Text style={styles.safety_text}>$55/trip</Text>
                      <Text style={styles.safety_text}>2 Available</Text>
                    </View>
                  </View>
                  <View style={styles.safetyBox}>
                    <Text style={styles.safetyTitle}>Unlimited Mileage</Text>
                    <View style={styles.safetyRow}>
                      <Text style={styles.safety_text}>$55/trip</Text>
                      <Text style={styles.safety_text}>1 Available</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.hr_line1} />

                {/* booking container */}
                <View style={styles.bookingBox}>
                  <Text style={styles.booking_title}>Book Car Now </Text>
                  <Text style={styles.booking_text}>Starting From $70.00</Text>

                  <View>
                    <SelectDropdown
                      dropdownIconPosition={'right'}
                      rowTextStyle={{ textAlign: 'center', padding: 0 }}
                      renderDropdownIcon={() => (
                        <Icons name="down" size={15} style={styles.down} color={COLORS.black} />
                      )}
                      dropdownStyle={styles.dropDown}
                      buttonStyle={{ ...styles.dropDownBtnStyle, backgroundColor: COLORS.light, borderWidth: 0 }}
                      buttonTextStyle={styles.dropDownTextStyle}
                      data={["data"]}
                      defaultValueByIndex={0}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                        // onChangeText && onChangeText(selectedItem, index)
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                      }}
                      rowTextForSelection={(item, index) => {
                        return item
                      }}
                    />
                  </View>
                </View>

                {/* pick up location */}
                <View style={styles.bookingBox}>
                  <Text style={styles.pickup_title}>Pickup Location</Text>

                  <View>
                    <SelectDropdown
                      dropdownIconPosition={'right'}
                      rowTextStyle={{ textAlign: 'center', padding: 0 }}
                      renderDropdownIcon={() => (
                        <Icons name="down" size={15} style={styles.down} color={COLORS.black} />
                      )}
                      dropdownStyle={styles.dropDown}
                      buttonStyle={styles.dropDownBtnStyle}
                      buttonTextStyle={styles.dropDownTextStyle}
                      data={data && [data.location]}
                      defaultValueByIndex={0}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                        // onChangeText && onChangeText(selectedItem, index)
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                      }}
                      rowTextForSelection={(item, index) => {
                        return item
                      }}
                    />
                  </View>
                </View>

                {/* resources container */}
                <View style={styles.resource_box}>
                  <Text style={styles.resource_title}>Resources</Text>
                  <ResourceRow title={"Additional Drivers"} price={"$8.95 - Per Day"} />
                  <ResourceRow title={"Unlimited Mileage"} price={"$12.95 - Per Day"} />
                  <ResourceRow title={"CDW + PAP Full Coverage"} price={"$30.00 - Per Day"} />
                  <ResourceRow title={"Additional Drivers"} price={"$8.95 - Per Day"} />
                  <ResourceRow title={"Included mileage"} price={"250km/day($0.15 per KM/Calculated upon return)"} />
                  <ResourceRow title={"Plating Fees"} price={"$1.49 - Per Day"} />
                  <Text style={styles.resource_text}>Plating Fees are mandatory daily charges to recuperate the cost of licensing the vehicle. This is customary with all rental agencies in North America.</Text>
                  <ResourceRow title={"Reg. Recovery – Tires"} price={"$3.25 - Per Day"} />
                  <Text style={styles.resource_text}>All vehicles rented in Quebec must have winter tires between Dec 1st and March 15th - It's the law! Tire Fees are mandatory daily charges to recuperate the cost of winter tires, installation and storage which are spread out over the entire year.
                  </Text>
                </View>


                {/* button container */}
                <View style={styles.buttonBox}>
                 
                  <Button1 backgroundColor={COLORS.black} textColor={COLORS.white}
                    onPress={handleCarBook}
                    style={styles.btn_style}
                  // onPress={() => navigation.navigate("CheckOut", { data: postData, carData: singleCarData })}
                  >
                    Book Now
                  </Button1>
                  {!token &&
                    <Button1 backgroundColor={COLORS.white} textColor={COLORS.black}
                      onPress={() => navigation.navigate("Login")}
                      style={styles.btn_style}
                    >
                      Login
                    </Button1>
                  }
                </View>

                {/* bottom sheet */}
                <BottomSheet
                  visible={checkout}
                  onBackButtonPress={() => setCheckout(!checkout)}
                  onBackdropPress={() => setCheckout(!checkout)}
                >
                  <View style={styles.bottom_container}>
                    <View style={styles.close_container}>
                      <TouchableOpacity style={styles.closeBox}
                        onPress={() => setCheckout(!checkout)}
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
                          onPress={() => { setCheckout(!checkout), StoreCarBookingApi(postData, (Number(data.price) + Number(data.additional_price)), "INR",navigation ) }}
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
  token: state.auth.token,
  loading: state.product.loading,
  singleCarData: state.product.singleCarData,
})

const mapDispatchToProps = {
  createCustomer,
  StoreCarBookingApi
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)



