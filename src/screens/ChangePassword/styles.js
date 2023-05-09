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
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.black,
        marginTop: SIZES.height * -.02,
        marginBottom: SIZES.height * .04,
    },
    btn: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .15,
        marginHorizontal: SIZES.width *  .05,
    },
})