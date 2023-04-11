import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import styles from './styles';
import Icons from '../../component/atoms/Icons';
import { COLORS, SIZES, images } from '../../constants';
import HeaderLeft from '../../component/atoms/HeaderLeft';
import ImageCropPicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RNToasty } from 'react-native-toasty';
import InputWithIcon from '../../component/atoms/inputs/InputWithIcon';
import Button1 from '../../component/atoms/buttons/Button1';
import { useState } from 'react';
import DropdownInput from '../../component/atoms/dropdownInput';
import { connect } from 'react-redux';
import { UpdateUserApi } from '../../redux/actions/authAction';



const EditProfile = ({ navigation, UpdateUserApi, userData }) => {
  const [profileImage, setProfileImage] = useState()
  const gender = ["Select Gander", "Male", "Female", "Other"]

  const [postData, setPostData] = useState({
    name: userData && userData.name,
    email: userData && userData.email,
    gender: "",
    mobile: "",
    profile_image: null
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
    // console.log("select image")
    ImageCropPicker.openPicker({
      width: SIZES.width * .3,
      height: SIZES.height * .148,
      cropping: true
    }).then(image => {
      handleChange("profile_image", {
        uri: image.path,
        name: "profile_image.jpeg",
        type: image.mime
      })
      // console.log(image.path)
      setProfileImage(image.path);
    }).catch((err) => console.log(err));
  };

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

      <KeyboardAwareScrollView
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
            label={"Name"}
            placeholder={"Enter Your Name"}
            leftIcon={"user"}
            onChangeText={(text) => handleChange("name", text)}
            value={postData.name}
          />
          <InputWithIcon
            label={"Email Id"}
            placeholder={"Enter Your Email Id"}
            leftIcon={"email"}
            onChangeText={(text) => handleChange("email", text)}
            value={postData.email}
          />
          <DropdownInput
            data={gender}
            label={"Gander"}
            leftIcon={"gender"}
            onChangeText={(value) => handleChange("gender", value)}
          />

          <InputWithIcon
            label={"Contact No"}
            placeholder={"Enter Your Phone Number"}
            leftIcon={"call"}
            keyboardType={'numeric'}
            maxLength={10}
            onChangeText={(text) => handleChange("mobile", text)}
            value={postData.mobile}
          />

          <View style={styles.btnRow}>
            <Button1
              backgroundColor={COLORS.black}
              textColor={COLORS.white}
              onPress={handleSubmit}
            >Update</Button1>
            <Button1
              onPress={() => navigation.goBack()}
              style={{ borderColor: "#E1E1E1" }}
            >Cancel</Button1>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  userData: state.auth.userData,
})

const mapDispatchToProps = {
  UpdateUserApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)