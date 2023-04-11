import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },

    imageBox: {
        width: SIZES.width * .7,
        height: SIZES.height * .3,
        alignItems: 'center',
        // borderWidth: 1,
    },

    image: {
        width: SIZES.width * .7,
        height: SIZES.height * .3,
    },

    box: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .03,
    },
    
    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 20, 
        color: COLORS.black,
        marginBottom: SIZES.height * .02,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 14, 
        color: COLORS.black,
        // marginVertical:  SIZES.height * .02,
    },

    blueText: {
        fontFamily: FONTS.semiBold,
        fontSize: 14, 
        color: "#0F56CC",
        marginBottom:  SIZES.height * .02,
    },

    text1: {
        fontFamily: FONTS.medium,
        fontSize: 14, 
        color: "#858585",
    },

    price: {
        fontFamily: FONTS.semiBold,
        fontSize: 14, 
        color: "#222222",
    },

    row: {
        // width: SIZES.width * .86,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderBottomWidth: 1,
        // borderBottomColor: '#E1E1E1',
    },

    line: {
        width: SIZES.width * .9,
        height: 1.5,
        backgroundColor: '#E1E1E1',
        marginVertical:  SIZES.height * .02,
    },

    
    btn: {
        width: SIZES.width * .5,
        height: SIZES.height * .065,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: "#EC1D1C",
        marginTop:  SIZES.height * .03,
    },

    btnText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.white,
    },
})