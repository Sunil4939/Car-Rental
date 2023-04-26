import { View, Text, StatusBar, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import Header from '../../component/atoms/Header';
import Icons from '../../component/atoms/Icons';
import ImagePicker from 'react-native-image-crop-picker';
import InputWithLabel from '../../component/atoms/inputs/InputWithLabel';
import Dropdown from '../../component/atoms/dropdown';
import InputWithLabel1 from '../../component/atoms/inputs/inputWithLabel1';
import { connect } from 'react-redux';
import { GetDistanceUnitApi, GetPriceListApi, GetVendorApi } from '../../redux/actions/vendorGetApi';
import { UpdateCarDataApi } from '../../redux/actions/vendorRegistration';
import { useEffect } from 'react';
import { DeleteCarImageApi } from '../../redux/actions/productAction';



const Photo = ({ label, onChangeValue, imageName, deletePress }) => {

    const [photo, setPhoto] = useState()
    const selectPhoto = async () => {
        console.log("select image")
        ImagePicker.openPicker({
            width: SIZES.width * .42,
            height: SIZES.height * .2,
            cropping: true
        }).then(image => {
            onChangeValue && onChangeValue({
                uri: image.path,
                name: `${imageName}.jpeg`,
                type: image.mime
            })
            // console.log(image)
            setPhoto(image.path);
            // onChangeValue(onChangeValue ? image.path : null)
        }).catch((err) => console.log(err));
    };
    return (
        <View style={styles.box1}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.profileImgBox}
            // onPress={selectPhoto}
            >
                {photo &&
                    <TouchableOpacity style={styles.del_btn}
                    onPress={deletePress}
                    >
                        <Image source={icons.del} style={styles.del} resizeMode='contain' />
                    </TouchableOpacity>
                }
                {photo ?
                    <Image
                        source={{ uri: photo }}
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

        </View>
    )
}

const UpdateCar = ({ navigation,DeleteCarImageApi, route, GetPriceListApi, GetVendorApi, UpdateCarDataApi, GetDistanceUnitApi, countries, fuelList, currencies, priceList, distanceList, transmissionList }) => {
    // console.log("data: ", route.params.data)

    const country = ["Select your country", ...(countries ? Object.keys(countries) : null)]
    const currency = ["Select currency", ...(currencies ? Object.keys(currencies) : null)]
    const price = priceList && Object.keys(priceList)
    const distance = distanceList && Object.keys(distanceList)
    const transmission = ["Select an option ", ...transmissionList]
    const fuel = ["Select Fuel", ...fuelList]
    let year = ["Select build year", 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    const colors = ["white", "red", "orange", "pink", "black"]

    const data = route.params && route.params.carData
    // console.log(data)

    useEffect(() => {
        GetVendorApi()
        GetDistanceUnitApi()
        GetPriceListApi()
    }, [])

    const [postData, setPostData] = useState({
        location: data && data.location,
        code: "",
        country_id: null,
        registration_number: null,
        brand: null,
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
        front: null,
        back: null,
        left: null,
        right: null,
        front_interior: null,
        back_interior: null,
        other: null,
    })

    useEffect(() => {

        setPostData({
            ...route.params && route.params.carData
        })
    }, [])
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }


    const handleSubmit = () => {
        // UpdateCarDataApi(data.id, postdata)
        // console.log("post data : ", data.id, postData)
        UpdateCarDataApi(data.id, postData, navigation)
        // navigation.navigate("PayoutStripe", { data: postData })
    }
    return (

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
                    <View style={styles.topBox}>
                        <View style={styles.box}>
                            <Text style={styles.title}>Update Car</Text>
                        </View>
                    </View>

                    <View style={styles.contentBox}>
                        <Text style={{ ...styles.title1, marginBottom: SIZES.height * .02, }}>Car Images</Text>

                        <Text style={styles.text}>High quality photos increase your earning potential by
                            attracting more guests. upload at least 6 photos,
                            including multiple exterior angles with the whole car
                            in frame, as well as interior shots. learn more here</Text>
                        <Text style={styles.redText}>Image will show as title image on search. Required*</Text>

                        <View style={styles.photoBox}>
                            <Photo
                                label={"Front"}
                                imageName={"front"}
                                onChangeValue={(value) => handleChange("front", value)}
                                // deletePress={() => DeleteCarImageApi(data.image.id, hostId)}
                            />
                            <Photo
                                label={"Back"}
                                imageName={"back"}
                                onChangeValue={(value) => handleChange("back", value)}
                            />
                            <Photo
                                label={"Left"}
                                imageName={"left"}
                                onChangeValue={(value) => handleChange("left", value)}
                            />
                            <Photo
                                label={"Right"}
                                imageName={"right"}
                                onChangeValue={(value) => handleChange("right", value)}
                            />
                            <Photo
                                label={"Front Interior"}
                                imageName={"front_interior"}
                                onChangeValue={(value) => handleChange("front_interior", value)}
                            />
                            <Photo
                                label={"Back Interior"}
                                imageName={"back_interior"}
                                onChangeValue={(value) => handleChange("back_interior", value)}
                            />
                            <Photo
                                label={"Other Images"}
                                imageName={"other"}
                                onChangeValue={(value) => handleChange("other", value)}
                            />
                        </View>


                        <View>
                            <Text style={styles.title2}>Basic Details</Text>
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
                            <Dropdown
                                data={year}
                                label={"Build Year"}
                                required={false}
                                value={postData.build_year}
                                onChangeText={(text) => handleChange("build_year", Number(text))}
                            />
                            <InputWithLabel
                                label={"Color"}
                                placeholder={"Color"}
                                required={false}
                                value={postData.color}
                                onChangeText={(text) => handleChange("color", text)}
                            />
                            {/* <Dropdown
                                data={colors}
                                label={"Color"}
                                required={false}
                                value={postData.build_year}
                                onChangeText={(text) => handleChange("build_year", Number(text))}
                            /> */}

                            {/* <View>
                                <Text>Description</Text>
                                <TextInput
                                    style={styles.input}
                                    numberOfLines={10}
                                    multiline={true}
                                />
                            </View> */}
                        </View>

                        <View>
                            <Text style={styles.title2}>Other Details</Text>
                            <InputWithLabel
                                label={"Registration number/VIN"}
                                placeholder={"Enter your vin number"}
                                value={postData.registration_number}
                                onChangeText={(text) => handleChange("registration_number", text)}
                            />


                            {/* <Dropdown
                                data={year}
                                label={"Build Year"}
                                required={false}
                                value={postData.build_year}
                                onChangeText={(text) => handleChange("build_year", Number(text))}
                            /> */}
                            <Dropdown
                                data={transmission}
                                label={"Transmission"}
                                required={false}
                                // value={postData.transmission}
                                onChangeText={(text) => handleChange("transmission", text)}
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
                                value={postData.seat ? String(postData.seat) : ''}
                                onChangeText={(text) => handleChange("seat", Number(text))}
                            />
                            <Dropdown
                                data={fuel}
                                label={"Fuel/Engine"}
                                required={false}
                                value={postData.fuel}
                                onChangeText={(text) => handleChange("fuel", text)}
                            />
                        </View>

                        <View>
                            <Text style={styles.title2}>Price & Location</Text>
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
                                value={postData.code ? String(postData.code) : ''}
                                onChangeText={(text) => handleChange("code", Number(text))}
                            />
                            <Dropdown
                                data={country}
                                label={"Country"}
                                onChangeText={(key, index) => handleChange("country_id", countries?.[key])}
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
                                value={postData.price ? String(postData.price) : ''}
                                data={price}
                                onChangeText={(text) => handleChange("price", Number(text))}
                            />
                            <InputWithLabel
                                label={"Additional Price"}
                                placeholder={"Additional Price"}
                                value={postData.additional_price ? String(postData.additional_price) : ''}
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
                        </View>
                        <View style={styles.btnRow}>

                            <Button1
                                backgroundColor={COLORS.black}
                                textColor={COLORS.white}
                                onPress={handleSubmit}
                            >Update</Button1>
                            <Button1
                                onPress={() => navigation.goBack()}
                            >Cancel</Button1>
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
    currencies: state.getVendor.currencies,
    transmissionList: state.getVendor.transmissionList,
    priceList: state.getVendor.priceList,
    distanceList: state.getVendor.distanceList,
    fuelList: state.getVendor.fuelList,
})

const mapDispatchToProps = {
    GetPriceListApi,
    GetDistanceUnitApi,
    UpdateCarDataApi,
    GetVendorApi
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateCar);