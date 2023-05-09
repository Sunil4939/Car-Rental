import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from '../Icons';
import { COLORS, FONTS, SIZES, images } from '../../../constants';


const AllCar = ({ source, style, onPress, price, start, carName, }) => {
    return (
        <TouchableOpacity style={{...styles.box, ...style}} onPress={onPress}>
            <View style={styles.priceRow}>
                <View style={styles.imageBox}>
                    <Image source={source} style={styles.image} resizeMode='contain' />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.carName}>{carName}</Text>
                    <Text style={styles.rating}>{start}</Text>
                </View>
            </View>
            <Text style={styles.price}>{price}</Text>
        </TouchableOpacity>
    )
}

AllCar.defaultProps = {
    source: images.car4,
    onPress: null,
    price: "$200.00",
    carName: "Mazda 3",
    start: "Starting From",
    style: null,
}

export default AllCar;

const styles = StyleSheet.create({
    box: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.light,
        borderRadius: 10,
        paddingHorizontal: SIZES.width * .03,
        marginBottom: SIZES.height * .02,
    },

    imageBox: {
        width: SIZES.width * .24,
        height: SIZES.height * .1,
        overflow: 'hidden',
        // borderWidth: 1,
        borderRadius: 10,
    },

    image: {
        width: SIZES.width * .24,
        height: SIZES.height * .1,
        borderRadius: 10,
    },

    priceRow: {
        // borderWidth: 1,
        width: SIZES.width * .4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.height * .01,
    },

    price: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        color: COLORS.black,
    },

    rating: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: "#59595A",
    },

    carName: {
        fontFamily: FONTS.medium,
        fontSize: 18,
        color: COLORS.black,
        // borderWidth: 1,
    },


    box1: {
        marginLeft: SIZES.width * .03,
    },

})