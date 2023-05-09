import React from 'react'
import { FlatList, Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { COLORS, FONTS, SIZES, dummyData, icons, images } from '../../constants'
import Icons from '../../component/atoms/Icons'
import { AllCar, TopCar } from '../../component/atoms/cards'
import { AllCarListApi } from '../../redux/actions/homeAction'
import { useEffect } from 'react'
import { http2 } from '../../services/api'
import { SingleCarDataApi } from '../../redux/actions/productAction'
import { GetCarListApi } from '../../redux/actions/vendorRegistration'



const HomePage = ({ navigation, token, userData,AllCarListApi, location, allCarList,SingleCarDataApi, GetCarListApi,carList }) => {
  useEffect(() => {
    AllCarListApi()
    GetCarListApi()
  },[])

  const topCars = allCarList && allCarList.filter(item => item.location.price > 50)

  // console.log("car list home : ", carList[0].location.price)

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.light}
        barStyle="dark-content"
      />
      {/* header box */}
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.row1}>
            <TouchableOpacity style={{ ...styles.profileBox, borderWidth: userData ? 0 : 1 }}
             onPress={() => navigation.navigate("More")}
            >
              {token ?
                <View>
                  <Image
                    source={userData && userData.profile && userData.profile.profile_image ? { uri: http2 + userData.profile.profile_image } : images.profile1}
                    style={styles.profileImg}
                    resizeMode="contain"
                  />
                  <View style={styles.menuCircle}>
                    <Icons name={"menu"} size={15} color={COLORS.black} />
                  </View>
                </View>
                :
                <Image
                  source={icons.profile}
                  style={styles.profile}
                  resizeMode="contain"
                />
              }
            </TouchableOpacity>
            <View style={styles.box}>
              <Text style={styles.userName}>Hi, </Text>
              <Text style={{ ...styles.userName, fontFamily: FONTS.regular, }}>{token && userData ? `${userData.name}` : "Jhon smith"}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}
          onPress={() => navigation.navigate("Inbox")}
          >
            <Icons name={"notification"} size={28} color={COLORS.black} />
            <View style={styles.countBox}>
              {/* <Text style={styles.count}>0</Text> */}
            </View>
          </TouchableOpacity>
        </View>

      </View>

      <ScrollView style={styles.container1}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
      >
        {/* search box */}
        <View style={styles.searchBox}>
          <TouchableOpacity style={styles.search}
            onPress={() => navigation.navigate("Product",{routeName: "HomePage"})}
          >
            <Icons name={"search"} size={20} color={COLORS.black} style={styles.searchIcon} />
            <TextInput placeholder={"City, Airport, Address or Hotel"}
              placeholderTextColor={"#6D6D6D"}
              style={styles.input}
              editable={false}
            />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>

          {/* <View style={{ alignItems: "center" }}> */}
          {/* title row */}
          {/* <View style={styles.titleRow}>
            <Text style={styles.title}>Top Luxury Car</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("Product",{routeName: "HomePage"})}
            >
              <Text style={styles.blueText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={topCars}
            renderItem={({ item }) => (
              <TopCar
              source={{uri: http2 + item.image.front}}
              price={item.location.currency.symbol +item.location.price}
              carName={item.brand}
              onPress={() => { SingleCarDataApi(item.id), navigation.navigate("ProductDetails", {routeName: "HomePage"}) }}
              // onPress={() => { SingleCarDataApi(item.id), navigation.navigate("ProductDetails") }}
              />
            )}
            key={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          /> */}

          <View style={{ alignItems: "center" }}>
            {/* title row */}
            <View style={styles.titleRow}>
              <Text style={styles.title}>All Car </Text>
              {/* <TouchableOpacity
              onPress={() => navigation.navigate("Product",{routeName: "HomePage"})}
              >
                <Text style={styles.blueText}>See all</Text>
              </TouchableOpacity> */}
            </View>
            <View>
              {carList && carList[0] && carList.map((item) => (
                <AllCar key={item.id}
                  source={item.image && item.image.front ? {uri: http2 + item.image.front} : images.car1}
                  price={"$" +item.location.price}
                  carName={item.brand}
                  start={item.location.location}
                  onPress={() => { SingleCarDataApi(item.id), navigation.navigate("ProductDetails", {routeName: "HomePage"}) }}
                  // onPress={() => { navigation.navigate("ProductDetails", { carData: item }) }}
                />
              ))}
            </View>


            {location &&
              <View
                style={{ width: SIZES.width * .9, }}
              >
                <Text style={styles.title2}>Available Locations</Text>
                <FlatList
                  data={location}
                  renderItem={({ item }) => (
                    <View style={styles.location_box}>
                      <TouchableOpacity style={styles.button}
                      onPress={() => navigation.navigate("SearchScreen", {routeName: "HomePage",location: item.location})}
                      >
                        <Text style={styles.location}>{item.location}</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  key={item => item.id}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                />

              </View>
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  userData: state.auth.userData,
  allCarList: state.home.allCarList,
  location: state.search.location,
  carList: state.getVendor.carList,
})

const mapDispatchToProps = {
    AllCarListApi,
    SingleCarDataApi,
    GetCarListApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
