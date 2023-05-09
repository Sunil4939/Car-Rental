import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, TextInput } from 'react-native'
import React from 'react'
import styles from './styles';
import Icons from '../../component/atoms/Icons';
import { COLORS, SIZES, images } from '../../constants';
import ImageCropPicker from 'react-native-image-crop-picker';
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


const EditProfile = ({ navigation, UpdateUserApi, loading, GetUserDataApi, userData }) => {
  const [profileImage, setProfileImage] = useState(images.profile1)
  const gender = ["Select Gander", "Male", "Female", "Other"]

  const [disabled, setDisabled] = useState(false)
  // const userName = userData && userData.name.split(" ")
  // const first_name = userName && userName[0]
  // const middle_name = userName && userName.length == 3 ? userName[1] : null
  // const last_name = userName && userName.length == 2 ? userName[1] : userName[2]
  const email = userData && userData.email

  // console.log("user data : ", userData.profile && userData.profile.profile_image)

  useEffect(() => {
    GetUserDataApi()
  }, [])


  const [postData, setPostData] = useState({
    first_name: null,
    middle_name: null,
    last_name: null,
    // email: null,
    phone: null,
    profile_image: null,
    driving_license: null,
    bank_account_number: null,
    bank_name: null,
    bank_code: null,
  })

  useEffect(() => {
    if (userData) {
      setPostData({
        // "first_name": userData.profile && userData.profile.first_name ? userData.profile.first_name : first_name,
        // "middle_name": userData.profile && userData.profile.middle_name ? userData.profile.middle_name : middle_name,
        // "last_name": userData.profile && userData.profile.last_name ? userData.profile.last_name : userName.length > 0 ? last_name : null,
        "first_name": userData.profile && userData.profile.first_name,
        "middle_name": userData.profile && userData.profile.middle_name,
        "last_name": userData.profile && userData.profile.last_name,
        "phone": userData.profile && userData.profile.phone,
        "profile_image": userData.profile && userData.profile.profile_image && { uri: http2 + userData.profile.profile_image, name: "profile_image.jpg", type: "image/jpg"},
        "driving_license": userData.profile && userData.profile.driving_license,
        "bank_account_number": userData.profile && userData.profile.bank_account_number,
        "bank_name": userData.profile && userData.profile.bank_name,
        "bank_code": userData.profile && userData.profile.bank_code,
      })
      setProfileImage(userData.profile && userData.profile.profile_image ? { uri: http2 + userData.profile.profile_image } : images.profile1)
    }
  }, [])

  // console.log("postData : ", postData)

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value
    })
  }


  const handleSubmit = () => {
    if (postData.name && postData.email && postData.mobile) {
      UpdateUserApi(postData, navigation)
      // console.log("postdata: ", postData)
    } else {
      RNToasty.Error({
        title: "Please fill all fields",
        duration: 2
      })
    }
  }

  const selectProfileImage = () => {
    console.log("select image")
    ImageCropPicker.openPicker({
      width: SIZES.width * .3,
      height: SIZES.height * .148,
      cropping: true
    }).then(image => {
      handleChange("profile_image", {
        uri: image.path,
        // name: "profile_image.jpeg",
        name: image.filename || Date.now() + "-" + image.path.slice(-10),
        type: image.mime
      })
      console.log(image)
      setProfileImage({ uri: image.path });
    }).catch((err) => console.log(err));
  };

  // console.log("psojfd image : ", profileImage)
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.light}
        barStyle="dark-content"
      />

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
              <Image
                source={profileImage}
                // source={postData.profile_image ? { uri: http2 + postData.profile_image } : profileImage } 
                style={styles.profileImage} resizeMode='contain' />
              <View style={styles.editBtn}>
                <Icons name={"edit"} size={20} color={"#232434"} style={styles.edit} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.email}>{email}</Text>

        </View>


        <View style={styles.form}>
          {/* <Text style={styles.title}>Email</Text> */}

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
          {/* <InputWithIcon
            label={"Email"}
            placeholder={"Enter Your Email Id"}
            leftIcon={"email"}
            onChangeText={(text) => handleChange("email", text)}
            value={postData.email}
            editable={false}
          /> */}


          <InputWithIcon
            label={"Phone No"}
            placeholder={"Enter Your Phone Number"}
            leftIcon={"call"}
            keyboardType={'numeric'}
            maxLength={10}
            onChangeText={(text) => handleChange("phone", Number(text))}
            value={postData.phone ? String(postData.phone) : ''}
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
            // onChangeText={(text) => handleChange("bank_account_number", text)}
            // value={postData.bank_account_number}
            onChangeText={(text) => handleChange("bank_account_number", Number(text))}
            value={postData.bank_account_number ? String(postData.bank_account_number) : ''}
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
              onPress={() => UpdateUserApi(postData, navigation)}
              disabled={loading}
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



