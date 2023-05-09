import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center'
    },

    title_box: {
        width: SIZES.width,
        alignItems: 'center',
        borderBottomWidth: 1.3,
        borderColor: "rgba(0, 0, 0, 0.2)",
        paddingVertical: SIZES.height * .02,
    },

    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: 24,
        color: COLORS.black,
        marginTop: SIZES.height * .05,
        // marginBottom: SIZES.height * .02,
    },

    title1: {
        width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.black,
        // marginTop: SIZES.height * .05,
        // marginBottom: SIZES.height * .02,
    },
   
    btn: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .15,
        marginHorizontal: SIZES.width *  .05,
    },

    text: {
        // width: SIZES.width * .9,
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.black,
    },

    toggleContainerStyle: {
        // marginTop: 16,
        width: 40,
        height: 22,
        borderRadius: 20,
        // marginTop: -3,
        padding: 4,
    },

    toggle_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth: 1,
    },

    toggleCircleStyle: {
        width: 15,
        height: 15,
        borderRadius: 20,
    },

    box: {
        width: SIZES.width,
        alignItems: 'center',
        borderBottomWidth: 1.3,
        borderColor: "rgba(0, 0, 0, 0.2)",
        paddingVertical: SIZES.height * .02,
    },

})