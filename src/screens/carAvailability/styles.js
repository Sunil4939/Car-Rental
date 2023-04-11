import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        alignItems: "center",
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 22,
        lineHeight: 26,
        color: COLORS.black,
        marginTop: SIZES.height * .02,
    },

    title1: {
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        lineHeight: 24,
        color: COLORS.black,
        marginTop: SIZES.height * .02,
    },

    text: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    contentBox: {
        width: SIZES.width * .9,
    },

    //car details
    formContainer: {
        marginVertical: SIZES.height * .02,
        width: SIZES.width * .9,
    },

    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.height * .02,
    },

  

    redText: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        lineHeight: 15,
        color: "#ff0000",
        marginVertical: SIZES.height * .01,
    },

    box1: {
        width: SIZES.width * .9,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: COLORS.black,
        alignItems: 'center',
        overflow: 'hidden',
    },

    topRow: {
        width: SIZES.width * .9,
        backgroundColor: COLORS.light,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black,
        paddingVertical: SIZES.height * .015,
        paddingHorizontal: SIZES.width * .05,
    },

    title2: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        lineHeight: 24,
        color: COLORS.black,
    },

    content: {
        width: SIZES.width * .8,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SIZES.height * .03,
    },

    text1: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        width: SIZES.width * .7,
    },
})