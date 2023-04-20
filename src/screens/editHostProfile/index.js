// import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, Platform } from 'react-native'
// import React from 'react'
// import styles from './styles';
// import Icons from '../../component/atoms/Icons';
// import { COLORS, SIZES, images } from '../../constants';
// import HeaderLeft from '../../component/atoms/HeaderLeft';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import DocumentPicker from 'react-native-document-picker';
// import { RNToasty } from 'react-native-toasty';
// import InputWithIcon from '../../component/atoms/inputs/InputWithIcon';
// import Button1 from '../../component/atoms/buttons/Button1';
// import { useState } from 'react';
// import { connect } from 'react-redux';
// import { GetUserDataApi, UpdateHostProfileApi, UpdateUserApi } from '../../redux/actions/authAction';
// import { useEffect } from 'react';
// import { http2 } from '../../services/api';



// const EditHostProfile = ({ navigation, UpdateHostProfileApi, GetUserDataApi, userData }) => {
//     const [profileImage, setProfileImage] = useState(userData && userData.profile && http2 + userData.profile.profile_image)

//     // console.log("user data : ", userData)

//     useEffect(() => {
//         GetUserDataApi()
//     })

//     const [postData, setPostData] = useState({
//         driver_first_name: null,
//         driver_middle_name: null,
//         driver_last_name: null,
//         driver_license: null,
//         stripe_id: null,
//         stripe_email: null,
//         stripe_phone: null,
//         profile_image: null,
//     })

//     const handleChange = (name, value) => {
//         setPostData({
//             ...postData,
//             [name]: value
//         })
//     }


//     const handleSubmit = () => {
//         if (postData.driver_first_name && postData.stripe_phone && postData.driver_license) {
//             UpdateHostProfileApi(postData, navigation)
//             // console.log("postdata: ", postData)
//         } else {
//             RNToasty.Error({
//                 title: "Please fill all fields",
//                 duration: 2
//             })
//         }
//     }

//     const selectProfileImage = async () => {
//         console.log("select image")


//         //  ImageCropPicker.openPicker({
//         //     width: 300,
//         //     height: 300,
//         //     // width: SIZES.width * .3,
//         //     // height: SIZES.height * .148,
//         //     cropping: true,
//         //     // freeStyleCropEnabled: true,
//         //     // cropping: false
//         // }).then(image => {

//         //     // handleChange("profile_image", {
//         //     //     uri: image.path,
//         //     //     name: "profile_image.jpeg",
//         //     //     // name: image.filename || Date.now() + "-" + image.path.slice(-10),
//         //     //     type: image.mime
//         //     // })
//         //     console.log(image.path)

//         //     // setProfileImage(image.path);
//         // }).catch((err) => console.log(err));
//     };

//     return (
//         <View style={styles.container}>
//             <StatusBar
//                 backgroundColor={COLORS.light}
//                 barStyle="dark-content"
//             />
//             <View style={styles.headerBox}>
//                 <View style={styles.header}>
//                     <HeaderLeft navigation={navigation} title={"Edit Host Profile"} />
//                 </View>
//             </View>

//             <ScrollView
//                 keyboardShouldPersistTaps={"handled"}
//                 showsVerticalScrollIndicator={false}
//             >
//                 <View style={styles.headerBox}>
//                     <View style={styles.header1}>
//                     </View>
//                     <View style={styles.headerBox}>
//                         <TouchableOpacity style={styles.profileImageBox}
//                             onPress={selectProfileImage}
//                         >
//                             <Image source={profileImage ? { uri: profileImage } : images.profile1} style={styles.profileImage} resizeMode='contain' />
//                             <View style={styles.editBtn}>
//                                 <Icons name={"edit"} size={20} color={"#232434"} style={styles.edit} />
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                 </View>


//                 <View style={styles.form}>
//                     <InputWithIcon
//                         label={"Driver First Name"}
//                         placeholder={"Enter Your First Name"}
//                         leftIcon={"user"}
//                         onChangeText={(text) => handleChange("driver_first_name", text)}
//                         value={postData.driver_first_name}
//                     />
//                     <InputWithIcon
//                         label={"Driver Middle Name"}
//                         placeholder={"Enter Your Middle Name"}
//                         leftIcon={"user"}
//                         onChangeText={(text) => handleChange("driver_middle_name", text)}
//                         value={postData.driver_middle_name}
//                     />
//                     <InputWithIcon
//                         label={"Driver Last Name"}
//                         placeholder={"Enter Your Last Name"}
//                         leftIcon={"user"}
//                         onChangeText={(text) => handleChange("driver_last_name", text)}
//                         value={postData.driver_last_name}
//                     />
//                     <InputWithIcon
//                         label={"Driver Phone No"}
//                         placeholder={"Enter Your Phone Number"}
//                         leftIcon={"call"}
//                         keyboardType={'numeric'}
//                         maxLength={10}
//                         onChangeText={(text) => handleChange("stripe_phone", text)}
//                         value={postData.stripe_phone}
//                     />
//                     <InputWithIcon
//                         label={"Driving license"}
//                         placeholder={"Enter Your driving license"}
//                         leftIcon={"license1"}
//                         onChangeText={(text) => handleChange("driver_license", text)}
//                         value={postData.driver_license}
//                     />

//                     <InputWithIcon
//                         label={"Stripe Id"}
//                         placeholder={"Enter Your Stripe Id"}
//                         leftIcon={"wallet1"}
//                         // keyboardType={'numeric'}
//                         // maxLength={5}
//                         onChangeText={(text) => handleChange("stripe_id", text)}
//                         value={postData.stripe_id}
//                     />
//                     <InputWithIcon
//                         label={"Stripe Email"}
//                         placeholder={"Enter Your Stripe Email"}
//                         leftIcon={"email"}
//                         onChangeText={(text) => handleChange("stripe_email", text)}
//                         value={postData.stripe_email}
//                     />


//                     <View style={styles.btnRow}>
//                         <Button1
//                             backgroundColor={COLORS.black}
//                             textColor={COLORS.white}
//                             onPress={() => handleSubmit()}
//                         >Update</Button1>
//                         <Button1
//                             onPress={() => navigation.goBack()}
//                             style={{ borderColor: "#E1E1E1" }}
//                         >Cancel</Button1>
//                     </View>
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }

// const mapStateToProps = (state) => ({
//     loading: state.auth.loading,
//     userData: state.auth.userData,
// })

// const mapDispatchToProps = {
//     UpdateHostProfileApi,
//     GetUserDataApi,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(EditHostProfile)


// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

const EditHostProfile = () => {
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        Example of Image Picker in React Native
      </Text>
      <View style={styles.container}>
        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        /> */}
        <Image
          source={{uri: filePath.uri}}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>{filePath.uri}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>
            Launch Camera for Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('video')}>
          <Text style={styles.textStyle}>
            Launch Camera for Video
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('video')}>
          <Text style={styles.textStyle}>Choose Video</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditHostProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});