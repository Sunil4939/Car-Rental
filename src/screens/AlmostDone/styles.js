import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center'
    },
    imageBox: {
        // width: SIZES.width,
        alignItems: 'center',
    },

    image: {
        width: SIZES.width * .9,
        height: SIZES.height * .45,
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

    text2: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.black,
        // marginBottom: SIZES.height * .04,
    },
    text1: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: COLORS.blue,
        // marginTop: SIZES.height * .04,
    },
    btn: {
        width: SIZES.width * .9,
    },

    contentBox: {
        width: SIZES.width * .9,
        // marginVertical: SIZES.height * .03,
    },

    row: {
        width: SIZES.width * .9,
        flexDirection:'row',
        alignItems: 'center',
        marginTop: SIZES.height * .04,
        marginBottom: SIZES.height * .02,
    },
})