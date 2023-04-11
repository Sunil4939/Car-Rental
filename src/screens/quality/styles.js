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

    contentBox: {
        width: SIZES.width * .9,
    },

    btnRow: {
        width: SIZES.width * .9,
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
        marginTop: SIZES.height * .01,
    },
  
    imageBox: {
        width: SIZES.width ,
        borderBottomWidth: 1,
        borderBottomColor: "#4FB5FF",
        borderStyle: "dashed",
        alignItems: 'center',
    },

    image: {
        width: SIZES.width * .7,
        height: SIZES.height * .3,
    },
})