import { View, Text, StatusBar, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import Icons from '../../component/atoms/Icons';
import ImagePicker from 'react-native-image-crop-picker';
import InputWithLabel from '../../component/atoms/inputs/InputWithLabel';
import Dropdown from '../../component/atoms/dropdown';
import InputWithLabel1 from '../../component/atoms/inputs/inputWithLabel1';
import { connect } from 'react-redux';
import { GetDistanceUnitApi, GetPriceListApi, GetVendorApi } from '../../redux/actions/vendorGetApi';
import { DeleteCarDataApi, UpdateCarDataApi, UpdateCarImageApi } from '../../redux/actions/vendorRegistration';
import { useEffect } from 'react';
import Loading1 from '../../component/atoms/Loading/Loading1';
import { http2 } from '../../services/api';
import { DeleteCarImageApi } from '../../redux/actions/productAction';



const Photo = ({ label, onChangeValue, imageName, deletePress, value }) => {

    const [photo, setPhoto] = useState(value && { uri: http2 + value })
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
            setPhoto({ uri: image.path });
            // onChangeValue(onChangeValue ? image.path : null)
        }).catch((err) => console.log(err));
    };
    return (
        <View style={styles.box1}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.profileImgBox}
                onPress={selectPhoto}
            >
                {/* {photo &&
                    <TouchableOpacity style={styles.del_btn}
                        onPress={deletePress}
                    >
                        <Image source={icons.del} style={styles.del} resizeMode='contain' />
                    </TouchableOpacity>
                } */}
                {photo &&
                    <TouchableOpacity style={styles.del_btn}
                    onPress={selectPhoto}
                    >
                        <Icons name={"edit"} size={20} color={COLORS.black} />
                        {/* <Image source={icons.del} style={styles.del} resizeMode='contain' /> */}
                    </TouchableOpacity>
                }
                {photo ?
                    <Image
                        source={photo}
                        style={styles.profileImg}
                        resizeMode={"stretch"}
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

const UpdateCar = ({ navigation, route, GetPriceListApi, UpdateCarImageApi, GetVendorApi, DeleteCarImageApi, UpdateCarDataApi, GetDistanceUnitApi, countries, fuelList, currencies, priceList, distanceList, transmissionList }) => {
    // console.log("data: ", route.params.data)
    const [loading, setLoading] = useState(false)
    const country = ["Select your country", ...(countries ? Object.keys(countries) : null)]
    const currency = ["Select currency", ...(currencies ? Object.keys(currencies) : null)]
    const price = ["Select", ...(priceList ? Object.keys(priceList) : null)]
    const distance = ["Select", ...(distanceList ? Object.keys(distanceList) : null)]
    // const price = priceList && Object.keys(priceList)
    // const distance = distanceList && Object.keys(distanceList)
    const transmission = ["Select an option ", ...transmissionList]
    const fuel = ["Select Fuel", ...fuelList]
    let year = ["Select build year", 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    const colors = ["white", "red", "orange", "pink", "black"]

    const data = route.params && route.params.carData
    const location = route.params && route.params.carData.location
    // console.log("data: ", route.params && route.params.carData)

    useEffect(() => {
        GetVendorApi()
        GetDistanceUnitApi()
        GetPriceListApi()
    }, [])

    const [carImage, setCarImage] = useState({
        front: data && data.image.front,
        back: data && data.image.back,
        left: data && data.image.left,
        right: data && data.image.right,
        front_interior: data && data.image.front_interior,
        back_interior: data && data.image.back_interior,
        other: data && data.image.other,
    })

    const [postData, setPostData] = useState({
        location: location && location.location,
        code: location && location.code,
        country_id: location && location.country_id,
        registration_number: data && data.registration_number,
        brand: data && data.brand,
        build_year: data && data.build_year,
        odometer: data && data.odometer,
        transmission: data && data.transmission,
        color: data && data.color,
        currency_id: location && location.currency_id,
        price: location && location.price,
        additional_price: location && location.additional_price,
        distance: location && location.distance,
        name: data && data.name,
        number_plate: data && data.number_plate,
        seat: data && data.seat,
        fuel: data && data.fuel,
        airconditioned: data && data.airconditioned,
        distance_unit_id: location && location.distance_unit_id,
        price_duration_id: location && location.price_duration_id,
    })
    console.log("distance , price : ", postData.distance_unit_id, postData.price_duration_id)
    // useEffect(() => {
    //     if (data) {
    //         setPostData({
    //             "location": data.location.location,
    //             "code": data.location.code,
    //             "country_id": data.location.country_id,
    //             "registration_number": null,
    //             "brand": data.brand,
    //             "build_year": data.build_year,
    //             "odometer": data.odometer,
    //             "transmission": data.transmission,
    //             "color": data.color,
    //             "currency_id": data.location.currency_id,
    //             "price": data.location.price,
    //             "additional_price": data.location.additional_price,
    //             "distance": data.location.distance,
    //             "name": data.name,
    //             "number_plate": data.number_plate,
    //             "seat": data.seat,
    //             "fuel": data.fuel,
    //             "airconditioned": data.airconditioned,
    //         })
    //     }
    //     setLoading(false)
    // }, [data])
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const handleImage = (name, value) => {
        setCarImage({
            ...carImage,
            [name]: value
        })
    }


    const handleSubmit = () => {
        // UpdateCarDataApi(data.id, {build_year: 2012}, navigation)
        console.log("post data : ", data.id, postData)
        UpdateCarDataApi(data.id, postData, navigation)
        UpdateCarImageApi(data.image.id, data.car_image_id, carImage)
        // navigation.navigate("PayoutStripe", { data: postData })
    }

    // console.log("country : ", currency?.[Object.values(currencies).indexOf(postData.currency_id)])

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
                                        onChangeValue={(value) => handleImage("front", value)}
                                        value={carImage.front}
                                    // deletePress={() => handleImage("front", null)}
                                    // deletePress={() => DeleteCarImageApi(data.image.id, hostId)}
                                    />
                                    <Photo
                                        label={"Back"}
                                        imageName={"back"}
                                        onChangeValue={(value) => handleImage("back", value)}
                                        value={carImage.back}
                                    // deletePress={() => DeleteCarImageApi(data.image.id, hostId)}
                                    />
                                    <Photo
                                        label={"Left"}
                                        imageName={"left"}
                                        onChangeValue={(value) => handleImage("left", value)}
                                        value={carImage.left}
                                    // deletePress={() => DeleteCarImageApi(data.image.id, hostId)}
                                    />
                                    <Photo
                                        label={"Right"}
                                        imageName={"right"}
                                        onChangeValue={(value) => handleImage("right", value)}
                                        value={carImage.right}
                                    // deletePress={() => DeleteCarImageApi(data.image.id, hostId)}
                                    />
                                    <Photo
                                        label={"Front Interior"}
                                        imageName={"front_interior"}
                                        onChangeValue={(value) => handleImage("front_interior", value)}
                                        value={carImage.front_interior}
                                    // deletePress={() => DeleteCarImageApi(data.image.id, hostId)}
                                    />
                                    <Photo
                                        label={"Back Interior"}
                                        imageName={"back_interior"}
                                        onChangeValue={(value) => handleImage("back_interior", value)}
                                        value={carImage.back_interior}
                                    // deletePress={() => DeleteCarImageApi(data.image.id, hostId)}
                                    />
                                    <Photo
                                        label={"Other Images"}
                                        imageName={"other"}
                                        onChangeValue={(value) => handleImage("other", value)}
                                        value={carImage.other}
                                    // deletePress={() => DeleteCarImageApi(data.image.id, hostId)}
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


                                </View>

                                <View>
                                    <Text style={styles.title2}>Other Details</Text>
                                    <InputWithLabel
                                        label={"Registration number/VIN"}
                                        placeholder={"Enter your vin number"}
                                        value={postData.registration_number}
                                        onChangeText={(text) => handleChange("registration_number", text)}
                                    />



                                    <Dropdown
                                        data={transmission}
                                        label={"Transmission"}
                                        required={false}
                                        value={postData.transmission}
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
                                        // value={String(postData.seat)}
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
                                        // value={String(postData.location)}
                                        value={postData.location}
                                        onChangeText={(text) => handleChange("location", text)}
                                    />
                                    <InputWithLabel
                                        label={"Pincode"}
                                        placeholder={"Enter your pincode"}
                                        keyboardType={"numeric"}
                                        maxLength={6}
                                        // value={String(postData.code)}
                                        value={postData.code ? String(postData.code) : ''}
                                        onChangeText={(text) => handleChange("code", Number(text))}
                                    />
                                    <Dropdown
                                        data={country}
                                        label={"Country"}
                                        value={country?.[Object.values(countries).indexOf(postData.country_id) + 1]}
                                        onChangeText={(key, index) => handleChange("country_id", countries?.[key])}
                                    />
                                    <Dropdown
                                        data={currency}
                                        label={"Currency"}
                                        value={currency?.[Object.values(currencies).indexOf(postData.currency_id) + 1]}
                                        onChangeText={(key, index) => handleChange("currency_id", currencies?.[key])}
                                    />

                                    <InputWithLabel1
                                        label={"Price"}
                                        placeholder={"Price"}
                                        keyboardType={"numeric"}
                                        // value={String(postData.price)}
                                        value={postData.price ? String(postData.price) : ''}
                                        data={price}
                                        onChangeText={(text) => handleChange("price", Number(text))}
                                        dropDownValue={postData.price_duration_id}
                                        // onChangeValue={(key, index) => handleChange("price_duration_id", priceList?.[key])}
                                        onChangeValue={(key, index) => console.log("porice : ", priceList?.[key])}
                                    />
                                    <InputWithLabel
                                        label={"Additional Price"}
                                        placeholder={"Additional Price"}
                                        // value={String(postData.additional_price)}
                                        value={postData.additional_price ? String(postData.additional_price) : ''}
                                        keyboardType={"numeric"}
                                        onChangeText={(text) => handleChange("additional_price", Number(text))}
                                    />
                                    <InputWithLabel1
                                        label={"Allowed Distance"}
                                        placeholder={"Distance"}
                                        keyboardType={"numeric"}
                                        value={String(postData.distance)}
                                        data={distance}
                                        onChangeText={(text) => handleChange("distance", text)}
                                        dropDownValue={postData.distance_unit_id}
                                        onChangeValue={(key, index) => handleChange("distance_unit_id", distanceList?.[key])}
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
    GetDistanceUnitApi,
    UpdateCarDataApi,
    GetVendorApi,
    UpdateCarImageApi,
    DeleteCarImageApi,
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateCar);