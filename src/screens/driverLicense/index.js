import { View, Text, StatusBar, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import InputWithLabel from '../../component/atoms/inputs/InputWithLabel';
import Button1 from '../../component/atoms/buttons/Button1';
import Dropdown from '../../component/atoms/dropdown';
import ProgressBar from '../../component/atoms/progressBar';
import DatePicker from '../../component/atoms/datePicker';
import { connect } from 'react-redux';
import { RNToasty } from 'react-native-toasty';
import { SaveVendorDataApi } from '../../redux/actions/vendorRegistration';


const DriverLicense = ({ navigation, route, countries, SaveVendorDataApi }) => {
    // console.log("data: ", route.params.data)
    const country = ["Select your country", ...(countries ? Object.keys(countries) : null)]

    const [postData, setPostData] = useState({
        ...route.params.data,
        state: null,
        driver_first_name: "",
        driver_middle_name: null,
        driver_last_name: null,
        driver_license: "",
        driver_expiration_date: null,
        driver_date_of_birth: null,
    })
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }
    const handleSubmit = () => {
        // console.log("post data : ", postData)
        if (postData.driver_first_name && postData.driver_expiration_date && postData.driver_date_of_birth && postData.driver_license) {
            // SaveVendorDataApi(postData)
            navigation.navigate("Goals", { data: postData })
        } else {
            RNToasty.Error({
                title: "Please fill all required fields",
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
            <ScrollView
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: 'center' }}>
                    {/* progress */}
                    <ProgressBar
                        progress={.36}
                        marginLeft={SIZES.width * -.07}
                    />

                    <View style={styles.contentBox}>
                        <Text style={styles.title1}>Driver’s License</Text>
                        <View style={styles.formContainer}>
                            {/* <Dropdown
                                data={country}
                                label={"Country"}
                                onChangeText={(key, index) => handleChange("country_id", countries?.[key])}
                            /> */}
                            <InputWithLabel
                                label={"State"}
                                placeholder={"Enter your state"}
                                required={false}
                                value={postData.state}
                                onChangeText={(text) => handleChange("state", text)}
                            />
                            <InputWithLabel
                                label={"Driver’s license number"}
                                placeholder={"Enter your license number"}
                                value={postData.driver_license}
                                onChangeText={(text) => handleChange("driver_license", text)}
                            />
                            <Text style={styles.redText}>Enter your name exactly as it appears on your driver’s license.</Text>
                            <InputWithLabel
                                label={"First Name"}
                                placeholder={"Enter First Name"}
                                value={postData.driver_first_name}
                                onChangeText={(text) => handleChange("driver_first_name", text)}
                            />

                            <InputWithLabel
                                label={"Middle Name"}
                                placeholder={"Enter Middle Name"}
                                value={postData.driver_middle_name}
                                required={false}
                                onChangeText={(text) => handleChange("driver_middle_name", text)}
                            />
                            <InputWithLabel
                                label={"Last Name"}
                                placeholder={"Enter Last Name"}
                                value={postData.driver_last_name}
                                required={false}
                                onChangeText={(text) => handleChange("driver_last_name", text)}
                            />
                            <DatePicker
                                label={"Expiration date"}
                                placeholder={"Select date"}
                                onChangeText={(value) => handleChange("driver_expiration_date", value)}
                            />
                            <DatePicker
                                label={"Date of birth"}
                                placeholder={"Select date of birth"}
                                onChangeText={(value) => handleChange("driver_date_of_birth", value)}
                            />


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
    )
}

const mapStateToProps = (state) => ({
    loading: state.getVendor.loading,
    countries: state.getVendor.countries,
})

const mapDispatchToProps = {
    SaveVendorDataApi
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverLicense)