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

    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginVertical: SIZES.height * .025,
    },

    blueText: {
        width: SIZES.width * .36,
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: "#0F56CC",
        borderBottomWidth: 1,
        borderBottomColor: "#0F56CC",
        marginBottom: SIZES.height * .01,
    },

    contentBox: {
        width: SIZES.width * .9,
    },

    btn: {
        alignItems: 'center',
        // width: SIZES.width * .6,
    },
    
    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.height * .02,
    },

    box1: {
        width: SIZES.width * .9,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: COLORS.black,
        alignItems: 'center',
        overflow: 'hidden',
    },

    topRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.light,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black,
        paddingVertical: SIZES.height * .015,
        paddingHorizontal: SIZES.width * .05,
    },

    stripBtn: {
        backgroundColor: "#008000",
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginRight: SIZES.width * .03,
    },

    strip: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        lineHeight: 16,
        color: COLORS.white,
    },

    title2: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        lineHeight: 24,
        color: COLORS.black,
    },

    content: {
        width: SIZES.width * .8,
        marginVertical: SIZES.height * .02,
    },

    text1: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginBottom: SIZES.height * .02,
    },

    btn: {
        alignItems: 'center',
        // width: SIZES.width * .6,
        marginBottom: SIZES.height * .03,
    },

})