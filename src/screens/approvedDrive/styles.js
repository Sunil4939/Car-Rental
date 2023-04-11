import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
    },

    textBox: {
        width: SIZES.width * .9,
        marginVertical: SIZES.height * .02,
    },

    box_container: {
        width: SIZES.width * .9,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: COLORS.light,
        paddingVertical: SIZES.height * .015,
    },

    box: {
        width: SIZES.width * .8,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: SIZES.height * .01,
    },

    iconBox: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.black,
        backgroundColor: COLORS.white,
        marginRight: SIZES.width * .03,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.black,
    },

    text1: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black,
    },

    content_box: {
        width: SIZES.width * .67,
    },

    btn: {
        width: SIZES.width * .9,
        marginVertical: SIZES.height * .05,
    },


})