import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';
import SwitchToggle from 'react-native-switch-toggle';
import { connect, useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import { DeleteCarDataApi, GetCarImageApi } from '../../../redux/actions/vendorRegistration';
import { http2 } from '../../../services/api';
import findAgoDays from '../../../services/findAgoDays';
import Loading1 from '../Loading/Loading1';





const SwipeValueBasedUi = ({data, added, year, source }) => {
    const dispatch = useDispatch()

    // const loading = useSelector(state => state.getVendor.loading)
    // const carList = useSelector(state => state.getVendor.carList)
    // let data = carList && carList
    // console.log("car list swipe : ", carList)

    const [toggle, setToggle] = useState([])
    const [listData, setListData] = useState(
        data.map((item, i) => ({ key: `${i}`, ...item }))
    );

    // const [listData, setListData] = useState(
    //     carList && carList.map((item, i) => ({ key: `${i}`, ...item }))
    // );


    const rowSwipeAnimatedValues = {};
    data.forEach((item, i) => {
            rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
        });

    // carList && carList.forEach((item, i) => {
    //         rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    //     });

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };


    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    const handleArrayChange = (value) => {
        let arr = [...toggle]
        // console.log("arrrrr", arr.indexOf(value))
        if (arr.includes(value)) {
            arr.splice(toggle.indexOf(value), 1)
        } else {
            arr.push(value)
        }
        setToggle(arr)
        // handleChange("daysPerWeek", arr)
    }

    const renderItem = data => {

        return (
            <TouchableOpacity style={styles.frontBox}>
                <View style={styles.box}>
                    <View style={styles.row}>
                        <View style={styles.row1}>
                            <View style={styles.imageBox}>
                                <Image source={data.item.profile_image ? { uri: http2 + data.item.profile_image } : source} style={styles.image} resizeMode="contain" />
                            </View>
                            <View style={styles.box1}>
                                <Text style={styles.name}>{data.item.name}</Text>
                                <View style={styles.row1}>
                                    <Text style={styles.year}>Year {data.item.build_year ? data.item.build_year : year}</Text>
                                    <Text style={styles.added}>Added: {findAgoDays(data.item.created_at)}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.toggleBox}>
                            <SwitchToggle
                                // switchOn={toggle.includes(data.item.id)}
                                // onPress={() => handleArrayChange(data.item.id)}
                                switchOn={data.item.is_active ? data.item.is_active : false}
                                circleColorOff={COLORS.white}
                                circleColorOn={COLORS.white}
                                backgroundColorOn={COLORS.green1}
                                backgroundColorOff={COLORS.lightGrey2}
                                containerStyle={styles.toggleContainerStyle}
                                circleStyle={styles.toggleCircleStyle}
                            />
                            <Text style={styles.active}>{data.item.is_active ? "Active" : "Inactive"}</Text>
                            {/* <Text style={styles.active}>{toggle.includes(data.item.id) ? "Active" : "Inactive"}</Text> */}
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rootBox}>
            <View style={styles.rowBack}>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={() => dispatch(DeleteCarDataApi(data.item.id))}
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

    return (
        <View style={styles.container}>
                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={0}
                    rightOpenValue={-80}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onRowDidOpen={onRowDidOpen}
                    onSwipeValueChange={onSwipeValueChange}
                />
        </View>
    );
}

SwipeValueBasedUi.defaultProps = {
    source: images.car1,
    name: "",
    year: 2015,
    added: "5day ago",
    active: false,
    data: []
}


// const mapStateToProps = (state) => ({
//     loading: state.getVendor.loading,
// })

// const mapDispatchToProps = {
//     DeleteCarDataApi
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SwipeValueBasedUi)
export default SwipeValueBasedUi;

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
    }

});

