import { View, Text, StatusBar, FlatList, ScrollView, Animated } from 'react-native'
import React from 'react'
import Header from '../../component/atoms/Header';
import { COLORS, dummyData, images, SIZES } from '../../constants';
import styles from './styles';
import SwipeValueBasedUi from '../../component/atoms/swipeBox';
import Button1 from '../../component/atoms/buttons/Button1';
import { connect } from 'react-redux';
import { DeleteCarDataApi, GetCarImageApi, GetCarListApi } from '../../redux/actions/vendorRegistration';
import { useEffect } from 'react';
import Loading from '../../component/atoms/Loading';
import { http2 } from '../../services/api';
import { useState } from 'react';
import FindFavourites from '../findFavourites';
import LoginBox from '../../component/atoms/LoginBox';
import Loading1 from '../../component/atoms/Loading/Loading1';
import { SwipeListView } from 'react-native-swipe-list-view';
import { SwipeCarBox, HiddenSwipeBox } from '../../component/atoms/swipeBox/SwipeCarBox';
import findAgoDays from '../../services/findAgoDays';
import { GetUserDataApi } from '../../redux/actions/authAction';


const Favourite = ({ navigation, GetCarListApi, carList, token, GetCarImageApi, GetUserDataApi, DeleteCarDataApi, carImages, userData, loading }) => {

  // console.log("user : ", userData)
  const [role, setRole] = useState("vendor")
  // const [role, setRole] = useState(userData && userData.role)

  // const [listData, setListData] = useState(
  //  carList.map((item, i) => ({ key: `${i}`, ...item }))
  // );

  const [listData, setListData] = useState();

  useEffect(() => {
    GetUserDataApi()
    GetCarListApi()
  }, [])


  const rowSwipeAnimatedValues = {};
  useEffect(() => {
    // setListData(carList && carList.map((item, i) => ({ key: `${i}`, ...item })))

    carList.forEach((item, i) => {
      rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });
  }, [carList])


  // carList && carList.forEach((item) => {
  //         rowSwipeAnimatedValues[`${index}`] = new Animated.Value(0);
  //     });


  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const onSwipeValueChange = (swipeData) => {
    const { key, value } = swipeData;
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };


  // console.log("carlist data : ", carList && carList[0])
  // return (
  //   <>
  //     {loading ?
  //       <Loading />
  //       :
  //       role == "vendor" ?
  //         <View style={styles.container} >
  //           <StatusBar
  //             backgroundColor={COLORS.light}
  //             barStyle="dark-content"
  //           />
  //           <Header
  //           // source={images.profile}
  //           />
  //           {token ?
  //             <ScrollView showsVerticalScrollIndicator={false}>
  //               <View style={styles.titleBox}>
  //                 <Text style={styles.title}>Your Listings</Text>
  //               </View>
  //               <View style={styles.contentBox}>
  //                 <Text style={styles.title1}>Add new Listing</Text>
  //                 <View style={styles.listBox}>
  //                   {/* <SwipeValueBasedUi
  //                     data={carList}
  //                   /> */}
  //                   <View style={styles.listContainer}>
  //                     <SwipeListView
  //                       data={carList}
  //                       renderItem={({ item }) => (
  //                         <SwipeCarBox
  //                           source={item.image.front ? { uri: http2 + item.image.front } : images.car1}
  //                           isActive={item.is_active}
  //                           brandName={item.name}
  //                           buildYear={item.build_year}
  //                           createdAt={findAgoDays(item.created_at)}
  //                         />
  //                       )}
  //                       renderHiddenItem={({ item }) => (
  //                         <HiddenSwipeBox deletePress={() => DeleteCarDataApi(item.id)} />
  //                       )}
  //                       leftOpenValue={0}
  //                       rightOpenValue={-80}
  //                       previewRowKey={'0'}
  //                       previewOpenValue={-40}
  //                       previewOpenDelay={3000}
  //                       // onRowDidOpen={onRowDidOpen}
  //                       // onRowDidOpen={(key) => {
  //                       //   console.log("row key : ", key)
  //                       // }}
  //                       onSwipeValueChange={({key, value}) => {
  //                         // console.log("key and value", key, value)
  //                         // rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  //                       }}
  //                       // onSwipeValueChange={onSwipeValueChange}
  //                     />
  //                   </View>
  //                 </View>
  //               </View>
  //               <View style={styles.btnBox}>
  //                 <Button1 style={{ width: SIZES.width * .9 }}
  //                   backgroundColor={COLORS.black}
  //                   textColor={COLORS.white}
  //                   onPress={() => navigation.navigate("Terms")}
  //                 >Add new list</Button1>
  //               </View>
  //             </ScrollView>
  //             :
  //             <LoginBox onPress={() => navigation.navigate("Login")} />
  //           }
  //         </View>
  //         :
  //         <FindFavourites navigation={navigation} />
  //     }
  //   </>
  // )
  return (
    <View style={styles.container} >
      <StatusBar
        backgroundColor={COLORS.light}
        barStyle="dark-content"
      />
      <Header
      // source={images.profile}
      />
      {token ?
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>Your Listings</Text>
          </View>
          <View style={styles.contentBox}>
            <Text style={styles.title1}>Add new Listing</Text>
            <View style={styles.listBox}>
              {/* <SwipeValueBasedUi
                      data={carList}
                    /> */}
              {loading ?
                <Loading1 />
                :
                <View style={styles.listContainer}>
                  <SwipeListView
                    data={carList}
                    renderItem={({ item }) => (
                      <SwipeCarBox
                        source={item.image.front ? { uri: http2 + item.image.front } : images.car1}
                        isActive={item.is_active}
                        brandName={item.name}
                        buildYear={item.build_year}
                        createdAt={findAgoDays(item.created_at)}
                      />
                    )}
                    renderHiddenItem={({ item }) => (
                      <HiddenSwipeBox deletePress={() => DeleteCarDataApi(item.id)} />
                    )}
                    leftOpenValue={0}
                    rightOpenValue={-80}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    // onRowDidOpen={onRowDidOpen}
                    // onRowDidOpen={(key) => {
                    //   console.log("row key : ", key)
                    // }}
                    onSwipeValueChange={({ key, value }) => {
                      // console.log("key and value", key, value)
                      // rowSwipeAnimatedValues[key].setValue(Math.abs(value));
                    }}
                  // onSwipeValueChange={onSwipeValueChange}
                  />
                </View>
              }
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
        <LoginBox onPress={() => navigation.navigate("Login")} />
      }
    </View>
  )
}

const mapStateToProps = (state) => ({
  loading: state.getVendor.loading,
  carList: state.getVendor.carList,
  carImages: state.getVendor.carImages,
  token: state.auth.token,
  userData: state.auth.userData,
})

const mapDispatchToProps = {
  GetCarListApi,
  GetCarImageApi,
  DeleteCarDataApi,
  GetUserDataApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite)