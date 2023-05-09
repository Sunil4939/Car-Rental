import { View, Text, StatusBar, TouchableOpacity, TextInput, FlatList, ScrollView, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS, SIZES, dummyData, images } from '../../constants'
import Icons from '../../component/atoms/Icons'
import { useState } from 'react'
import Button1 from '../../component/atoms/buttons/Button1';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CarRent, ReviewCard } from '../../component/atoms/cards'
import { BottomSheet } from 'react-native-btr'
import { connect } from 'react-redux'
import CheckBox from '@react-native-community/checkbox'
import { useEffect } from 'react'
import { SearchFilterApi, } from '../../redux/actions/productAction'
import Loading1 from '../../component/atoms/Loading/Loading1'
import Collapsible from 'react-native-collapsible';

const SocailButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icons name={iconName} size={35} color={COLORS.black} />
    </TouchableOpacity>
  )
}

const Accordian = ({ text, onPress, collapsed, title, }) => {
  return (
    <View style={styles.bottom_line}>
      <TouchableOpacity
        style={styles.accordian_btn}
        onPress={onPress}
      >
        <Text style={styles.accordian_btn_title}>{title}</Text>
        <Icons name={collapsed ? "down-outline" : "up-outline"} size={20} color={COLORS.black} />
      </TouchableOpacity>
      <Collapsible
        collapsed={collapsed}
      >
        <View style={styles.content_box}>
          <Text style={styles.accordian_text}>{text}</Text>
        </View>
      </Collapsible>
    </View>
  )
}


const TextBox = ({ serialNo, title, children }) => {
  return (
    <View style={styles.textBox}>
      <View style={styles.no_box}>
        <Text style={styles.no}>{serialNo}</Text>
      </View>
      <View style={{ width: SIZES.width * .76 }}>
        <Text style={styles.title1}>{title}</Text>
        <Text style={styles.content}>{children}</Text>
      </View>

    </View>
  )
}

const TextBox1 = ({ title, children }) => {
  return (
    <View style={{ marginBottom: SIZES.height * .01 }}>
      <Text style={{ ...styles.title3, marginBottom: SIZES.height * .01 }}>{title}</Text>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const CarBox = ({ name, source }) => {
  return (
    <TouchableOpacity style={styles.car_box}>
      <View>
        <Image source={source} style={styles.car_img} resizeMode='contain' />
      </View>
      <Text style={styles.car_name}>{name}</Text>
    </TouchableOpacity>
  )
}

const DateButton = ({ placeholder, onChangeValue, value }) => {
  const [date, setDate] = useState(false);
  const [display, setDisplay] = useState(false);

  const selectDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setDisplay(false);
    // setDate(formatDate(currentDate))
    let month = String(currentDate.getMonth() + 1).length == 1 ? `0${(currentDate.getMonth() + 1)}` : `${(currentDate.getMonth() + 1)}`
    let d = String(currentDate.getDate()).length == 1 ? `0${currentDate.getDate()}` : `${currentDate.getDate()}`
    onChangeValue && onChangeValue(`${d}-${month}-${currentDate.getFullYear()}`)
    // console.log("currentDate: ", `${currentDate.getFullYear()}-${month}-${d}`)
  }

  return (
    <View>
      <TouchableOpacity style={styles.dateBtn} onPress={() => setDisplay(!display)}>
        <Text style={{ ...styles.dateText, color: value ? COLORS.black : "#59595A" }}>{value ? value : placeholder}</Text>
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
  )
}


const AutoPassion = ({ navigation, route, loading, SearchFilterApi, }) => {

  const [collapsed, setCollapsed] = useState();
  const [searchTitle, setSearchTitle] = useState('');

  const [condition, setCondition] = useState();

  // console.log("route success : ",route.params && route.params.routeName)



  const [postData, setPostData] = useState({
    from: null,
    until: null,
  });


  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    })
  }

  // useEffect(() => {
  //   GetFuelListApi()
  //   GetTransmissionListApi()
  //   SearchFilterApi(searchTitle)
  // }, [])





  return (
    < >
      {loading ?
        <Loading1 />
        :
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}
          style={styles.container}
        >
          <StatusBar
            backgroundColor={COLORS.light}
            barStyle="dark-content"
          />
          <View style={{ ...styles.box, marginTop: SIZES.height * .03, }}>
            <View style={styles.box1}>
              <Text style={styles.label}>Where?</Text>
              <View style={styles.search}>
                <Icons name={"search"} size={20} color={"#333333"} style={styles.searchIcon} />
                <TextInput placeholder='City, Airport, Address or Hotel' placeholderTextColor={"#6D6D6D"}
                  style={styles.searchInput}
                  onChangeText={(text) => setSearchTitle(text)}
                  value={searchTitle}
                />
              </View>
            </View>

            <View style={styles.box1}>
              <View style={styles.row1}>
                <Text style={styles.label}>From</Text>
                <Text style={styles.label}>Until</Text>
              </View>
              <View style={styles.dateBox}>
                <View style={styles.row}>
                  <Icons name={"calendar1"} size={20} color={"#333333"} style={styles.searchIcon} />
                  <DateButton placeholder={"dd-mm-yyyy"} value={postData.from}
                    onChangeValue={(date) => handleChange("from", date)}
                  />
                </View>
                <Icons name={"rightArrow"} size={20} color={COLORS.black} style={styles.rightArrow} />
                <DateButton placeholder={"dd-mm-yyyy"} value={postData.until}
                  onChangeValue={(date) => handleChange("until", date)}
                />
              </View>
            </View>

            <Button1 backgroundColor={COLORS.black}
              textColor={COLORS.white} style={{ width: SIZES.width * .9 }}
            // onPress={() => SearchFilterApi(searchTitle)}
            >
              Search For Cars
            </Button1>
          </View>

          <View>
            <View style={{ alignItems: 'center' }}>
              <Image source={images.passion1} style={styles.bgImage} resizeMode="stretch" />
            </View>

            <View style={styles.contentBox}>
              <Text style={styles.title}>How Rentau Works</Text>
              <Image source={images.passion2} style={styles.passion2} resizeMode="stretch" />
              <TextBox serialNo={1}
                title={"We’ve got your back"} >
                Enter a location and date and browse
                thousands of cars shared by local hosts.
              </TextBox>
              <TextBox
                serialNo={2}
                title={"Book your trip"} >
                Book on the Auto Passion app or online. choose a protection plan, and say hi to your
                host! Cancel for free up to 24 hours before your trip.  </TextBox>
              <TextBox serialNo={3}
                title={"Hit the road"} >
                Have the car delivered or pick it up from
                your host. Check in with the app, grab the keys, and hit the road!
              </TextBox>

              <View style={styles.lineBox}>
                <Image source={images.line} style={styles.line} resizeMode='contain' />
              </View>

              {/* car category */}
              <View style={styles.boxContainer}>
                <View>
                  <Text style={styles.title}>Endless options</Text>
                  <Text style={styles.title3}>Browse the world’s largest car sharing
                    marketplace</Text>
                  <Text style={styles.text}>Whether it’s an SUV for a family road trip, a pickup
                    truck for some errands, or a classic sports car for
                    a special night out, find the perfect car for all kinds
                    of occasions and budgets on Auto Passion.  </Text>
                </View>
                <Button1 backgroundColor={COLORS.black}
                  textColor={COLORS.white} style={styles.button1}
                // onPress={() => SearchFilterApi(searchTitle)}
                >
                  Book the perfect car
                </Button1>

                {/* Browse by make */}
                <View style={styles.car_box_container}>
                  <Text style={styles.title3}>Browse by make</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {dummyData.CarCategory.map((item) => (
                      <CarBox
                        key={item.id}
                        source={item.source}
                        name={item.carName}
                      />
                    ))}
                  </ScrollView>
                </View>
                {/* Browse by category */}
                <View style={styles.car_box_container}>
                  <Text style={styles.title3}>Browse by category</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {dummyData.CarCategory.map((item) =>
                      <CarBox
                        key={item.id}
                        source={item.source}
                        name={item.carName}
                      />
                    )}
                  </ScrollView>
                </View>
              </View>
              {/* passion 3 image */}
              <View>
                <Image source={images.passion3} style={styles.passion3} resizeMode="contain" />
              </View>

              {/* why auto passion */}
              <View>
                <Text style={styles.title}>Why Rentau?</Text>
                {/* <Text style={styles.title3}>Skip the rental counter</Text> */}
                <TextBox1 title={"More bang for your buck"} >Find deals on all kind of drives - from the
                  everyday to the extraordinary - complete with
                  a better, more convenient experience versus
                  rental car companies. Find the perfect vehicle
                  for your budget, starting at &25 per day. </TextBox1>
                <TextBox1 title={"Free cancellation"} >Cancel for a full refund up to 24 hours before
                  your trip stats. Because life happens and it
                  helps to be flexible when it dose. </TextBox1>
                <TextBox1 title={"Convenient Delivery options"} >Get your car deliver right to you or wherever
                  you’re going. Many hosts offer delivery to custom
                  location or popular points of interest like airports,
                  train stations, and hotels.</TextBox1>

                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={images.location}
                    style={styles.location}
                    resizeMode="contain"
                  />
                  {/* You’re covered */}
                  <Text style={{ ...styles.title4, marginBottom: SIZES.height * .01 }}>You’re covered</Text>

                  <TextBox1 title={"Physical damage protection"} >Choose from three protection plans Premier,
                    Standard, or Minimum - to get the level of
                    coverage that’s right for you. spring for Premier
                    for peace of mind, or pay less for lighter
                    coverage with higher out of pocket costs for
                    vehicle damage or theft.</TextBox1>
                  <TextBox1 title={"Liability insurance included "} >All protection plans include coverage under a
                    third party liability insurance policy issued to
                    Auto Passion fom Travelers Excess and
                    Surplus Lines Company- $ 3</TextBox1>
                  <TextBox1 title={"24/7 Support & roadside assistance"} >Customer support is available online 24/7 to
                    answer your questions, and 24/7 roadside
                    assistance is just a call away to keep you safe
                    and on the road.</TextBox1>
                </View>


              </View>

              {/* rating and reviews */}
              <View style={{ alignItems: 'center', height: SIZES.height * .2, }}>
                <Text style={styles.title}>Ratings and Reviews </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                  {dummyData.CarCategory.map((item) => (
                    <ReviewCard
                      key={item.id}
                      showDelete={false}
                    />
                  ))}
                </ScrollView>
              </View>

              {/* Frequently asked questions */}
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>Frequently asked questions</Text>
                {dummyData.AutoPassionQuestion.map((item) => (
                  <Accordian
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    onPress={() => setCollapsed(item.id)}
                    collapsed={collapsed == item.id ? false : true}
                  />
                ))}
              </View>

              <View style={styles.text_container}>
                <Text style={styles.text1}>Any personal insurance you may have that covers damage to the host’s vehicle would kick in before your protection plan, except in limited situations for trips booked in Maryland, but this protects your own wallet. Liability insurance is provided under a policy issued to Auto Passion by Travelers Excess and Surplus Lines Company. Terms, conditions, and exclusions apply. The policy does not provide coverage for damage to a host’s vehicle.</Text>
                <Text style={styles.text1}>For questions or information about the third party liability insurance that is included in protection plans, consumers in Maryland and the licensed states listed here may contact Auto Passion Insurance Agency at (+91) 13250460 or claims@Auto Passion.agency. For questions about how damage to a host’s vehicle is handled, visit the Auto Passion site.</Text>
                <Text style={styles.text1}>When a trip is booked in the state of Washington, physical damage to the host’s vehicle is covered by insurance purchased by Auto Passion, but the Auto Passion insurance does not change the contractual responsibilities of hosts or guests with respect to physical damage to a host’s vehicle.</Text>
              </View>

              {/* socail btn box */}
              <View style={styles.socail_btn_box}>
                <View style={styles.socail_btn_row}>
                  <SocailButton iconName={"facebook-circle"} />
                  <SocailButton iconName={"twitter-circle"} />
                  <SocailButton iconName={"instagram-circle"} />
                  <SocailButton iconName={"youtube-circle"} />
                </View>
                <View style={styles.btn_row}>
                  <TouchableOpacity style={styles.apple_btn}>
                    <Icons name={"apple"} size={25} color={COLORS.white} style={{ marginRight: SIZES.width * .03 }} />
                    <View>
                      <Text style={styles.apple_btn_text}>Download on the</Text>
                      <Text style={styles.apple_btn_title}>App Store</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.apple_btn}>
                    <Icons name={"google"} size={25} color={COLORS.white} style={{ marginRight: SIZES.width * .03 }} />
                    <View>
                      <Text style={styles.apple_btn_text}>GET IT ON</Text>
                      <Text style={styles.apple_btn_title}>Google Play</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* bottom accordian box */}
              <View>
                <Accordian
                  title={"Auto Passion"}
                  text={"auto passion"}
                  onPress={() => setCondition("passion")}
                  collapsed={condition == "passion" ? false : true}
                />
                <Accordian
                  title={"Locations"}
                  text={"Locations"}
                  onPress={() => setCondition("location")}
                  collapsed={condition == "location" ? false : true}
                />
                <Accordian
                  title={"Explore"}
                  text={"Explore"}
                  onPress={() => setCondition("explore")}
                  collapsed={condition == "explore" ? false : true}
                />
                <Accordian
                  title={"Hosting"}
                  text={"Hosting"}
                  onPress={() => setCondition("hosting")}
                  collapsed={condition == "hosting" ? false : true}
                />
                <Accordian
                  title={"Vehicle types"}
                  text={"Vehicle types"}
                  onPress={() => setCondition("vehicle")}
                  collapsed={condition == "vehicle" ? false : true}
                />
                <Accordian
                  title={"Makes"}
                  text={"Makes"}
                  onPress={() => setCondition("makes")}
                  collapsed={condition == "makes" ? false : true}
                />
                <Accordian
                  title={"Top cities"}
                  text={"Top cities"}
                  onPress={() => setCondition("city")}
                  collapsed={condition == "city" ? false : true}
                />
              </View>

              {/* bottom text box */}
              <View>
                <View style={styles.bottom_text_row}>
                  <Text style={styles.bottom_text}>@2023 Rentau</Text>
                  <Text style={styles.bottom_text}>Terms</Text>
                  <Text style={styles.bottom_text}>Privacy</Text>
                  <Text style={styles.bottom_text}>Sitemap</Text>
                </View>
                <Text style={styles.bottom_text1}>Cookie Preferences</Text>
                <Text style={styles.bottom_text1}>Do not sell or share my personal information</Text>
              </View>
            </View>
          </View>

        </ScrollView>
      }
    </>

  )
}

const mapStateToProps = (state) => ({
  loading: state.product.loading,
})

const mapDispatchToProps = {
  SearchFilterApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoPassion)