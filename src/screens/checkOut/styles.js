import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    }, 

    header: {
        width: SIZES.width,
        height: SIZES.height * .1,
        backgroundColor: COLORS.light,
        // alignItems: 'center',
        justifyContent: 'center',
    },


    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: SIZES.width * .04,
    },

    sliderBox: {
        width: SIZES.width,
        backgroundColor: COLORS.light,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    box: {
        width: SIZES.width * .9,
        // alignItems: 'center',
        marginTop: SIZES.height * .02,
    },

    hr_line: {
        width: SIZES.width * .9,
        height: 1,
        backgroundColor: '#E1E1E1',
        // alignItems: 'center',
        marginVertical: SIZES.height * .02,
    },


    carName: {
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        color: COLORS.black,
    },

    row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
    },

    featuresRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: SIZES.width * .04,
    },

    dot: {
        width: 3,
        height: 3,
        borderRadius: 5,
        backgroundColor: '#59595A',
        marginRight: 3,
    },

    features: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
    },

    carTitle: {
        fontFamily: FONTS.medium,
        fontSize: 18,
        color: COLORS.black,
    },

    carText: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: "#444444",
    },

    km: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        color: COLORS.white,
    },

    kmBox: {
        width: SIZES.width * .16,
        height: SIZES.height * .025,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
        borderRadius: 20,
        marginVertical: SIZES.height * .01,
    },

    locText: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        color: "#444444",
    },

    locRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: COLORS.light,
        borderRadius: 20,
        marginVertical: SIZES.height * .02,
        overflow: 'hidden',
    },

    leftBox: {
        width: SIZES.width * .4,
        marginVertical: SIZES.height * .02,
        marginHorizontal: SIZES.width * .03,
    },

    rightBox: {
        width: SIZES.width * .4,
    },


    policyTitle: {
        fontFamily: FONTS.medium,
        fontSize: 18,
        color: COLORS.black,
    },

    policyBtnText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: "#0F56CC",
        borderBottomWidth: 1,
        borderBottomColor: '#0F56CC',
    },

    policyRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    map: {
        width: SIZES.width * .45,
        height: SIZES.height * .2,
    },

    bottomBox: {
        width: SIZES.width,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        elevation: 10,
        alignItems: 'center',
        marginTop: SIZES.height * .04,
    },

    total_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },

    totalRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    file: {
        width: 20,
        height: 24,
        marginRight: SIZES.width * .02,
    },

    cart_total: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
    },

    price: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        color: COLORS.black,
    },

    btn: {
        width: SIZES.width * .9,
        marginBottom: SIZES.height * .04,
    },

    totalBtn: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .02,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#333333",
        paddingHorizontal: SIZES.width * .03,
    },

    totalBtnText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black
    },

    bottomSheet: {
        width: SIZES.width,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 30,
    },

    closeBox: {
       width: SIZES.width * .1,
       height: SIZES.height * .05,
       backgroundColor: COLORS.white,
       borderRadius: 50,
       alignItems: 'center',
       justifyContent: 'center',
    },

    close_container: {
        width: SIZES.width * .9,
        alignItems: 'flex-end',
        marginBottom: SIZES.height * .02,
    },

    bottom_container: {
        width: SIZES.width,
        alignItems: 'center' 
    },

    priceBox: {
        width: SIZES.width * .9,
        marginVertical: SIZES.height * .02,
    },


})