import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import Modal from 'react-native-modal'
import { useSelector } from 'react-redux';
import { http2 } from '../../../services/api';

const Header = ({ onPress, source, navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    let userData = useSelector(state => state.auth.userData)

    // console.log("user data : ", userData)
    return (
        <View style={styles.box}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.imageBox}>
                        <Image
                            source={images.logo}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>

                    <TouchableOpacity style={{ ...styles.profileBox, borderWidth: source ? 0 : 1 }}
                    // onPress={onPress}
                    onPress={() => navigation.navigate("EditProfile")}
                    >
                        {userData ?
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
                    </TouchableOpacity>

                    <Modal isVisible={isModalVisible}>
                        <View style={styles.modal}>
                            <Text style={styles.modalText}>Are you sure want to Logout</Text>
                            <View style={styles.btnRow}>
                                <TouchableOpacity style={[styles.modalBtn, { backgroundColor: COLORS.white }]} onPress={() => setModalVisible(!isModalVisible)}>
                                    <Text style={[styles.modalBtnText, { color: COLORS.black }]}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalBtn} onPress={onPress}>
                                    <Text style={styles.modalBtnText}>Yes</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </View>
    )
}

Header.defaultProps = {
    onPress: null,
    source: images.profile1,
}

export default Header;

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
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    imageBox: {
        // width: SIZES.width * .2,
        height: SIZES.height * .1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
    },

    image: {
        width: SIZES.width * .35,
        height: SIZES.height * .1,
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


    modal: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingVertical: SIZES.height * .04,
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: SIZES.height * .025,
    },
    modalBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZES.width * .3,
        height: SIZES.height * .05,
        borderWidth: 1,
        borderColor: COLORS.blue,
        backgroundColor: COLORS.blue,
        borderRadius: 7,
    },
    modalBtnText: {
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        fontSize: 14,
        lineHeight: 18,
    },
    modalText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black2,
        textAlign: "center",
    },
})