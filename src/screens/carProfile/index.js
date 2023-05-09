import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import Icons from '../../component/atoms/Icons';
import ImagePicker from 'react-native-image-crop-picker';
import ProgressBar from '../../component/atoms/progressBar';
import { RNToasty } from 'react-native-toasty';
import { SaveVendorDataApi } from '../../redux/actions/vendorRegistration';
import { connect } from 'react-redux';


const CarProfile = ({ navigation, route, }) => {
    const [profile, setProfile] = useState()
    //    console.log("data: ", route.params.data)

    const [postData, setPostData] = useState({
        ...route.params.data,
        profile_image: null,
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }


    const handleSubmit = () => {
        // console.log("post data : ", postData)
        navigation.navigate("DriverLicense", { data: postData })
        // if (postData.profile_image) {
        //     navigation.navigate("DriverLicense", { data: postData })
        // } else {
        //     RNToasty.Error({
        //         title: "Please select profile image",
        //         duration: 2
        //     })
        // }
    }

    const selectProfile = async () => {
        console.log("select image")
        ImagePicker.openPicker({
            width: SIZES.width * .9,
            height: SIZES.height * .2,
            cropping: true
        }).then(image => {
            handleChange("profile_image", {
                uri: image.path,
                name: "profile_image.jpeg",
                type: image.mime
            })
            // console.log(image.path)
            setProfile(image.path);
        }).catch((err) => console.log(err));
    };


    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            {/* progress */}
            <ProgressBar
                progress={.27}
                marginLeft={SIZES.width * -.05}
            />

            <View style={styles.contentBox}>
                <Text style={styles.title1}>Profile Photo</Text>

                <View style={styles.box1}>
                    <Text style={styles.subTitle}>Profile Photo</Text>
                    <TouchableOpacity style={styles.profileImgBox}
                        onPress={selectProfile}
                    >
                        {profile ?
                            <Image
                                source={{ uri: profile }}
                                style={styles.profileImg}
                                resizeMode={"contain"}
                            />
                            :
                            <>
                                <Icons
                                    name={"cloud"}
                                    size={30}
                                    color={"#59595A"}
                                />
                                <Text style={styles.text1}>Drag and drop a file here or click</Text>
                            </>
                        }
                    </TouchableOpacity>
                    <Text style={styles.redText}>( Profile photo will help your customer to identify you )</Text>
                    <View style={styles.btnRow}>
                        <Button1
                            onPress={() => navigation.goBack()}
                        >Back</Button1>
                        <Button1
                            backgroundColor={COLORS.black}
                            textColor={COLORS.white}
                            onPress={handleSubmit}
                        >Next</Button1>
                    </View>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    SaveVendorDataApi
}

export default connect(mapStateToProps, mapDispatchToProps)(CarProfile)