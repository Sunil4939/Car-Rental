import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    row: {
        width: SIZES.width * .7,
        height: SIZES.height * .08,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        // borderWidth: 1,
    },

    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .02,
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        lineHeight: 24,
        color: COLORS.black,
    },

    clearBtnText: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        lineHeight: 24,
        color: "#0F56CC",
    },

    dateRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        borderRadius: 8,
        paddingHorizontal: SIZES.width * .03,
        paddingVertical: SIZES.height * .01,
        marginVertical: SIZES.height * .02,
    },

    dateText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    dateBtn: {
        width: SIZES.width * .2,
        height: SIZES.height * .03,
        borderWidth: 1,
    },

    dateBox: {
        width: SIZES.width * .35,
        // borderWidth: 1,
    },

    calendarBox: {
        marginVertical: SIZES.height * .02,
    },

    calendar: {
        marginHorizontal: SIZES.width * .03,
        borderRadius: 7,
    },

    progressBar: {
        marginTop: SIZES.height * .01,
        borderRadius: 20,
    },

    timeBox: {
        width: SIZES.width * .16,
        height: SIZES.height * .03,
        borderRadius: 20,
        backgroundColor: COLORS.black,
        position: 'absolute',
        left: SIZES.width * .3,
        // top: 2,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    timeRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .03,
    },

    time: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        lineHeight: 16,
        color: COLORS.white,
    },

    timeText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginBottom: -6,
    },

    btn: {
        marginTop: SIZES.height * .05,
    },

})