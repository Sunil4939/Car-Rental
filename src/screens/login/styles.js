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

    btn: {
    alignItems: "flex-end",
    justifyContent: 'center',
    },

    blueText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.blue,
    },

    row: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        width: SIZES.width * .9,
        marginTop: SIZES.height * .1,
    },

    or: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.black,
    },

    line: {
        height: 1,
        width: SIZES.width * .4,
        backgroundColor: "rgba(51, 51, 51, 0.4)", 
    },

    socailBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
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
        // marginTop: SIZES.height * .2,
        // marginBottom: SIZES.height * .05,
        marginVertical: SIZES.height * .05,
    },

    btnRow: {
        width: SIZES.width * .45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginVertical: SIZES.height * .05,
    },


})