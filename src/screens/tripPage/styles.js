import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center'
    },

    container1: {
        marginTop: SIZES.height * .03,
    },

    tripBox: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.width * .03,
        paddingVertical: SIZES.height * .015,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: "#E1E1E1",
        borderRadius: 5,
        marginBottom: SIZES.height * .02,
    },

    row: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },

    price: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    currentLocation: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        lineHeight: 16,
        color: COLORS.black,
    },

    time: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    contentBox: {
        width: SIZES.width * .6,
    },

    rightBox: {
        // width: SIZES.width * .3,
        height: SIZES.height * .13,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        // marginVertical: SIZES.height * .02,
    },

    trip: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        lineHeight: 16,
        color: "rgba(51, 51, 51, 0.6)",
    },

    carImgBox: {
        width: SIZES.width * .12,
        height: SIZES.height * .03,
        // borderWidth: 1,
        marginRight: SIZES.width * .03,
    },

    tripContainer: {
        marginTop: SIZES.height * .02,
    },

    textBox: {
        width: SIZES.width * .5,
    },

    carImg: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        marginTop: SIZES.height * -.01,
    },

    wheelBox: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
    }, 

    wheel: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
    },

    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: SIZES.width * .03,
    },
    
    row2: {
        alignItems: 'center',
        marginRight: SIZES.width * .01,
    },

    dot: {
        width:5,
        height: 5,
        borderRadius: 5,
        backgroundColor: "#008000",
    },

    line: {
        width: 2,
        backgroundColor: "rgba(51, 51, 51, 0.5)",
        height: SIZES.height * .05,
    },

    tripTextBox: {
        height: SIZES.height * .08,
        justifyContent: "space-between",
    },

    listBox: {
        width: SIZES.width,
        alignItems: 'center',
    },

    tabBarLabelStyle: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        lineHeight: 24,
        // color: "#777777",
    },



   
    modal: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingVertical: SIZES.height * .04,
        alignItems: 'center',
    },
    btnRow: {
        width: SIZES.width * .8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },
    btn: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
    },
    input: {
        width: SIZES.width * .8,
        // height: SIZES.height * .06,
        alignItems: "center",
        justifyContent: 'center',
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        borderWidth: 1,
        borderColor: COLORS.black,
        paddingVertical: SIZES.height * .01,
        borderRadius: 8,
        paddingLeft: SIZES.width * .05,
        marginBottom: SIZES.height * .02,
    },

    label1: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        marginBottom: 5,
    },
    title: {
        width: SIZES.width * .8,
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        color: COLORS.black,
        marginBottom: SIZES.height * .02,
    },
})