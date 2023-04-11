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



const HomePage = ({ navigation, token, userData,AllCarListApi, allCarList,SingleCarDataApi }) => {
  useEffect(() => {
    AllCarListApi()
  },[])

  const topCars = allCarList && allCarList.filter(item => item.location.price > 50)

  // console.log("car list home : ", allCarList)

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
            <View style={{ ...styles.profileBox, borderWidth: userData ? 0 : 1 }}>
              {token ?
                <View>
                  <Image
                    source={userData && userData.profile_image ? { uri: http2 + userData.profile_image } : images.profile1}
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
            </View>
            <View style={styles.box}>
              <Text style={styles.userName}>Hi, </Text>
              <Text style={{ ...styles.userName, fontFamily: FONTS.regular, }}>{token && userData ? `${userData.name}` : "Jhon smith"}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}
          // onPress={() => setModalVisible(!isModalVisible)}
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
            onPress={() => navigation.navigate("Product")}
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
          <View style={styles.titleRow}>
            <Text style={styles.title}>Top Luxury Car</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("Product")}
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
              // onPress={() => { navigation.navigate("ProductDetails", { carData: item }) }}
              // onPress={() => { SingleCarDataApi(item.id), navigation.navigate("ProductDetails") }}
              />
            )}
            key={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <View style={{ alignItems: "center" }}>
            {/* title row */}
            <View style={styles.titleRow}>
              <Text style={styles.title}>All Car </Text>
              <TouchableOpacity
              onPress={() => navigation.navigate("Product")}
              >
                <Text style={styles.blueText}>See all</Text>
              </TouchableOpacity>
            </View>
            <View>
              {allCarList && allCarList.map((item) => (
                <AllCar key={item.id}
                  source={{uri: http2 + item.image.front}}
                  price={item.location.currency.symbol +item.location.price}
                  carName={item.brand}
                  start={item.location.location}
                  // onPress={() => { navigation.navigate("ProductDetails", { carData: item }) }}
                />
              ))}
            </View>

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
})

const mapDispatchToProps = {
    AllCarListApi,
    SingleCarDataApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
