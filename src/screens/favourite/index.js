import { View, Text, StatusBar, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../component/atoms/Header';
import { COLORS, dummyData, images, SIZES } from '../../constants';
import styles from './styles';
import SwipeValueBasedUi from '../../component/atoms/swipeBox';
import Button1 from '../../component/atoms/buttons/Button1';
import { connect } from 'react-redux';
import { GetCarImageApi, GetCarListApi } from '../../redux/actions/vendorRegistration';
import { useEffect } from 'react';
import Loading from '../../component/atoms/Loading';
import { http2 } from '../../services/api';
import { useState } from 'react';
import FindFavourites from '../findFavourites';



const Favourite = ({ navigation, GetCarListApi, carList, GetCarImageApi, carImages, loading }) => {
  const [role, setRole] = useState("vendor")
  useEffect(() => {
    GetCarListApi()

  }, [])

  // console.log("carlist data : ", carList)
  return (
    <>
      {loading ?
        <Loading />
        :
        role == "vendor" ?
          <View style={styles.container} >
            <StatusBar
              backgroundColor={COLORS.light}
              barStyle="dark-content"
            />
            <Header 
            // source={images.profile}
             />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>Your Listings</Text>
              </View>
              <View style={styles.contentBox}>
                <Text style={styles.title1}>Add new Listing</Text>
                <View style={styles.listBox}>
                  <SwipeValueBasedUi
                    data={carList}
                  // source={carListData[0]?.profile_image}
                  // source={{uri: http2 + "storage/profile-images/host/27/El0mnNrIqC7IKCzhCRikF65p19FV0gpx3i91schY.jpg"}}
                  // data={carListData}
                  />
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

          </View>
          :
          <FindFavourites navigation={navigation} />

      }
    </>
  )
}

const mapStateToProps = (state) => ({
  loading: state.getVendor.loading,
  carList: state.getVendor.carList,
  carImages: state.getVendor.carImages,
})

const mapDispatchToProps = {
  GetCarListApi,
  GetCarImageApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite)