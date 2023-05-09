import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center',
    },

    box: {
        alignItems: 'center',
    },
    
    search: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E1E1E1'
    },

    searchIcon: {
        marginHorizontal: SIZES.width * .03,
    },

    searchInput: {
        width: SIZES.width * .77,
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        alignItems: 'center',
        // borderWidth: 1,
    },
    title_box: {
        marginTop: SIZES.height * .02,
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        color: COLORS.black,
        // marginTop: SIZES.height * -.03,
    },
    sub_title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black,
        // marginVertical: SIZES.height * .03,
    },
    tab_row: {
        width: SIZES.width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    tab_btn: {
        width: SIZES.width * .5,
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 8,
        // borderBottomWidth: 1,
        borderColor: COLORS.black,
    },
    tab_btn_text: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.lightGray,
    },
    accordian_btn: {
        width: SIZES.width,
        // width: SIZES.width * .9,
        // height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#DBDBDB",
        paddingHorizontal: SIZES.width * .05,
        // marginBottom: SIZES.height * .02,
        paddingVertical: SIZES.height * .015,
    },
    accordian_btn_title: {
        width: SIZES.width * .85,
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        // marginBottom: -5,
        color: COLORS.black,
    },
    accordian_text: {
        width: SIZES.width * .9,
        fontFamily: FONTS.regular,
        fontSize: 14,
        marginBottom: -5,
        color: COLORS.black,
    },
    content_box: {
        height: SIZES.height * .06,
        alignItems:'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#DBDBDB",
        backgroundColor: COLORS.light,
        // marginBottom: SIZES.height * .01,
    },

    bottom_line: {
        // borderBottomWidth: 1,
        // borderBottomColor: "#DBDBDB",
    },
    text_container: {
        width: SIZES.width,
        alignItems:'center',
        marginVertical: SIZES.height * .02,
        backgroundColor: COLORS.light,
        paddingVertical: SIZES.height * .02,
    },

    text1: {
        width: SIZES.width * .9,
        fontFamily: FONTS.regular,
        fontSize: 13,
        lineHeight: 16,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
        // marginVertical: SIZES.height * .03,
    },

    bottom_box: {
        marginTop: SIZES.height * .01,
        marginVertical: SIZES.height * .03,
    },

    bottom_text_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },
    bottom_text: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black,
        marginBottom: -4,
    },
    bottom_text1: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
    },
})