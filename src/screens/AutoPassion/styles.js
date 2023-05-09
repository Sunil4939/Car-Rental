import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center',
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













    bgImage: {
        width: SIZES.width * .7,
        // width: SIZES.width,
        height: SIZES.height * .35,
        // borderWidth: 1,
    },

    passion2: {
        width: SIZES.width,
        height: SIZES.height * .3,
        alignItems: 'center',
    },
    textBox: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        marginTop: SIZES.height * .02,
        // alignItems: "center",
    },

    contentBox: {
        // width: SIZES.width * .75,
        alignItems: "center",
    },



    title1: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: "#111111",
        // marginVertical: SIZES.height * .02,
    },

    no_box: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: COLORS.black,
        alignItems: "center",
        justifyContent: 'center',
        marginRight: SIZES.width * .03,
    },

    no: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        color: COLORS.black,
        // marginBottom: -3,
    },

    content: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
    },

    line: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
    },

    lineBox: {
        width: SIZES.width * .9,
        marginVertical: SIZES.height * .01,
    },

    boxContainer: {
        alignItems: 'center',
    },



    innerBox: {
        width: SIZES.width * .8,
        // alignItems: 'center',
    },

    featured: {
        fontFamily: FONTS.bold,
        fontSize: 18,
        lineHeight: 24,
        color: COLORS.black,
        marginVertical: SIZES.height * .02,
    },

    featuredTitle: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        lineHeight: 26,
        color: COLORS.black,
    },

    featuredText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginVertical: SIZES.height * .01,
    },

    btn1: {
        width: SIZES.width * .2,
        alignItems: 'flex-start',
        marginBottom: SIZES.height * .03,
        // borderWidth: 1,
    },

    btnText: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        lineHeight: 16,
        color: "#0F56CC",
        borderBottomWidth: 1,
        borderBottomColor: '#0F56CC',
    },

    boxRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },

    image6: {
        width: SIZES.width * .34,
        height: SIZES.height * .17,
    },

    title2: {
        fontFamily: FONTS.bold,
        fontSize: 18,
        color: COLORS.black,
        // marginBottom: -5,
        marginBottom: SIZES.height * .02,
    },

    imageText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 20,
        color: COLORS.black,
    },

    location_box: {
        width: SIZES.width * .45,
        // alignItems: 'flex-start',
        alignItems: 'center',
    },

    button: {
        width: SIZES.width * .4,
        height: SIZES.height * .05,
        backgroundColor: COLORS.light,
        borderRadius: 8,
        marginBottom: SIZES.height * .01,
        justifyContent: 'center',
        paddingLeft: SIZES.width * .05,
    },
    button1: {
        width: SIZES.width * .9,
        // height: SIZES.height * .05,
        marginVertical: SIZES.height * .03,
    },
    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: 22,
        lineHeight: 36,
        color: COLORS.black,
        marginVertical: SIZES.height * .01,
    },
    title3: {
        width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.black,
        // marginVertical: SIZES.height * .03,
    },
    title4: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.black,
        marginTop: SIZES.height * -.03,
    },
    text: {
        width: SIZES.width * .9,
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black,
        // marginVertical: SIZES.height * .03,
    },

    car_box: {
        width: SIZES.width * .4,
        height: SIZES.height * .2,
        marginVertical: SIZES.height * .02,
        alignItems: "center",
        backgroundColor: COLORS.light,
        borderRadius: 10,
        marginHorizontal: SIZES.width * .03,
    },
    car_img: {
        width: SIZES.width * .35,
        height: SIZES.height * .15,
    },
    car_name: {
        // width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        color: COLORS.black,
        marginBottom: -2,
        // marginVertical: SIZES.height * .03,
    },

    car_box_container: {
        height: SIZES.height * .28,
        alignItems: "center",
    },

    passion3: {
        width: SIZES.width * .8,
        height: SIZES.height * .3,
    },
    location: {
        width: SIZES.width * .8,
        height: SIZES.height * .3,
    },

    accordian_btn: {
        width: SIZES.width,
        // width: SIZES.width * .9,
        // height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        // borderBottomWidth: 1,
        // borderBottomColor: "#DBDBDB",
        paddingHorizontal: SIZES.width * .05,
        // marginBottom: SIZES.height * .02,
        paddingVertical: SIZES.height * .015,
    },
    accordian_btn_title: {
        width: SIZES.width * .85,
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        // marginBottom: -5,
        color: COLORS.black,
    },
    accordian_text: {
        width: SIZES.width * .9,
        fontFamily: FONTS.regular,
        fontSize: 13,
        marginBottom: -5,
        color: "#747474",
    },
    content_box: {
        alignItems:'center',
        marginBottom: SIZES.height * .02,
    },

    bottom_line: {
        borderBottomWidth: 1,
        borderBottomColor: "#DBDBDB",
    },
    text_container: {
        width: SIZES.width,
        alignItems:'center',
        marginVertical: SIZES.height * .02,
        backgroundColor: COLORS.light,
        paddingVertical: SIZES.height * .02,
    },

    text1: {
        width: SIZES.width * .9,
        fontFamily: FONTS.regular,
        fontSize: 13,
        lineHeight: 16,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
        // marginVertical: SIZES.height * .03,
    },

    socail_btn_box: {
        width: SIZES.width * .9,
        marginBottom: SIZES.height * .03,
    },

    socail_btn_row: {
        width: SIZES.width * .5,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },

    apple_btn: {
        width: SIZES.width * .36,
        height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
        borderRadius: 8,
    },
    apple_btn_text: {
        fontFamily: FONTS.light,
        fontSize: 9,
        color: COLORS.white,
        marginBottom: -4,
    },
    apple_btn_title: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.white,
    },
    btn_row: {
        width: SIZES.width * .8,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },
    bottom_text_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },
    bottom_text: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black,
        marginBottom: -4,
    },
    bottom_text1: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
    },
})