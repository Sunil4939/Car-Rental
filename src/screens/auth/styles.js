import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    close: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: SIZES.width * -.04,
    },

    container1: {
        height: SIZES.height * .4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoBox: {
        width: SIZES.width * .5,
        height: SIZES.height * .14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 10,
    },

    logo: {
        width: SIZES.width * .4,
        height: SIZES.height * .1, 
    },

    title: {
        fontFamily: FONTS.bold,
        fontSize: 24,
        lineHeight: 30,
        color: COLORS.white,
        marginVertical: SIZES.height * .05,
        textAlign: 'center',
    },

    box: {
        marginTop: SIZES.height * .07,
    },

    btnStyle: {
        width: SIZES.width * .9,
        marginBottom: SIZES.height * .02,
        borderWidth: 0,
    },
    hostBtn: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .05,
        borderWidth: 0,
    },
})