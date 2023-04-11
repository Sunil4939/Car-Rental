import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from '../Icons';
import { COLORS, FONTS, SIZES, images } from '../../../constants';


const CarRent = ({ source, onPress, price, rating, carName, fuelType, transmision }) => {
    return (
        <TouchableOpacity style={styles.box} onPress={onPress}>
            <View style={styles.imageBox}>
                <Image source={source} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.contentBox}>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>{price}</Text>
                    <View style={styles.row1}>
                        <Icons name={"star"} size={15} color={"#3D3D3D"} />
                        <Text style={styles.rating}>{rating}</Text>
                    </View>
                </View>

                <Text style={styles.carName}>{carName}</Text>
                <View style={styles.bottomRow}>
                    <View style={styles.row1}>
                        <Icons name={"fuel"} size={12} color={COLORS.black} style={{marginRight: 3}}/>
                        <Text style={styles.fuelType}>{fuelType}</Text>
                    </View>
                    <View style={styles.row1}>
                        <Icons name={"transmision"} size={12} color={COLORS.black} style={{marginRight: 3}} />
                        <Text style={styles.fuelType}>{transmision}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

CarRent.defaultProps = {
    source: images.car4,
    onPress: null,
    price: "$200.00",
    rating: "5.0",
    carName: "Mazda 3",
    fuelType: 'Petrol',
    transmision: 'Automatic',
}

export default CarRent;

const styles = StyleSheet.create({
    box: {
        width: SIZES.width * .44,
        alignItems: 'center',
        backgroundColor: COLORS.light,
        borderRadius: 10,
        marginHorizontal: SIZES.width * .03,
        marginBottom: SIZES.height * .02,
    },

    imageBox: {
        width: SIZES.width * .4,
        height: SIZES.height * .16,
        overflow: 'hidden',
        // borderWidth: 1,
        borderRadius: 10,
    },

    image: {
        width: SIZES.width * .4,
        height: SIZES.height * .14,
        marginTop: SIZES.height * .01,
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
        color: "#3D3D3D",
    },

    carName: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black,
        // borderWidth: 1,
    },

    fuelType: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: "#3D3D3D",
    },

    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },

    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth: 1,
        marginTop: 3,
        marginBottom: SIZES.height * .015,
    },
})