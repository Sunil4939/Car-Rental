import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, Platform } from 'react-native'
import React from 'react'
import styles from './styles';
import Icons from '../../component/atoms/Icons';
import { COLORS, SIZES, images } from '../../constants';
import ImageCropPicker from 'react-native-image-crop-picker';
import { RNToasty } from 'react-native-toasty';
import InputWithIcon from '../../component/atoms/inputs/InputWithIcon';
import Button1 from '../../component/atoms/buttons/Button1';
import { useState } from 'react';
import { connect } from 'react-redux';
import { GetHostDataApi, GetUserDataApi, UpdateHostProfileApi, UpdateUserApi } from '../../redux/actions/authAction';
import { useEffect } from 'react';
import { http2 } from '../../services/api';
import Loading1 from '../../component/atoms/Loading/Loading1';



const EditHostProfile = ({ navigation, UpdateHostProfileApi, GetUserDataApi, loading, GetHostDataApi, userData, hostData }) => {
    const [profileImage, setProfileImage] = useState(images.profile1)

    // console.log("hostData data : ", hostData)
    // console.log("hsdof image ; ", hostData && hostData.profile_image)

    useEffect(() => {
        GetHostDataApi()
    }, [])

    // useEffect(() => { 
    //   setPostData({
    //     ...hostData 
    //   })
    //   setProfileImage(userData && userData.profile && {uri: http2 + userData.profile_image})
    // }, [])

    const [postData, setPostData] = useState({
        driver_first_name: null,
        driver_middle_name: null,
        driver_last_name: null,
        driver_license: null,
        stripe_id: null,
        stripe_email: null,
        stripe_phone: null,
        profile_image: null,
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    useEffect(() => {
        if (hostData) {
            setPostData({
                "driver_first_name": hostData.driver_first_name,
                "driver_middle_name": hostData.driver_middle_name,
                "driver_last_name": hostData.driver_last_name,
                "stripe_id": hostData.stripe_id,
                "stripe_email": hostData.stripe_email,
                "stripe_phone": hostData.stripe_phone,
                "profile_image": hostData && hostData.profile_image && { uri: http2 + hostData.profile_image, name: "profile_image.jpg", type: "image/jpg"},
                "driver_license": hostData.driver_license,
            })
            setProfileImage(hostData.profile_image ? { uri: http2 + hostData.profile_image } : images.profile1)
        }
    }, [hostData])

    const handleSubmit = () => {
        // UpdateHostProfileApi(postData, navigation)
        if (postData.driver_first_name && postData.stripe_phone && postData.driver_license) {
            UpdateHostProfileApi(postData, navigation)
            // console.log("postdata: ", postData)
        } else {
            RNToasty.Error({
                title: "Please fill  driver first name, phone no and license",
                duration: 2
            })
        }
    }

    const selectProfileImage = async () => {
        console.log("select image")
        ImageCropPicker.openPicker({
            width: SIZES.width * .3,
            height: SIZES.height * .148,
            cropping: true,
        }).then(image => {
            handleChange("profile_image", {
                uri: image.path,
                // name: "profile_image.jpeg",
                name: image.filename || Date.now() + "-" + image.path.slice(-10),
                type: image.mime
            })
            console.log(image.path)

            setProfileImage({ uri: image.path });
        }).catch((err) => console.log(err));
    };

    console.log("psojfd rf : ", postData)

    return (
        <>
            {
                loading ?
                    <Loading1 />
                    :
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
                                        <Image  source={profileImage} style={styles.profileImage} resizeMode='contain' />
                                        <View style={styles.editBtn}>
                                            <Icons name={"edit"} size={20} color={"#232434"} style={styles.edit} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View style={styles.form}>
                                <InputWithIcon
                                    label={"Driver First Name"}
                                    placeholder={"Enter Your First Name"}
                                    leftIcon={"user"}
                                    onChangeText={(text) => handleChange("driver_first_name", text)}
                                    value={postData.driver_first_name}
                                />
                                <InputWithIcon
                                    label={"Driver Middle Name"}
                                    placeholder={"Enter Your Middle Name"}
                                    leftIcon={"user"}
                                    onChangeText={(text) => handleChange("driver_middle_name", text)}
                                    value={postData.driver_middle_name}
                                />
                                <InputWithIcon
                                    label={"Driver Last Name"}
                                    placeholder={"Enter Your Last Name"}
                                    leftIcon={"user"}
                                    onChangeText={(text) => handleChange("driver_last_name", text)}
                                    value={postData.driver_last_name}
                                />
                                <InputWithIcon
                                    label={"Driver Phone No"}
                                    placeholder={"Enter Your Phone Number"}
                                    leftIcon={"call"}
                                    keyboardType={'numeric'}
                                    maxLength={10}
                                    onChangeText={(text) => handleChange("stripe_phone", Number(text))}
                                    value={postData.stripe_phone ? String(postData.stripe_phone) : ''}
                                />
                                <InputWithIcon
                                    label={"Driving license"}
                                    placeholder={"Enter Your driving license"}
                                    leftIcon={"license1"}
                                    onChangeText={(text) => handleChange("driver_license", text)}
                                    value={postData.driver_license}
                                />

                                <InputWithIcon
                                    label={"Stripe Id"}
                                    placeholder={"Enter Your Stripe Id"}
                                    leftIcon={"wallet1"}
                                    keyboardType={'numeric'}
                                    // maxLength={5}
                                    onChangeText={(text) => handleChange("stripe_id", Number(text))}
                                    value={postData.stripe_id ? String(postData.stripe_id) : ''}
                                />
                                <InputWithIcon
                                    label={"Stripe Email"}
                                    placeholder={"Enter Your Stripe Email"}
                                    leftIcon={"email"}
                                    onChangeText={(text) => handleChange("stripe_email", text)}
                                    value={postData.stripe_email}
                                />


                                <View style={styles.btnRow}>
                                    <Button1
                                        backgroundColor={COLORS.black}
                                        textColor={COLORS.white}
                                        onPress={() => handleSubmit()}
                                    >Update</Button1>
                                    <Button1
                                        onPress={() => navigation.goBack()}
                                        style={{ borderColor: "#E1E1E1" }}
                                    >Cancel</Button1>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    userData: state.auth.userData,
    hostData: state.auth.hostData,
})

const mapDispatchToProps = {
    UpdateHostProfileApi,
    GetUserDataApi,
    GetHostDataApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHostProfile)

