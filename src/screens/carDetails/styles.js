import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        alignItems: "center",
    },

    title1: {
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        lineHeight: 24,
        color: COLORS.black,
        marginTop: SIZES.height * .02,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginVertical: SIZES.height * .025,
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
        marginVertical: SIZES.height * .02,
    },

    text1: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: "#333333",
    },

    redText: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        lineHeight: 15,
        color: "#ff0000",
        marginVertical: SIZES.height * .01,
    },

  
    featureRow: {
        flexDirection: 'row',
        // alignItems: 'center',
        minWidth: SIZES.width * .45,
    },

    featureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    feature: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black, 
        marginTop: 7,
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

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        lineHeight: 24,
        color: COLORS.black,
        marginVertical: SIZES.height * .01,
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

    text2: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginBottom: SIZES.height * .015,
    },

    title3: {
        fontFamily: FONTS.semiBold,
        fontSize: 22,
        lineHeight: 26,
        color: COLORS.black,
        marginTop: SIZES.height * .02,
        marginBottom: SIZES.height * .005,
    },

    input: {
        width: SIZES.width * .9,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: COLORS.black,
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        backgroundColor: COLORS.white,
        textAlignVertical: "top",
        paddingHorizontal: 15,
        marginTop: SIZES.height * .02,
    },
})