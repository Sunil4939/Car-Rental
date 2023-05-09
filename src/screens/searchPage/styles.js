import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center'
    },

    bgImage: {
        width: SIZES.width,
        height: SIZES.height * .35,
        alignItems: 'center',
        // borderWidth: 1,
    },

    searchBox: {
        width: SIZES.width,
        alignItems: 'center',
        position: 'absolute',
    },

    search: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginVertical: SIZES.height * .02,
    },

    searchIcon: {
        marginHorizontal: SIZES.width * .03,
    },

    input: {
        width: SIZES.width * .8,
        // height: SIZES.height * .06,
        alignItems: "center",
        justifyContent: 'center',
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: 28,
        lineHeight: 36,
        color: COLORS.black,
        marginVertical: SIZES.height * .03,
    },

    location: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black,
        // marginBottom: -4,
    },


    textBox: {
        width: SIZES.width * .9,
    },

    contentBox: {
        // width: SIZES.width * .9,
        alignItems: "center",
    },

    textRow: {
        flexDirection: 'row',
        alignItems: "center",
    },

    iconStyle: {
        width: 20, 
        height: 22,
        marginRight: 8,
    },

    car: {
        width: 30, 
        height: 20,
        marginRight: 8,
    },

    title1: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        lineHeight: 24,
        color: "#111111",
        marginVertical: SIZES.height * .02,
    },

    content: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
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

    box: {
        width: SIZES.width * .9,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        marginTop: SIZES.height * -.06,
        marginBottom: SIZES.height * .02,
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

    btn: {
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
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },

    box1: {
        width: SIZES.width * .43,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: SIZES.height * .02,
        // justifyContent: 'center',
        // marginTop: SIZES.height * .05,
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
})