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

})