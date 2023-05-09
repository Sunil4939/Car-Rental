import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import Icons from '../Icons';
import { connect, useSelector } from 'react-redux';
import { http2 } from '../../../services/api';
import { useEffect } from 'react';


const Header1 = ({ onPress, navigation, source, userName, }) => {
    let userData = useSelector(state => state.auth.userData)
    const token = useSelector(state => state.auth.token)

    // console.log("sudfl : ", userData)
    return (
        <View style={styles.box1}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={{ ...styles.profileBox, borderWidth: source ? 0 : 1 }}>
                        {token ?
                            <Image
                                source={userData && userData.profile && userData.profile.profile_image ? { uri: http2 + userData.profile.profile_image } : source}
                                style={styles.profileImg}
                                resizeMode="contain"
                            />
                            :
                            <Image
                                source={icons.profile}
                                style={styles.profile}
                                resizeMode="contain"
                            />
                        }
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.userName}>{token && userData ? `${userData.name}` : userName}</Text>
                        <TouchableOpacity style={styles.editBtn}
                            // onPress={onPress}
                            onPress={() => navigation.navigate(token ? "EditProfile" : "Login")}
                        >
                            <Text style={styles.edit}>{token ? "Edit Profile" : "Login or Signup"}</Text>
                            <Icons name={"edit"} size={15} color={COLORS.blue} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

Header1.defaultProps = {
    onPress: null,
    source: images.profile1,
    userName: "Warker",

}

export default Header1;

const styles = StyleSheet.create({
    box1: {
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
        width: SIZES.width * .9,
        height: SIZES.height * .1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },

    profileBox: {
        width: SIZES.width * .14,
        height: SIZES.height * .07,
        // borderWidth: 1,
        borderRadius: 100,
        overflow: 'hidden',
        borderColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },

    profile: {
        width: SIZES.width * .07,
        height: SIZES.height * .035,
    },

    profileImg: {
        width: SIZES.width * .14,
        height: SIZES.height * .069,
        borderRadius: 100,
    },

    editBtn: {
        flexDirection: 'row',
        alignItems: "baseline",
    },

    edit: {
        fontFamily: FONTS.medium,
        color: COLORS.blue,
        fontSize: 14,
        lineHeight: 18,
        marginRight: 2,
    },

    box: {
        marginLeft: SIZES.width * .03,
    },

    userName: {
        fontFamily: FONTS.semiBold,
        color: COLORS.black,
        fontSize: 18,
        lineHeight: 20,
    },
})