import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
    },

    title1: {
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        lineHeight: 24,
        color: COLORS.black,
        marginTop: SIZES.height * .08,
        marginBottom: SIZES.height * .03,
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


    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.height * .02,
    },

    btnBox: {
        alignItems: 'flex-end',
        // alignItems: 'center',
        marginVertical: SIZES.height * .04,

    },

    btnRow1: {
        width: SIZES.width * .65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    btnStyle: {
        width: SIZES.width * .3,
        height: SIZES.height * .05
    }


})