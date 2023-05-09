import { View, Text, StatusBar, FlatList, ScrollView, Animated } from 'react-native'
import React from 'react'
import { COLORS, dummyData, images, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import { connect } from 'react-redux';
import { DeleteCarDataApi, GetCarImageApi, GetCarListApi } from '../../redux/actions/vendorRegistration';
import { useEffect } from 'react';
import { http2 } from '../../services/api';
import { useState } from 'react';
import Loading1 from '../../component/atoms/Loading/Loading1';
import SwipeCarBox from '../../component/atoms/swipeBox/SwipeCarBox';
import findAgoDays from '../../services/findAgoDays';
import { GetUserDataApi } from '../../redux/actions/authAction';
import { SingleCarDataApi } from '../../redux/actions/productAction';


const AddCarList = ({ navigation, GetCarListApi,userRole, carList, token, GetCarImageApi, SingleCarDataApi, GetUserDataApi, DeleteCarDataApi, carImages, userData, loading }) => {

  // console.log("user : ", userData && userData.role)
  const [role, setRole] = useState()


  useEffect(() => {
    GetUserDataApi()
    GetCarListApi()
  }, [])

  useEffect(() => {
    setRole(userData && userData.role)
  }, [])

  // console.log("dsafdasf ; ", carList)


  return (
    <>
      {loading ?
        <Loading1 />
        :
        <View style={styles.container} >
          <StatusBar
            backgroundColor={COLORS.light}
            barStyle="dark-content"
          />
          {userRole == "vendor" || carList[0] ?
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>Your Listings</Text>
              </View>
              <View style={styles.contentBox}>
                <Text style={styles.title1}>Add new Listing</Text>
                <View style={styles.listBox}>
                  <View style={styles.listContainer}>
                    {/* <FlatList
                      data={carList}
                      renderItem={({ item }) => (
                        <SwipeCarBox
                          source={item.image.front ? { uri: http2 + item.image.front } : images.car1}
                          isActive={item.is_active}
                          brandName={item.name}
                          buildYear={item.build_year}
                          createdAt={findAgoDays(item.created_at)}
                          editPress={() => navigation.navigate("UpdateCar", { carData: item })}
                          deletePress={() => DeleteCarDataApi(item.id)}
                        />
                      )}
                      key={item => item.id}
                      showsVerticalScrollIndicator={false}
                    /> */}
                    {carList && carList.map((item) => (
                      <SwipeCarBox
                        key={item.id}
                        source={item.image.front ? { uri: http2 + item.image.front } : images.car1}
                        isActive={item.is_active}
                        brandName={item.name}
                        buildYear={item.build_year}
                        createdAt={findAgoDays(item.created_at)}
                        editPress={() => navigation.navigate("UpdateCar", { carData: item })}
                        deletePress={() => DeleteCarDataApi(item.id)}
                        onPress={() => { SingleCarDataApi(item.id), navigation.navigate("ProductDetails", {routeName: "AddCarList"}) }}
                        // onPress={() => { navigation.navigate("ProductDetails", { carData: item }) }}
                      />
                    ))}
                  </View>
                </View>
              </View>
              <View style={styles.btnBox}>
                <Button1 style={{ width: SIZES.width * .9 }}
                  backgroundColor={COLORS.black}
                  textColor={COLORS.white}
                  onPress={() => navigation.navigate("Terms")}
                >Add new list</Button1>
              </View>
            </ScrollView>
            :
            <View style={styles.box}>
              <Button1 style={{ width: SIZES.width * .9 }}
                backgroundColor={COLORS.black}
                textColor={COLORS.white}
                onPress={() => navigation.navigate("Terms")}
              >Become a host</Button1>
            </View>
          }
        </View>
      }
    </>

  )
}

const mapStateToProps = (state) => ({
  loading: state.getVendor.loading,
  carList: state.getVendor.carList,
  carImages: state.getVendor.carImages,
  token: state.auth.token,
  userData: state.auth.userData,
  userRole: state.auth.userRole,
})

const mapDispatchToProps = {
  GetCarListApi,
  GetCarImageApi,
  DeleteCarDataApi,
  GetUserDataApi,
  SingleCarDataApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCarList)