import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    center: {
        alignItems: 'center',
    },

    box: {
        alignItems: 'center',
    },

    imageBox: {
        width: SIZES.width * .9,
        height: SIZES.height * .36,
        // borderWidth: 1,
    },

    image: {
        width: SIZES.width * .9,
        height: SIZES.height * .4,
        // borderWidth: 1,
    },

    title: {
        fontFamily: FONTS.bold,
        fontSize: 26,
        lineHeight: 36,
        color: COLORS.black,
    },

    btn: { 
        width: SIZES.width * .9,
    marginTop: SIZES.height * .25,
    }
})