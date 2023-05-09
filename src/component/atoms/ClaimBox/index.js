import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants'
import formatDate from '../../../services/date'

const ClaimBox = ({ source, style,  amount, type, status,  date, description, onPress}) => {
    return (
        <TouchableOpacity style={{...styles.tripBox, ...style}} onPress={onPress}>
            <View style={styles.carImgBox}>
                <Image source={source} resizeMode="contain" style={styles.carImg} />
            </View>
            <View style={styles.textBox}>
                {/* {customer_name &&
                    <View style={styles.row}>
                        <Text style={styles.label}>Customer Name : </Text>
                        <Text style={styles.text}>{customer_name}</Text>
                    </View>
                } */}

                <View style={styles.row}>
                    <Text style={styles.label}>Claim Amount : </Text>
                    <Text style={styles.text}>{amount}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Claim Date : </Text>
                    <Text style={styles.text}>{date}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Claim Type : </Text>
                    <Text style={styles.text}>{type}</Text>
                </View>
                 <View style={styles.row}>
                    <Text style={styles.label}>Claim Status : </Text>
                    <Text style={styles.text}>{status}</Text>
                </View>

                <View style={styles.row}>
                    {/* <Text style={styles.label}>Description : </Text> */}
                    <Text style={{...styles.text,}}>{description}
                    {/* descriptiondescriptiondescriptiondescriptiondescriptiondescription */}
                    </Text>
                </View> 
                {/* 
                <View style={styles.row}>
                    <Text style={styles.label}>Location : </Text>
                    <Text style={styles.text}>{location}</Text>
                </View> */}
                {/* <View style={styles.row}>
                    <Text style={styles.label}>Pick Up : </Text>
                    <Text style={styles.text}>{pickup}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Drop : </Text>
                    <Text style={styles.text}>{drop}</Text>
                </View> */}
            </View>
        </TouchableOpacity>
    )
}

ClaimBox.defaultProps = {
    source: images.car1,
    date: "",
    onPress: null,
    amount: null,
    customer_name: null,
    style: null,
    type: null,
    description: null,
    status: null,
}

export default ClaimBox;

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