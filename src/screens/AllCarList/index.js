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
import Loading1 from '../../component/atoms/Loading/Loading1'



const AllCarList = ({ navigation, token, userData, loading, AllCarListApi, allCarList, SingleCarDataApi }) => {
  useEffect(() => {
    AllCarListApi()
  }, [])

  const topCars = allCarList && allCarList.filter(item => item.location.price > 50)

  // console.log("car list home : ", token)

  return (
    <>
      {loading ?
        <Loading1 />
        :
        <View style={styles.container}>
          <StatusBar
            backgroundColor={COLORS.light}
            barStyle="dark-content"
          />
          {/* header box */}
          <View style={styles.header}>

            <View style={styles.header_box}>
              <View style={styles.row}>
                <View style={styles.row1}>
                  <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => navigation.goBack()}
                  >
                    <Icons name={"back"} size={20} color={COLORS.black} />
                  </TouchableOpacity>
                  <Text style={styles.page_title}>Car List</Text>

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
          </View>

          <ScrollView style={styles.container1}
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
          >


            <View style={{ alignItems: "center" }}>

              <View style={{ alignItems: "center" }}>
                <View>
                  {allCarList && allCarList.map((item, index) => (
                    <AllCar key={item.id}
                      source={{ uri: http2 + item.image.front }}
                      price={item.location.currency.symbol + item.location.price}
                      carName={item.brand}
                      style={index == 0 ? { marginTop: SIZES.height * .02 } : null}
                      start={item.location.location}
                      // onPress={() => { navigation.navigate("ProductDetails", { carData: item }) }}
                      onPress={() => { SingleCarDataApi(item.id), navigation.navigate("ProductDetails", {routeName: "AllCarList"}) }}
                    />
                  ))}
                </View>

              </View>
            </View>
          </ScrollView>
        </View>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  userData: state.auth.userData,
  allCarList: state.home.allCarList,
  loading: state.home.loading,
})

const mapDispatchToProps = {
  AllCarListApi,
  SingleCarDataApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCarList)
