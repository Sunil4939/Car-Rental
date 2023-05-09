import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        alignItems: "center",
    },

    topBox: {
        width: SIZES.width,
        height: SIZES.height * .14,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
        alignItems: "center",
        justifyContent: 'center',
    },

    box: {
        width: SIZES.width * .9,
    },

    title: {
        fontFamily: FONTS.medium,
        fontSize: 26,
        lineHeight: 30,
        color: COLORS.black,
    },

    progressBar: {
        marginTop: SIZES.height * .01,
        borderRadius: 20,
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
        marginBottom: SIZES.height * .02,
    },

    label: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginBottom: 5,
    },

    blueText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: "#0F56CC",
        borderBottomWidth: 1,
        borderBottomColor: "#0F56CC",
        marginBottom: SIZES.height * .01,
    },

    contentBox: {
        width: SIZES.width * .9,
    },

    btn: {
        alignItems: 'center',
        // width: SIZES.width * .6,
    },

    row: {
        width: SIZES.width * .7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },

    button: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
        borderRadius: 8,
        marginTop: SIZES.height * .1,
    },

    buttonText: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        lineHeight: 22,
        color: COLORS.white,
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

    box1: {
        marginTop: SIZES.height * .02,
    },

    subTitle: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: "#0F56CC",
        marginBottom: 5,
    },

    

    profileImgBox: {
        width: SIZES.width * .9,
        height: SIZES.height * .2,
        borderWidth: 1,
        borderColor: "#333333",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },

    text1: {
        width: SIZES.width * .35,
        fontFamily: FONTS.regular,
        fontSize: 12,
        lineHeight: 16,
        color: "#333333",
        textAlign: 'center',
    },

    redText: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        lineHeight: 15,
        color: "#ff0000",
        // marginVertical: SIZES.height * .01,
    },

    profileImg: {
        width: SIZES.width * .9,
        height: SIZES.height * .2,
    },

    featureRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: SIZES.width * .45,
        // justifyContent: 'space-between',
    },

    photoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },

    feature: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black, 
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