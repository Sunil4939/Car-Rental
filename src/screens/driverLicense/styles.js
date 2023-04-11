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

})