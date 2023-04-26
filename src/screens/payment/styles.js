import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        // justifyContent: 'center',
    },

    btn_box: {
        height: SIZES.height * .9,
        alignItems: 'center',
        justifyContent: 'center',
    },


    button: {
        width: SIZES.width * .9,
        height: SIZES.height * .07,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: COLORS.light,
        // borderWidth: 1,
        // borderColor: 'rgba(51, 51, 51, 0.8)',
        marginBottom: SIZES.height * .025,
        paddingHorizontal: SIZES.width * .03,
    },

    buttonText: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        // lineHeight: 20,
        color: COLORS.black,
        // marginBottom: -2
    },


    btn: {
        width: SIZES.width * .9,
        height: SIZES.height * .07,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: 'rgba(51, 51, 51, 0.8)',
        marginBottom: SIZES.height * .025,
        paddingHorizontal: SIZES.width * .03,
    },

    btnText: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.black,
        // marginBottom: -4
    },

    iconBox: {
        width: SIZES.width * .1,
        height: SIZES.height * .07,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .03,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        lineHeight: 12,
        color: COLORS.black,
        // marginBottom: -2
    },

   
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SIZES.height * .01,
        marginBottom: SIZES.height * .02,
    },

  
    iconStyle: {
        width: SIZES.width * .1,
        height: SIZES.height * .04,
        // marginHorizontal: SIZES.width * .03,
    },


    header: {
        width: SIZES.width,
        height: SIZES.height * .1,
        backgroundColor: COLORS.light,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
    },

    headerRow: {
        width: SIZES.width * .94,
        height: SIZES.height * .1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .02,
        // marginTop: SIZES.height * -.01,
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        color: COLORS.black,
    },
    
    date: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        // lineHeight: 24,
        color: COLORS.black,
    },

    labelStyle: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
    },
    inputStyle: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
        paddingLeft: SIZES.width * .04,
        // marginBottom: -4
    },

    cardForm: {
        width: SIZES.width * .9,
        alignItems: "center",
    }
})