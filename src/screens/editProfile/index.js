import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles';
import Icons from '../../component/atoms/Icons';
import { COLORS, SIZES, images } from '../../constants';
import HeaderLeft from '../../component/atoms/HeaderLeft';
import ImageCropPicker from 'react-native-image-crop-picker';
// import DocumentPicker from 'react-native-document-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RNToasty } from 'react-native-toasty';
import InputWithIcon from '../../component/atoms/inputs/InputWithIcon';
import Button1 from '../../component/atoms/buttons/Button1';
import { useState } from 'react';
import DropdownInput from '../../component/atoms/dropdownInput';
import { connect } from 'react-redux';
import { GetUserDataApi, UpdateUserApi } from '../../redux/actions/authAction';
import { useEffect } from 'react';
import { http2 } from '../../services/api';



const EditProfile = ({ navigation, UpdateUserApi, GetUserDataApi, userData }) => {
  const [profileImage, setProfileImage] = useState(userData && userData.profile && http2 + userData.profile.profile_image)
  const gender = ["Select Gander", "Male", "Female", "Other"]

  // console.log("user data : ", userData)

  useEffect(() => {
    GetUserDataApi()
  })

  const [postData, setPostData] = useState({
    first_name: userData && userData.first_name,
    middle_name: userData && userData.middle_name,
    last_name: userData && userData.last_name,
    email: userData && userData.email,
    phone: userData && userData.phone,
    profile_image: userData && userData.profile && userData.profile.profile_image,
    driving_license: userData && userData.profile && userData.profile.driving_license,
    bank_account_number: userData && userData.profile && userData.profile.bank_account_number,
    bank_name: userData && userData.profile && userData.profile.bank_name,
    bank_code: userData && userData.profile && userData.profile.bank_code,
  })

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value
    })
  }


  const handleSubmit = () => {
    if (postData.name && postData.email && postData.gender && postData.mobile) {
      UpdateUserApi(postData, navigation)
      // console.log("postdata: ", postData)
    } else {
      RNToasty.Error({
        title: "Please fill all fields",
        duration: 2
      })
    }
  }

  const selectProfileImage = async () => {
    console.log("select image")
    // DocumentPicker.pick({
    //   type: [DocumentPicker.types.allFiles],
    // }).then(image => {
    //   // handleChange("profile_image", {
    //   //   uri: image.path,
    //   //   name: "profile_image.jpeg",
    //   //   type: image.mime
    //   // })
    //   console.log(image)

      // setProfileImage(image.path);
    // }).catch((err) => console.log(err));
  }

      // ImageCropPicker.openPicker({
      //   width: SIZES.width * .3,
      //   height: SIZES.height * .148,
      //   cropping: true
      // }).then(image => {
      //   handleChange("profile_image", {
      //     uri: image.path,
      //     name: "profile_image.jpeg",
      //     // name: image.filename || Date.now() + "-" + image.path.slice(-10),
      //     type: image.mime
      //   })
      //   console.log(image.path)

      //   setProfileImage(image.path);
      // }).catch((err) => console.log(err));
    // };
 

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={COLORS.light}
          barStyle="dark-content"
        />
        <View style={styles.headerBox}>
          <View style={styles.header}>
            <HeaderLeft navigation={navigation} title={"Edit Profile"} />
          </View>
        </View>

        <ScrollView
          keyboardShouldPersistTaps={"handled"}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerBox}>
            <View style={styles.header1}>
            </View>
            <View style={styles.headerBox}>
              <TouchableOpacity style={styles.profileImageBox}
                onPress={selectProfileImage}
              >
                <Image source={profileImage ? { uri: profileImage } : images.profile1} style={styles.profileImage} resizeMode='contain' />
                <View style={styles.editBtn}>
                  <Icons name={"edit"} size={20} color={"#232434"} style={styles.edit} />
                </View>
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.form}>
            <InputWithIcon
              label={"First Name"}
              placeholder={"Enter Your First Name"}
              leftIcon={"user"}
              onChangeText={(text) => handleChange("first_name", text)}
              value={postData.first_name}
            />
            <InputWithIcon
              label={"Middle Name"}
              placeholder={"Enter Your Middle Name"}
              leftIcon={"user"}
              onChangeText={(text) => handleChange("middle_name", text)}
              value={postData.middle_name}
            />
            <InputWithIcon
              label={"Last Name"}
              placeholder={"Enter Your Last Name"}
              leftIcon={"user"}
              onChangeText={(text) => handleChange("last_name", text)}
              value={postData.last_name}
            />
            <InputWithIcon
              label={"Phone No"}
              placeholder={"Enter Your Phone Number"}
              leftIcon={"call"}
              keyboardType={'numeric'}
              maxLength={10}
              onChangeText={(text) => handleChange("mobile", text)}
              value={postData.mobile}
            />
            <InputWithIcon
              label={"Driving license"}
              placeholder={"Enter Your driving license"}
              leftIcon={"license1"}
              onChangeText={(text) => handleChange("driving_license", text)}
              value={postData.driving_license}
            />
            {/* <DropdownInput
            data={gender}
            label={"Gander"}
            leftIcon={"gender"}
            onChangeText={(value) => handleChange("gender", value)}
          /> */}
            <InputWithIcon
              label={"Account No"}
              placeholder={"Enter Your Account Number"}
              leftIcon={"bank"}
              keyboardType={'numeric'}
              maxLength={15}
              onChangeText={(text) => handleChange("bank_account_number", text)}
              value={postData.bank_account_number}
            />
            <InputWithIcon
              label={"Bank Name"}
              placeholder={"Enter Your Bank Name"}
              leftIcon={"bank"}
              onChangeText={(text) => handleChange("bank_name", text)}
              value={postData.bank_name}
            />
            <InputWithIcon
              label={"Bank Code"}
              placeholder={"Enter Your Bank Code"}
              leftIcon={"bank"}
              onChangeText={(text) => handleChange("bank_code", text)}
              value={postData.bank_code}
            />

            <View style={styles.btnRow}>
              <Button1
                backgroundColor={COLORS.black}
                textColor={COLORS.white}
                onPress={() => UpdateUserApi(postdata, navigation)}
              >Update</Button1>
              <Button1
                onPress={() => navigation.goBack()}
                style={{ borderColor: "#E1E1E1" }}
              >Cancel</Button1>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }

  const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    userData: state.auth.userData,
  })

  const mapDispatchToProps = {
    UpdateUserApi,
    GetUserDataApi,
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)