import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center',
    },

    topBox: {
        width: SIZES.width * .9,
        height: SIZES.height * .1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    topBtnRow: {
        width: SIZES.width * .5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    sortBtn: {
        width: SIZES.width * .23,
        height: SIZES.height * .04,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.black,
    },

    sortBtnText: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    iconStyle: {
        marginRight: 5,
    },

    box: {
        backgroundColor: COLORS.light,
        paddingVertical: SIZES.height * .03,
        alignItems: 'center',
    },

    box1: {
        marginBottom: SIZES.height * .03,
    },

    search: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },

    searchIcon: {
        marginHorizontal: SIZES.width * .03,
    },

    searchInput: {
        width: SIZES.width * .77,
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        alignItems: 'center',
        // borderWidth: 1,
    },

    label: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.black,
        marginBottom: 5,
    },

    dateBox: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        borderRadius: 8,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    dateText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        // borderWidth: 1,
    },

    dateBtn: {
        width: SIZES.width * .3,
        // height: SIZES.height * .03,
        // borderWidth: 1,
    },

    rightArrow: {
        marginHorizontal: SIZES.width * .05,
    },

    carListBox: {
        marginVertical: SIZES.height * .02,
        // paddingHorizontal: SIZES.width * .03,
    },



    row2: {
        width: SIZES.width,
        flexDirection: 'row',
        // marginTop: SIZES.height * .02,
    },
    sideBar: {
        width: SIZES.width * .5,
        height: SIZES.height * .4,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor:COLORS.light,
    },

    row1: {
        width: SIZES.width * .5,
        // height: SIZES.height * .6,
        flexDirection: 'row',
        alignItems: "center",
        // marginTop: SIZES.height * .01,
        // borderWidth: 1,
        // backgroundColor: COLORS.black,
    },
    rightBox: {
        // marginTop: SIZES.height * .02,
        height: SIZES.height * .4,
        marginLeft: SIZES.width * .02,
        // overflow: 'scroll',
    },
    label: {
        width: SIZES.width * .45,
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginLeft: SIZES.width * .02,
    },

    btn: {
        backgroundColor: COLORS.light,
        height: SIZES.height * .06,
        alignItems: "flex-start",
        justifyContent: 'center',
        marginBottom: SIZES.height * .01,
        paddingHorizontal: SIZES.width * .06,
    },
    btnTxt: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.secondary,
    },
    checkBox: {
        transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }]
    },
    btnRow: {
        // position: 'absolute',
        marginTop: SIZES.height * .02,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: SIZES.width * .8,
        // marginLeft: SIZES.width * -.2,
    },
    bottomBtn: {
        backgroundColor: COLORS.black,
        height: SIZES.height * .05,
        width: SIZES.width * .3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 1,
    },
    bottomBtnTxt: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        color: COLORS.white,
    },

    no_data_box: {
        width: SIZES.width,
        height: SIZES.height * .4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    no_data: {
        fontFamily: FONTS.semiBold,
        fontSize: 30,
        color: COLORS.black,
    },



    bottomSheet: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        alignItems: 'center',
    },

    titleRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },

    bottomTitle: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        color: COLORS.black
    },

    radioBtnRow: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        elevation: 4,
        alignItems: 'center',
        marginBottom: SIZES.height * .025,
        borderRadius: 8,
    },
    radioLabelTxt: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: '#302F33',
        marginLeft: SIZES.width * .03,
    },

    bottomSheet1: {
        height: SIZES.height * .6,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        alignItems: 'center',
    },

})