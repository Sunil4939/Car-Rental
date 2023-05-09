import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    container1: {
        width: SIZES.width,
        alignItems: 'center',
    },

    center_box: {
        alignItems: 'center',
    },

    title_box: {
        width: SIZES.width * .9,
        marginVertical: SIZES.height * .02,
    },
    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        color: COLORS.black,
    },

    label: {
        // width: SIZES.width * .4,
        fontFamily: FONTS.medium,
        fontSize: 16,
        marginBottom: -4,
        color: COLORS.black,
    },

    carName: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        marginBottom: -4,
        color: COLORS.black,
    },

    text: {
        width: SIZES.width * .4,
        fontFamily: FONTS.regular,
        fontSize: 13,
        marginBottom: -2,
        color: COLORS.black,
        marginTop: 3,
        // flexWrap: 'wrap',
    },

    review: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        // marginBottom: -3,
        color: "#333333",
    },

    review_row: {
        flexDirection: "row",
        alignItems: 'center'
    },

    top_row: {
        width: SIZES.width * .9,
        flexDirection: "row",
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .02,
    },

    top_box: {
        width: SIZES.width * .7,
    },

    price: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        marginBottom: -5,
        color: COLORS.black,
    },

    hr_line: {
        width: SIZES.width,
        borderBottomWidth: 1.3,
        borderColor: "rgba(0, 0, 0, 0.2)",
    },
    date_row: {
        width: SIZES.width * .9,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },

    pickup: {
        width: SIZES.width * .28,
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        marginBottom: -5,
        color: COLORS.black,
    },

    title1: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
    },

    dot_box: {
        alignItems: 'center',
        marginRight: SIZES.width * .03,
    },
    text_box: {
        width: SIZES.width * .6,
        height: SIZES.height * .12,
        justifyContent: 'space-between',
        marginTop: SIZES.height * .01,
    },

    dot: {
        width: SIZES.width * .03,
        height: SIZES.width * .03,
        backgroundColor: '#008000',
        borderRadius: 10,
    },
    vt_line: {
        width: 2,
        height: SIZES.height * .06,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },

    row: {
        width: SIZES.width * .7,
        flexDirection: "row",
        alignItems: 'center',
        // justifyContent: 'space-between',
    },

    label_row: {
        width: SIZES.width * .5,
        flexDirection: "row",
        alignItems: 'flex-start',
        marginTop: SIZES.height * .01,
    },

    btn_text: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        color: COLORS.black,
        marginTop: SIZES.height * .01,
    },
    receipt_row: {
        width: SIZES.width * .9,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .02,
    },

    image_box: {
        width: SIZES.width * .16,
        height: SIZES.height * .08,
        borderRadius: SIZES.width * .08,
        overflow: 'hidden',
    },

    image: {
        width: SIZES.width * .16,
        height: SIZES.height * .08,
    },

    driver_name: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
    },

    text1: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.black,
    },

    box: {
        width: SIZES.width * .9,
        backgroundColor: COLORS.light,
        borderRadius: 20,
        paddingVertical: SIZES.height * .02,
        paddingHorizontal: SIZES.width * .03,
        marginVertical: SIZES.height * .02,
    },

    icon_box: {
        width: SIZES.width * .08,
        height: SIZES.height * .04,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.width * .06,
        borderWidth: 1,
        borderColor: COLORS.black,
        marginRight: 5,
    },
    right_box: {
        width: SIZES.width * .6,
        marginLeft: SIZES.width * .03,
    },

    box_row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SIZES.height * .02,
    },
    box_row1: {
        // width: SIZES.width * .8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mobile: {
        fontFamily: FONTS.medium,
        fontSize: 13,
        color: COLORS.black,
    },

    row1: {
        flexDirection: "row",
        alignItems: 'center',
    },
    pickup_row: {
        width: SIZES.width * .9,
        flexDirection: "row",
        alignItems: 'flex-start',
        // flexWrap: 'wrap',
        marginTop: SIZES.height * .01,
    },
})