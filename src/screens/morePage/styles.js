import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        alignItems: "center",
    },

    imageBox: {
        width: SIZES.width *.9,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.light,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: SIZES.height * .03,
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginBottom: SIZES.height * .03,
    },

    moreBtn: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: COLORS.black,
    },

    moreBtnText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.white, 
    },

    leftBox: {
        width: SIZES.width * .6,
        paddingHorizontal: SIZES.width * .03,
    },

    rightBox: {
        width: SIZES.width * .3,
    },

    image: {
        width: SIZES.width * .3,
        height: SIZES.height * .25,
    },
    
    btn: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(51, 51, 51, 0.8)",
        backgroundColor: COLORS.white,
        marginBottom: SIZES.height * .02,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    btnText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black, 
    },

    iconBox: {
        width: SIZES.width * .1,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: "rgba(51, 51, 51, 0.5)",
        marginRight: 10,
    },

    account: {
        width: 20,
        height: 23,
    },
    
    legal: {
        width: 20,
        height: 26,
    },

    modal: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingVertical: SIZES.height * .04,
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: SIZES.height * .025,
    },
    modalBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZES.width * .3,
        height: SIZES.height * .05,
        borderWidth: 1,
        borderColor: COLORS.blue1,
        backgroundColor: COLORS.blue1,
        borderRadius: 7,
    },
    modalBtnText: {
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        fontSize: 14,
        lineHeight: 18,
    },
    modalText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        textAlign: "center",
    },
})