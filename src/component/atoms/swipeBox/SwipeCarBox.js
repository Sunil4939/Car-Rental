import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import SwitchToggle from 'react-native-switch-toggle';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import { http2 } from '../../../services/api';
import findAgoDays from '../../../services/findAgoDays';


const SwipeCarBox = ({ source,onPress, brandName, buildYear, deletePress, editPress, createdAt, isActive }) => {
    // console.log("data: ", data)
    return (
        <TouchableOpacity style={styles.frontBox}
        onPress={onPress}
        >
            <View style={styles.box}>
                <View style={styles.row}>
                    <View style={styles.row1}>
                        <View style={styles.imageBox}>
                            <Image source={source} style={styles.image} resizeMode="contain" />
                        </View>
                        <View style={styles.box1}>
                            <Text style={styles.name}>{brandName}</Text>
                            <View style={styles.row1}>
                                <Text style={styles.year}>Year {buildYear}</Text>
                                <Text style={styles.added}>Added: {createdAt}</Text>
                            </View>
                        </View>
                    </View>
                    {/* <View style={styles.toggleBox}>
                        <SwitchToggle
                            // switchOn={toggle.includes(data.item.id)}
                            // onPress={() => handleArrayChange(data.item.id)}
                            switchOn={isActive ? isActive : false}
                            circleColorOff={COLORS.white}
                            circleColorOn={COLORS.white}
                            backgroundColorOn={COLORS.green1}
                            backgroundColorOff={COLORS.lightGrey2}
                            containerStyle={styles.toggleContainerStyle}
                            circleStyle={styles.toggleCircleStyle}
                        />
                        <Text style={styles.active}>{isActive ? "Active" : "Inactive"}</Text>
                    </View> */}
                </View>
                <View style={{alignItems: 'flex-end', width: SIZES.width * .9}}>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn}
                        onPress={editPress}
                    >
                        <Text style={styles.btnText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                        onPress={deletePress}
                    >
                        <Text style={styles.btnText}>Delete</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const HiddenSwipeBox = ({ deletePress }) => {
    return (
        <View style={styles.rootBox}>
            <View style={styles.rowBack}>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={deletePress}
                >
                    {/* <Animated.View
                    style={[
                        styles.trash,
                        {
                            transform: [
                                {
                                    scale: rowSwipeAnimatedValues[
                                        data.item.key
                                    ].interpolate({
                                        inputRange: [45, 90],
                                        outputRange: [0, 1],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Image
                        source={icons.del}
                        style={styles.trash}
                    />
                </Animated.View> */}
                    <View
                        style={styles.trash}
                    >
                        <Image
                            source={icons.del}
                            style={styles.trash}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

SwipeCarBox.defaultProps = {
    source: images.car1,
    brandName: "",
    buildYear: 2015,
    createdAt: "5day ago",
    isActive: false,
    deletePress: null,
    editPress: null,
    onPress: null,
}

// HiddenSwipeBox.defaultProps = {
//    deletePress: null,
// }

export default SwipeCarBox;

// export {
//     SwipeCarBox,
//     HiddenSwipeBox
// };

const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        backgroundColor: 'white',
    },

    rootBox: {
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },

    frontBox: {
        width: SIZES.width * .9,
        alignItems: 'center',
        marginLeft: SIZES.width * .05
    },


    box: {
        backgroundColor: COLORS.light,
        width: SIZES.width * .9,
        borderWidth: 1,
        borderColor: "#E1E1E1",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SIZES.height * .02,
    },

    toggleContainerStyle: {
        marginTop: 16,
        width: 40,
        height: 22,
        borderRadius: 25,
        marginTop: -3
    },

    toggleBox: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
    },

    toggleCircleStyle: {
        width: 20,
        height: 20,
        borderRadius: 20,
    },

    imageBox: {
        width: SIZES.width * .2,
        height: SIZES.height * .1,
    },

    image: {
        width: SIZES.width * .2,
        height: SIZES.height * .1,
    },

    row: {
        width: SIZES.width * .85,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    row1: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    box1: {
        marginLeft: SIZES.width * .03,
    },


    backRightBtnRight: {
        width: SIZES.width * .15,
        backgroundColor: COLORS.light,
        right: 0,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E1E1E1",
    },
    trash: {
        height: 30,
        width: 25,
    },
    rowBack: {
        width: SIZES.width * .9,
        height: SIZES.height * .1,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        right: 0,
        justifyContent: 'center',
        paddingLeft: 15,
    },

    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        height: SIZES.height * .1,
        width: SIZES.width * .1,
    },
    name: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.black,
    },

    year: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: "#59595A",
    },

    added: {
        fontFamily: FONTS.regular,
        fontSize: 11,
        color: "#59595A",
        marginLeft: 5,
    },

    active: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        marginLeft: 5,
    },

    btnRow: {
        width: SIZES.width * .6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
    },


    btn: {
        width: SIZES.width * .23,
        height: SIZES.height * .04,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
        borderRadius: 5,
        marginBottom: SIZES.height * .012,
    },

    btnText: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: COLORS.white,
        // marginBottom: -3,
    },

});

