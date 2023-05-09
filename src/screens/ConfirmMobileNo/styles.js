import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center'
    },

    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: 24,
        color: COLORS.black,
        marginTop: SIZES.height * .05,
        marginBottom: SIZES.height * .02,
    },
    text: {
        width: SIZES.width * .9,
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        // marginBottom: SIZES.height * .04,
    },
    text2: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
        // marginBottom: SIZES.height * .04,
    },
    text1: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.blue,
        // marginTop: SIZES.height * .04,
    },
    btn: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .15,
        marginHorizontal: SIZES.width *  .05,
    },

    text_box: {
        marginVertical: SIZES.height * .03,
    },

    row: {
        width: SIZES.width * .9,
        flexDirection:'row',
        alignItems: 'center',
        marginTop: SIZES.height * -.02,
    },
})