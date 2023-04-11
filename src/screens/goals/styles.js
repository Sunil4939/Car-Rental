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

   
    text1: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: "#333333",
    },

})