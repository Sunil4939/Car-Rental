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

    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.height * .02,
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

    profileImg: {
        width: SIZES.width * .9,
        height: SIZES.height * .2,
    },

})