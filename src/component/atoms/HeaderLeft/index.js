import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import Icons from '../Icons';


const HeaderLeft = ({ navigation, title, boxStyle, showBack }) => {
    return (
        <View style={{ ...styles.box, ...boxStyle }}>
            <View style={styles.container}>
                <View style={styles.row}>
                    {showBack &&
                        <TouchableOpacity
                            style={styles.backBtn}
                            onPress={() => navigation.goBack()}
                        >
                            <Icons name={"back"} size={20} color={COLORS.black} />
                        </TouchableOpacity>
                    }
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </View>
    )
}

HeaderLeft.defaultProps = {
    onPress: null,
    title: "Trip",
    boxStyle: null,
    showBack: true,
}

export default HeaderLeft;

const styles = StyleSheet.create({

    box: {
        backgroundColor: COLORS.white,
    },

    container: {
        width: SIZES.width,
        height: SIZES.height * .1,
        backgroundColor: COLORS.light,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
    },

    row: {
        width: SIZES.width * .94,
        height: SIZES.height * .1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },

    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .02,
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        lineHeight: 24,
        color: COLORS.black,
    },
})