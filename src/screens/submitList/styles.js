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
        marginTop: SIZES.height * .03,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginTop: 5,
        width: SIZES.width * .8,
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
   
    text1: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginVertical: SIZES.height * .01,
    },

    blueText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: "#0F56CC",
        borderBottomWidth: 1,
        borderBottomColor: "#0F56CC",
        marginBottom: SIZES.height * .01,
    },

    btn: {
        alignItems: 'center',
        marginVertical: SIZES.height * .03,
        // width: SIZES.width * .6,
    },

    row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: "flex-start",
        marginVertical: SIZES.height * .01,
    },
  
})