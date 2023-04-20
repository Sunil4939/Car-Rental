import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants'

const BookedCar = ({ source, carName, brand, bookingStatus, date, bookingId, paymentPress, onPress }) => {
    return (
        <TouchableOpacity style={styles.tripBox} onPress={onPress}>
            <View style={styles.carImgBox}>
                <Image source={source} resizeMode="contain" style={styles.carImg} />
            </View>
            <View style={styles.textBox}>
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
                    <Text style={{ ...styles.text, color: bookingStatus == "Booked" ? "#00B200" : bookingStatus == "Pending" ? "#F7C021" : "#FF0000" }}>{bookingStatus}</Text>
                </View>
                <View style={styles.rightBox}>
                    {bookingStatus == "Pending" &&
                        <TouchableOpacity style={{ alignItems: 'flex-start' }}
                        onPress={paymentPress}
                        >
                            <Text style={styles.retry}>Retry Payment</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

BookedCar.defaultProps = {
    source: images.car1,
    bookingStatus: "Pending",
    date: "",
    bookingId: "",
    brand: "Honda",
    onPress: null,
    carName: "swift",
    paymentPress: null
}

export default BookedCar;

const styles = StyleSheet.create({
    tripBox: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
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

    rightBox: {
        alignItems: 'flex-end',
    },

    carImgBox: {
        width: SIZES.width * .2,
        height: SIZES.height * .13,
        justifyContent: 'center',
        // borderWidth: 1,
        marginRight: SIZES.width * .03,
    },

    textBox: {
        width: SIZES.width * .6,
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
})