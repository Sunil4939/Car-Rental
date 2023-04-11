import { View, Text, StatusBar, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import InputWithLabel from '../../component/atoms/inputs/InputWithLabel';
import InputWithLabel1 from '../../component/atoms/inputs/inputWithLabel1';
import Button1 from '../../component/atoms/buttons/Button1';
import Dropdown from '../../component/atoms/dropdown';
import Header from '../../component/atoms/Header';
import ProgressBar from '../../component/atoms/progressBar';
import { connect } from 'react-redux';
import Loading from '../../component/atoms/Loading'
import { GetDistanceUnitApi, GetPriceListApi, GetVendorApi } from '../../redux/actions/vendorGetApi';
import { RNToasty } from 'react-native-toasty';


const YourCar = ({ navigation, loading, GetDistanceUnitApi, GetPriceListApi, countries, currencies, fuelList, distanceList, transmissionList, priceList }) => {

    const country = ["Select your country", ...(countries ? Object.keys(countries) : null)]
    const currency = ["Select currency", ...(currencies ? Object.keys(currencies) : null)]
    const price = priceList && Object.keys(priceList)
    const distance = distanceList && Object.keys(distanceList)
    const transmission = ["Select an option ", ...transmissionList]
    const fuel = ["Select Fuel", ...fuelList]
    let year = ["Select build year", 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]

    // const handleYear = () => {
    //     for (let i = 1990; i <= 2023; i++) {
    //         year.push(i)
    //     }
    // }

    useEffect(() => {
        GetPriceListApi()
        GetDistanceUnitApi()
    }, [])

    const [postData, setPostData] = useState({
        location: null,
        code: "",
        country_id: null,
        registration_number: "",
        brand: null,
        // email: null,
        build_year: null,
        odometer: null,
        transmission: null,
        color: null,
        currency_id: null,
        price: "",
        additional_price: "",
        distance: null,
        name: null,
        number_plate: null,
        seat: null,
        fuel: null,
        airconditioned: null,
    })
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const handleSubmit = () => {
        // console.log("post data : ", postData)
        if (postData.location && postData.code && postData.country_id && postData.registration_number &&
            postData.brand && postData.name && postData.number_plate && postData.currency_id && postData.price
            && postData.distance && postData.additional_price) {
            navigation.navigate("CarProfile", { data: postData })
        } else {
            RNToasty.Error({
                title: "Please fill all required fields",
                duration: 2
            })
        }
    }



    return (
        <>
            {loading ?
                <Loading />
                :

                <View style={styles.container}>
                    <StatusBar
                        backgroundColor={COLORS.light}
                        barStyle="dark-content"
                    />
                    {/* header */}
                    <Header />

                    <ScrollView
                        keyboardShouldPersistTaps={'handled'}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ alignItems: 'center' }}>
                            {/* progress */}
                            <ProgressBar
                                progress={.18}
                                marginLeft={SIZES.width * -.02}
                            />

                            <View style={styles.contentBox}>
                                <Text style={styles.title1}>Your Car</Text>
                                <View style={styles.formContainer}>
                                    <InputWithLabel
                                        label={"Your Car Location"}
                                        placeholder={"Enter your address"}
                                        value={postData.location}
                                        onChangeText={(text) => handleChange("location", text)}
                                    />
                                    <InputWithLabel
                                        label={"Pincode"}
                                        placeholder={"Enter your pincode"}
                                        keyboardType={"numeric"}
                                        maxLength={6}
                                        value={String(postData.code)}
                                        onChangeText={(text) => handleChange("code", Number(text))}
                                    />
                                    <Dropdown
                                        data={country}
                                        label={"Country"}
                                        onChangeText={(key, index) => handleChange("country_id", countries?.[key])}
                                    />
                                    <InputWithLabel
                                        label={"Registration number/VIN"}
                                        placeholder={"Enter your vin number"}
                                        value={postData.registration_number}
                                        onChangeText={(text) => handleChange("registration_number", text)}
                                    />
                                    <InputWithLabel
                                        label={"Brand name"}
                                        placeholder={"Brand name"}
                                        value={postData.brand}
                                        onChangeText={(text) => handleChange("brand", text)}
                                    />
                                    <InputWithLabel
                                        label={"Car Name/model"}
                                        placeholder={"Car Name/model"}
                                        value={postData.name}
                                        onChangeText={(text) => handleChange("name", text)}
                                    />
                                    <InputWithLabel
                                        label={"Car Number"}
                                        placeholder={"Car Number"}
                                        value={postData.number_plate}
                                        onChangeText={(text) => handleChange("number_plate", text)}
                                    />
                                    <Dropdown
                                        data={year}
                                        label={"Build Year"}
                                        required={false}
                                        value={postData.build_year}
                                        onChangeText={(text) => handleChange("build_year", Number(text))}
                                    />
                                    <InputWithLabel
                                        label={"Odometer"}
                                        placeholder={"Odometer"}
                                        required={false}
                                        value={postData.odometer}
                                        onChangeText={(text) => handleChange("odometer", text)}
                                    />
                                    <Dropdown
                                        data={transmission}
                                        label={"Transmission"}
                                        required={false}
                                        onChangeText={(text) => handleChange("transmission", text)}
                                    />
                                    <InputWithLabel
                                        label={"Color"}
                                        placeholder={"Color"}
                                        required={false}
                                        value={postData.color}
                                        onChangeText={(text) => handleChange("color", text)}
                                    />
                                    <InputWithLabel
                                        label={"Air Conditioner"}
                                        placeholder={"Yes"}
                                        required={false}
                                        value={postData.airconditioned}
                                        onChangeText={(text) => handleChange("airconditioned", text)}
                                    />
                                    <InputWithLabel
                                        label={"Seat"}
                                        placeholder={"4 or 5"}
                                        keyboardType={"numeric"}
                                        required={false}
                                        value={postData.seat}
                                        onChangeText={(text) => handleChange("seat", Number(text))}
                                    />
                                    <Dropdown
                                        data={fuel}
                                        label={"Fuel/Engine"}
                                        required={false}
                                        value={postData.fuel}
                                        onChangeText={(text) => handleChange("fuel", text)}
                                    />
                                    <Dropdown
                                        data={currency}
                                        label={"Currency"}
                                        value={postData.currency_id}
                                        onChangeText={(key, index) => handleChange("currency_id", currencies?.[key])}
                                    />

                                    <InputWithLabel1
                                        label={"Price"}
                                        placeholder={"Price"}
                                        keyboardType={"numeric"}
                                        value={String(postData.price)}
                                        data={price}
                                        onChangeText={(text) => handleChange("price", Number(text))}
                                    />
                                    <InputWithLabel
                                        label={"Additional Price"}
                                        placeholder={"Additional Price"}
                                        value={String(postData.additional_price)}
                                        keyboardType={"numeric"}
                                        onChangeText={(text) => handleChange("additional_price", Number(text))}
                                    />
                                    <InputWithLabel1
                                        label={"Allowed Distance"}
                                        placeholder={"Distance"}
                                        keyboardType={"numeric"}
                                        value={postData.distance}
                                        data={distance}
                                        onChangeText={(text) => handleChange("distance", text)}
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

            }
        </>
    )
}

const mapStateToProps = (state) => ({
    loading: state.getVendor.loading,
    countries: state.getVendor.countries,
    currencies: state.getVendor.currencies,
    transmissionList: state.getVendor.transmissionList,
    priceList: state.getVendor.priceList,
    distanceList: state.getVendor.distanceList,
    fuelList: state.getVendor.fuelList,
})

const mapDispatchToProps = {
    GetPriceListApi,
    GetDistanceUnitApi
}

export default connect(mapStateToProps, mapDispatchToProps)(YourCar)