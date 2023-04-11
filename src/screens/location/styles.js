import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center'
    },

    header: {
        width: SIZES.width,
        // height: SIZES.height * .1,
        backgroundColor: COLORS.light,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
    },

    headerRow: {
        width: SIZES.width * .9,
        height: SIZES.height * .12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    search: {
        width: SIZES.width * .7,
        height: SIZES.height * .06,
        borderRadius: 8,
        backgroundColor: COLORS.white,
        paddingLeft: 15,
        alignItems: 'center',
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    cancelBtn: {
        // width: SIZES.width
    },

    cancelBtnText: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        lineHeight: 24,
        color: "#0F56CC",
    },

    iconStyle: {
        width: 20,
        height: 20,
    },

    iconBox: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    buttonBox: {
        width: SIZES.width * .9,
        alignItems: 'flex-start'
    },

    button: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SIZES.height * .01,
    },

    btnBox: {
        alignItems: 'center',
        marginTop: SIZES.height * .05,
    },

    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: SIZES.height * .02,
        left: SIZES.width * .06,
    },

    bottomText: {
        fontFamily: FONTS.regular,
        fontSize: 14, 
        lineHeight: 18,
        color: "#333333",
    },

    google: {
        width: 50,
        height: 20,
    },


})