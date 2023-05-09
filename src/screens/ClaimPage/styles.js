import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center'
    },

    box: {
        alignItems: 'center'
        // marginVertical: SIZES.height * .02,
    },

    messageBox: {
        height: SIZES.height * .1,
        alignItems: 'center',
        // justifyContent: 'flex-start',
        paddingHorizontal: SIZES.width * .03,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
        marginTop: SIZES.height * .03,
    },

    messageRow: {
        width: SIZES.width * .9,
        // borderWidth: 1,
        flexDirection: 'row',
        // alignItems:"flex-start",
        justifyContent: 'space-between',
    },

    row: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },

    name: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    message: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        lineHeight: 16,
        color: "rgba(0, 0, 0, 0.6)",
    },

    time: {
        fontFamily: FONTS.regular,
        fontSize: 11,
        lineHeight: 14,
        color: "rgba(0, 0, 0, 0.6)",
        marginVertical: SIZES.height * .02,
    },

    profileBox: {
        width: SIZES.width * .16,
        height: SIZES.height * .08,
        borderRadius: 50,
        overflow: 'hidden',
        // borderWidth: 1,
        marginRight: SIZES.width * .03,
    },

    profile: {
        width: SIZES.width * .16,
        height: SIZES.height * .08,
        borderRadius: 50,
    },

      contentBox: {
        width: SIZES.width * .5,
    },

    notificationBox: {
        backgroundColor: COLORS.light,
        width: SIZES.width * .9,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: SIZES.width * .03,
        paddingVertical: SIZES.height * .01,
        marginTop: SIZES.height * .03,
    },

  

    title: {
        fontFamily: FONTS.bold,
        fontSize: 17,
        lineHeight: 24,
        color: COLORS.black,
        marginTop: SIZES.height * .02,
        marginBottom: SIZES.height * .02,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    carImgBox: {
        width: SIZES.width * .16,
        height: SIZES.height * .08,
    },

    carImg: {
        width: SIZES.width * .16,
        height: SIZES.height * .08,
        // marginTop: SIZES.height * -.03,
    },

    tabBarLabelStyle: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        lineHeight: 24,
        // color: "#777777",
    },

    contentBox1: {
        width: SIZES.width * .6,
        marginLeft: SIZES.width * .03,
    },

})