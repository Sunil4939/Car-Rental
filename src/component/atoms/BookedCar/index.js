import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants'
import Icons from '../Icons'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Modal from 'react-native-modal'
import { UpdatePickupLocation } from '../../../redux/actions/bookingAction'
import Button1 from '../buttons/Button1'
import { RNToasty } from 'react-native-toasty'



const BookedCar = ({ source, carName, brand, car_booking_id,showMark, pick_up_lat, pick_up_lng, description, showCancel, onChangeValue,markPress, showInsurance, insurancePress, showRetryPayment, bookingStatus, showLocation, locationPress, date, bookingId, paymentPress, onPress, cancelPress }) => {

    const dispatch = useDispatch()

    const [isModalVisible, setModalVisible] = useState(false);
    const [postData, setPostData] = useState({
        pick_up_lat: pick_up_lat,
        pick_up_lng: pick_up_lng,
        description: description,
    })


    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
        // onChangeValue && onChangeValue(postData)
    }

    const handleSubmit = () => {
        if (postData.pick_up_lat && postData.pick_up_lng && postData.description) {
            setModalVisible(!isModalVisible)
            dispatch(UpdatePickupLocation(car_booking_id, postData))
        } else {
            RNToasty.Error({
                title: "Please fill all fields",
                duration: 2
            })
        }
    }

    return (
        <TouchableOpacity style={styles.tripBox} onPress={onPress}>

            <View style={styles.textBox}>
                <View style={styles.carImgBox}>
                    <Image source={source} resizeMode="contain" style={styles.carImg} />
                </View>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Brand : </Text>
                        <Text style={styles.text}>{brand ? brand : "Honda"}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Car Name : </Text>
                        <Text style={styles.text}>{carName ? carName : "Blitz"}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Booking Id : </Text>
                        <Text style={styles.text}>{bookingId}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Booking On : </Text>
                        <Text style={styles.text}>{date}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Booking Status : </Text>
                        <Text style={{ ...styles.text, color: bookingStatus == "Cancelled" ? "#FF0000" : bookingStatus == "Pending" ? "#F7C021" : "#00B200" }}>{bookingStatus}</Text>
                    </View>
                </View>

            </View>
            <View style={styles.rightBox}>
                <View style={styles.location_row} >
                    {showCancel &&
                        <TouchableOpacity style={styles.cancel_btn}
                            onPress={cancelPress}
                        >
                            <Icons name={"cancel"} size={25} color={"#F34343"} />
                        </TouchableOpacity>
                    }
                    {showLocation &&
                        <TouchableOpacity style={styles.cancel_btn}
                            onPress={() => setModalVisible(!isModalVisible)}
                        // onPress={locationPress}
                        >
                            <Icons name={"edit-location"} size={25} color={COLORS.black} />
                        </TouchableOpacity>
                    }
                    {showInsurance &&
                        <TouchableOpacity style={styles.cancel_btn}
                            onPress={insurancePress}
                        >
                            <Icons name={"insurance"} size={25}
                            // color={COLORS.black}
                            />
                        </TouchableOpacity>
                    }
                    {showMark &&
                        <TouchableOpacity style={styles.cancel_btn}
                            onPress={markPress}
                        >
                            <Icons name={"checkmark"} size={25}
                            color={"#27ae60"}
                            />
                        </TouchableOpacity>
                    }
                </View>
                {showRetryPayment &&
                    <TouchableOpacity style={{ alignItems: 'flex-start' }}
                        onPress={paymentPress}
                    >
                        <Text style={styles.retry}>Retry Payment</Text>
                    </TouchableOpacity>
                }
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <Text style={styles.title}>Pick Up details</Text>

                    <View>
                        <Text style={styles.label1}>Pick up latitude</Text>
                        <TextInput
                            placeholder='latitude'
                            placeholderTextColor={"#BABFD1"}
                            style={styles.input}
                            onChangeText={(text) => handleChange("pick_up_lat", text)}
                            value={postData.pick_up_lat}
                        />
                    </View>
                    <View>
                        <Text style={styles.label1}>Pick up longitude</Text>
                        <TextInput
                            placeholder='longitude'
                            placeholderTextColor={"#BABFD1"}
                            style={styles.input}
                            onChangeText={(text) => handleChange("pick_up_lng", text)}
                            value={postData.pick_up_lng}
                        />
                    </View>
                    <View>
                        <Text style={styles.label1}>Description</Text>
                        <TextInput
                            placeholder='description'
                            placeholderTextColor={"#BABFD1"}
                            style={styles.input}
                            onChangeText={(text) => handleChange("description", text)}
                            value={postData.description}
                        />
                    </View>


                    <View style={styles.btnRow}>
                        <Button1
                            style={styles.btn}
                            backgroundColor={COLORS.black}
                            textColor={COLORS.white}
                            onPress={handleSubmit}
                        //   onPress={locationPress}
                        >Update</Button1>
                        <Button1
                            style={styles.btn}
                            onPress={() => setModalVisible(!isModalVisible)}
                        >Cancel</Button1>
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}

BookedCar.defaultProps = {
    source: images.car1,
    bookingStatus: "",
    date: "",
    bookingId: "",
    brand: "Honda",
    onPress: null,
    carName: "swift",
    paymentPress: null,
    showRetryPayment: false,
    cancelPress: null,
    locationPress: null,
    showCalcel: false,
    showLocation: false,
    onChangeValue: null,
    pick_up_lat: null,
    pick_up_lng: null,
    description: null,
    car_booking_id: null,
    insurancePress: null,
    showInsurance: false,
    markPress: null,
    showMark: false,
}

export default BookedCar;

const styles = StyleSheet.create({
    tripBox: {
        width: SIZES.width * .9,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: SIZES.width * .03,
        paddingVertical: SIZES.height * .015,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: "#E1E1E1",
        borderRadius: 5,
        marginBottom: SIZES.height * .02,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.black,
    },

    contentBox: {
        width: SIZES.width * .6,
    },


    carImgBox: {
        width: SIZES.width * .2,
        height: SIZES.height * .1,
        justifyContent: 'center',
        // borderWidth: 1,
        marginRight: SIZES.width * .03,
    },

    textBox: {
        flexDirection: 'row',
        alignItems: 'center',
        // width: SIZES.width * .83,
        // borderWidth: 1,
    },

    carImg: {
        width: SIZES.width * .2,
        height: SIZES.height * .1,
        // marginTop: SIZES.height * -.01,
    },

    label: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        color: COLORS.black,
    },

    retry: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.blue,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.blue,
    },

    cancel_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: "center",
        justifyContent: 'center',
        marginRight: SIZES.width * .03,
    },

    location_row: {
        width: SIZES.width * .4,
        flexDirection: 'row',
        alignItems: "center",
        // justifyContent: 'space-between',
        // borderWidth: 1,
    },

    rightBox: {
        width: SIZES.width * .8,
        flexDirection: 'row',
        alignItems: "center",
        // justifyContent: 'flex-end',
        justifyContent: 'space-between',
        // borderWidth: 1,
    },


    modal: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingVertical: SIZES.height * .04,
        alignItems: 'center',
    },
    btnRow: {
        width: SIZES.width * .8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },
    btn: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
    },
    input: {
        width: SIZES.width * .8,
        // height: SIZES.height * .06,
        alignItems: "center",
        justifyContent: 'center',
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        borderWidth: 1,
        borderColor: COLORS.black,
        paddingVertical: SIZES.height * .01,
        borderRadius: 8,
        paddingLeft: SIZES.width * .05,
        marginBottom: SIZES.height * .02,
    },

    label1: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        marginBottom: 5,
    },
    title: {
        width: SIZES.width * .8,
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        color: COLORS.black,
        marginBottom: SIZES.height * .02,
    },


})