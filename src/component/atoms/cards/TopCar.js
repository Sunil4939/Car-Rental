import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from '../Icons';
import { COLORS, FONTS, SIZES, images } from '../../../constants';


const TopCar = ({ source, onPress, price, carName,}) => {
    return (
        <TouchableOpacity style={styles.box} onPress={onPress}>
            <View style={styles.imageBox}>
                <Image source={source} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.contentBox}>
                {/* <View style={styles.priceRow}> */}
                    <Text style={styles.carName}>{carName}</Text>
                    <Text style={styles.price}>{price}</Text>
                {/* </View> */}
            </View>
        </TouchableOpacity>
    )
}

TopCar.defaultProps = {
    source: images.car4,
    onPress: null,
    price: "$200.00",
    carName: "Mazda 3",
}

export default TopCar;

const styles = StyleSheet.create({
    box: {
        width: SIZES.width * .44,
        height: SIZES.height * .2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: COLORS.light,
        // borderRadius: 10,
        // borderWidth: 1,
        marginHorizontal: SIZES.width * .03,
        marginBottom: SIZES.height * .02,
    },

    imageBox: {
        width: SIZES.width * .4,
        overflow: 'hidden',
        // borderWidth: 1,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 2,
        top: SIZES.height * -.01,
    },

    image: {
        width: SIZES.width * .4,
        height: SIZES.height * .14,
        borderRadius: 10,
    },

    contentBox: {
        width: SIZES.width * .44,
        height: SIZES.height * .12,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        justifyContent: 'flex-end',
        paddingLeft: SIZES.width * .03,
        paddingBottom: SIZES.height * .01,
    },

    price: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        color: COLORS.black,
    },

    carName: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black,
        // borderWidth: 1,
    },


})