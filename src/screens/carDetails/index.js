import { View, Text, StatusBar, TouchableOpacity, FlatList, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import InputWithLabel from '../../component/atoms/inputs/InputWithLabel';
import Button1 from '../../component/atoms/buttons/Button1';
import CheckBox from '@react-native-community/checkbox';
import ProgressBar from '../../component/atoms/progressBar';
import Icons from '../../component/atoms/Icons';
import { connect } from 'react-redux';
import { GetFeaturesApi } from '../../redux/actions/vendorGetApi';
import { useEffect } from 'react';
import { RNToasty } from 'react-native-toasty';
import { SaveVendorDataApi } from '../../redux/actions/vendorRegistration';
import Loading1 from '../../component/atoms/Loading/Loading1';



const CarDetails = ({ navigation, route, loading, SaveVendorDataApi, features, GetFeaturesApi }) => {
    // const features = ["All-wheel drive", "Android auto", "Apple CarPlay", "AUX input", "Backup camera", "Bike rack", "Blind spot warning", "Bluetooth", "Child seat", "Convertible", "GPS",
    //     "Heated Seats", "Keyless entry", "Pet friendly", "Snow tries of chains", "Ski rack ", "Sunroof", "Tool pass", "USB Charger", "USB input", "Whellchair accessible"]
    // console.log("data: ", route.params.data)
    const [postData, setPostData] = useState({
        ...route.params.data,
        license_plat_number: null,
        features: []
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }


    const handleSubmit = () => {
        // console.log("post data : ", postData)
        if (postData.license_plat_number) {
            // SaveVendorDataApi(postData)
            navigation.navigate("CarPhotos", { data: postData })
        } else {
            RNToasty.Error({
                title: "Please fill all required fields",
                duration: 2
            })
        }
    }
    const [select, setSelect] = useState([])
    const handleSelect = (value) => {
        // let arr = [...select]
        let arr = [...postData.features]
        // console.log("arrrrr", arr.indexOf(value))
        if (arr.includes(value)) {
            arr.splice(select.indexOf(value), 1)
        } else {
            arr.push(value)
           
        }
        handleChange("features", arr)
        setSelect(arr)
        // console.log('select : ', arr)
    }
    useEffect(() => {
        GetFeaturesApi()
    }, [])


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
                    <ScrollView keyboardShouldPersistTaps={'handled'}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ alignItems: 'center' }}>
                            {/* progress */}
                            <ProgressBar
                                progress={.66}
                                marginLeft={SIZES.width * -.07}
                            />

                            <View style={styles.contentBox}>
                                <Text style={{ ...styles.title1, marginBottom: SIZES.height * .02, }}>Car Details</Text>
                                <InputWithLabel
                                    label={"License plat number"}
                                    placeholder={"Plat number"}
                                    value={postData.license_plat_number}
                                    onChangeText={(text) => handleChange("license_plat_number", text)}
                                />
                                <Text style={{ ...styles.redText, marginTop: SIZES.height * -.01, }}>You're license information won’t be publicity visible</Text>
                                <View>
                                    <Text style={styles.title}>Car features</Text>
                                    <View style={styles.featureContainer}>
                                        {features && features.map((item, index) => (
                                            <View key={index} style={styles.featureRow}>
                                                <CheckBox
                                                    disabled={false}
                                                    value={select.includes(item.id)}
                                                    tintColors={{ true: '#0F56CC', false: 'black' }}
                                                    onValueChange={() => handleSelect(item.id)}
                                                // style={styles.checkBox}
                                                />
                                                <Text style={styles.feature}>{item.feature}</Text>
                                            </View>
                                        ))}
                                    </View>
                                    <Text style={styles.redText}>Apple Car Play is registered transmission of Apple inc.{'\n'} Android is a tradmeter of google LIC.</Text>


                                    <Text style={styles.title3}>Description</Text>
                                    <Text style={styles.text2}>Tell guests what make your car unique and why they'll love driving it.</Text>
                                    <View style={styles.box1}>
                                        <View style={styles.topRow}>
                                            <Text style={styles.title2}>Trips to get more booking</Text>
                                        </View>
                                        <View style={styles.content}>
                                            <Icons
                                                name={"info"}
                                                size={40}
                                                color={COLORS.black}
                                                style={{ marginRight: 10, }}
                                            />
                                            <Text style={styles.text1}>Listing with description of at least 100 words are up to three times more likely to get booked</Text>

                                        </View>
                                    </View>

                                    <TextInput
                                        style={styles.input}
                                        numberOfLines={10}
                                        multiline={true}
                                    />
                                    <Text style={{ ...styles.text1, marginTop: 5 }}>50 words Minimum</Text>
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
                    </ScrollView>
                </View>
            }
        </>

    )
}

const mapStateToProps = (state) => ({
    loading: state.getVendor.loading,
    features: state.getVendor.features,
})

const mapDispatchToProps = {
    GetFeaturesApi,
    SaveVendorDataApi
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails)