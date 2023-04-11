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
        lineHeight: 30,
        color: COLORS.black,
        marginTop: SIZES.height * .15,
        marginBottom: SIZES.height * .05,
    },

    box: {
        width: SIZES.width * .9,
        alignItems: "flex-end",
        marginTop: SIZES.height * -.02,
        marginBottom: SIZES.height * .03,
    },

  
    blueText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.blue,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: "rgba(51, 51, 51, 0.8)",
    },

    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SIZES.height * .05,
    },

    row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: "flex-start",
        marginBottom: SIZES.height * .05,
    },

    text1: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        lineHeight: 18,
        color: "rgba(51, 51, 51, 0.8)",
    },

    row2: {
        // width: SIZES.width * .8,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: SIZES.height * .01,
    }

})