import { View, Text, StatusBar, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import ProgressBar from '../../component/atoms/progressBar';
import CheckBox from '@react-native-community/checkbox';
import { SaveVendorDataApi } from '../../redux/actions/vendorRegistration';
import { RNToasty } from 'react-native-toasty';
import { connect } from 'react-redux';


const SubmitList = ({ navigation, route, SaveVendorDataApi }) => {
    const [checked, setChecked] = useState(false)
    // console.log("data: ", route.params.data)
    const postData = {
      
        // ...route.params.data,
        // profile_image: {"name": "profile_image.jpeg", "type": "image/jpeg", "uri": "file:///storage/emulated/0/Android/data/com.car/files/Pictures/32027ad5-4b99-43b4-b801-174a53f0b462.jpg"},
        location: "Rajasthan",
        code: 324006,
        country_id: 102,
        registration_number: "registration_number123",
        brand: "brand_abcknvkndknksfnr",
        build_year: 2016,
        // odometer: "odometer_abc",
        // transmission: "manual",
        // color:"red",
        currency_id: 102,
        price: 120000,
        additional_price: 150000,
        distance: "1.5",
        name: "swift",
        number_plate: "number_plate123",
        registration_date: "2023-03-14",
        driver_first_name: "drivername",
        driver_license: "driverlicense",
        driver_expiration_date: "2023-03-15",
        driver_date_of_birth: "1996-02-15",
        features: [1,6,8,7,9],
    }
    const handleSubmit = () => {
        // SaveVendorDataApi(postData, navigation)
        // console.log("post data : ", postData)
        if (route.params.data && checked) {
            // SaveVendorDataApi(postData, navigation)
            SaveVendorDataApi(route.params.data, navigation)
        } else {
            RNToasty.Error({
                title: "Please accept terms & conditions",
                duration: 2
            })
        } 
    }
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            {/* progress */}
            <ProgressBar
                progress={1}
            // marginLeft={SIZES.width * -.09}
            />

            <View style={styles.contentBox}>
                <Text style={styles.title1}>Submit your listing</Text>
                <Text style={styles.text1}>Up next, you’ll be able to edit your pricing,
                    availability, locations, and preference.</Text>

                <View style={styles.row}>
                    <CheckBox
                        disabled={false}
                        value={checked}
                        tintColors={{ true: '#0F56CC', false: 'black' }}
                        onValueChange={() => setChecked(!checked)}
                    // style={styles.checkBox}
                    />
                    <Text style={styles.text}>By clicking submit below, you agree to our
                        terms and conditions.</Text>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={[styles.blueText, { position: 'absolute', left: 0 }]}>Terms and Conditions</Text>
                </TouchableOpacity>

                <View style={styles.btnRow}>
                    <Button1
                        onPress={() => navigation.goBack()}
                    >Back</Button1>
                    <Button1
                        backgroundColor={COLORS.black}
                        textColor={COLORS.white}
                        onPress={handleSubmit}
                    >Submit</Button1>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    SaveVendorDataApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitList)