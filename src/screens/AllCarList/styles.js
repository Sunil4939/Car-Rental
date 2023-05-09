import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
    },

    container1: {
        flex: 1,
        backgroundColor: COLORS.white,
    },


    header: {
        width: SIZES.width,
        height: SIZES.height * .1,
        backgroundColor: COLORS.white,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
    },
    header_box: {
        backgroundColor: COLORS.light,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
    },

    row: {
        width: SIZES.width * .9,
        height: SIZES.height * .1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },


    row1: {
        flexDirection: 'row',
        alignItems: 'center',
    },




    notificationBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
    },

    countBox: {
        padding: 5,
        borderRadius: 20,
        backgroundColor: "#FE1D39",
        position: 'absolute',
        right: SIZES.width * .02,
        top: SIZES.height * .01,
    },

    count: {
        fontFamily: FONTS.medium,
        color: COLORS.white,
        fontSize: 10,
    },

    box: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: SIZES.width * .03,
    },



    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .02,
    },
    page_title: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        lineHeight: 24,
        color: COLORS.black,
    },

    titleRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },

    title: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        color: COLORS.black,
    },

    blueText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: "#0F56CC",
        borderBottomWidth: 1,
        borderBottomColor: "#0F56CC",
    },
})