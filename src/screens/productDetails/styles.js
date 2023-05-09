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

    tripBox: {
        width: SIZES.width,
        // height: SIZES.height * .3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.light,
        paddingVertical: SIZES.height * .03,
        marginVertical: SIZES.height * .02,
    },

    tripBoxRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: "#E1E1E1",
        backgroundColor: COLORS.white,
        borderRadius: 8,
    },

    btnBox: {
        width: SIZES.width * .36,
    },

    dateBtnBox: {
        borderRightWidth: 1,
        borderRightColor: '#E1E1E1',
        width: SIZES.width * .5,
    },

    dateText: {
        width: SIZES.width * .32,
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
        paddingLeft: SIZES.width * .03,
    },

    dateBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    tripLabel: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.black,
        // marginTop: SIZES.height * .02,
        marginBottom: 4,
    },

    featuresContainer: {
        width: SIZES.width * .9,
        marginVertical: SIZES.height * .02,
    },

    featuresBox: {
        backgroundColor: COLORS.light,
        paddingVertical: SIZES.height * .02,
        borderRadius: 20,

    },

    featureRow: {
        width: SIZES.width * .4,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.height * .01,
        marginHorizontal: SIZES.width * .03,
    },

    featureIcon: {
        width: SIZES.width * .06,
        height: SIZES.height * .03,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
        borderRadius: 30,
        marginRight: 5,
    },

    featureText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        color: COLORS.black,
        marginBottom: SIZES.height * .013,
    },

    descriptionBox: {
        width: SIZES.width * .9,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
    },

    readMoreText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: "#0F56CC",
        borderBottomWidth: 1,
        borderBottomColor: '#0F56CC',
    },

    hr_line1: {
        width: SIZES.width,
        height: 1,
        backgroundColor: '#E1E1E1',
        marginVertical: SIZES.height * .02,
    },

    car_basic_row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.light,
        paddingVertical: SIZES.height * .02,
        borderRadius: 50,
        marginBottom: SIZES.height * .02,
    },

    featureRow1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: SIZES.width * .03,
    },

    ratingContainer: {
        width: SIZES.width * .9,
        marginVertical: SIZES.height * .02,
    },

    ratingTitle: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: "#333333",
    },

    rating_title_row: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: SIZES.height * .01,
    },

    rating_title1: {
        fontFamily: FONTS.medium,
        fontSize: 18,
        color: "#333333",
    },

    star: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
    },

    rating_row: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .01,
    },

    rating_row1: {
        flexDirection: "row",
        alignItems: 'center',
    },

    rating_row_text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
    },

    rating_text1: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.black,
    },

    progressBar: {
        marginRight: SIZES.width * .03,
        borderRadius: 20,
    },

    rating_card_container: {
        width: SIZES.width,
        marginVertical: SIZES.height * .02
    },

    hostImgBox: {
        width: SIZES.width * .14,
        height: SIZES.height * .0695,
        borderRadius: 100,
        overflow: 'hidden',
        marginRight: SIZES.width * .03,
    },

    hostImage: {
        width: SIZES.width * .14,
        height: SIZES.height * .07,
        borderRadius: 100,
    },

    hostContainer: {
        width: SIZES.width * .9,
        marginVertical: SIZES.height * .02,
    },

    hostRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    host_name: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black,
    },

    host_subtitle: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.black,
    },

    host_title_box: {
        width: SIZES.width * .7,
    },

    hostIconRow: {
        flexDirection: 'row',
        // alignItems:'center',
        marginTop: SIZES.height * .02,
    },

    hostIconBox: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        marginRight: SIZES.width * .03,
        alignItems: 'center',
        justifyContent: "center",
    },

    handBox: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 50,
        marginRight: SIZES.width * .03,
    },

    hostIcon: {
        width: SIZES.width * .08,
        height: SIZES.height * .04,
    },

    host_text_box: {
        width: SIZES.width * .8,
    },

    host_text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
        marginBottom: SIZES.height * .005,
    },

    more_container: {
        width: SIZES.width * .9,
    },

    infoTitle: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        color: COLORS.black,
    },

    infoText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
    },

    safetyTitle: {
        fontFamily: FONTS.medium,
        fontSize: 18,
        color: COLORS.black,
    },

    safetyBox: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .01,
    },

    safety_text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
    },

    safetyRow: {
        width: SIZES.width * .5,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },

    booking_title: {
        fontFamily: FONTS.bold,
        fontSize: 18,
        color: COLORS.black,
    },

    booking_text: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
    },

    bookingBox: {
        width: SIZES.width * .9
    },

    dropDown: {
        height: "30%",
        borderRadius: 7,
    },
    dropDownBtnStyle: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#333333",
        marginTop: SIZES.height * .015,
    },
    dropDownTextStyle: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
        textAlign: 'left',
    },

    pickup_title: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.black,
        marginTop: SIZES.height * .015,
    },

    resource_title: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        color: COLORS.black,
        // marginTop: SIZES.height * .015,
    },

    resource_box: {
       width: SIZES.width * .9,
        marginTop: SIZES.height * .02,
    },

    toggleContainerStyle: {
        // marginTop: 16,
        width: 36,
        height: 18,
        borderRadius: 25,
        marginTop: -3,
        marginRight: SIZES.width * .02,
    },

    toggleBox: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
       
    },

    toggleCircleStyle: {
        width: 15,
        height: 15,
        borderRadius: 15,
    },

    toggle_row: {
        flexDirection: 'row',
        alignItems: "center",
    },

    resource_box: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .015,
    },

    resource_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: 'space-between',
        marginTop: SIZES.height * .015,
    },

    toggle_title: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black,
    },

    toggle_price: {
        width: SIZES.width * .3,
        fontFamily: FONTS.medium,
        fontSize: 13,
        color: COLORS.black,
    },

    resource_text: {
        fontFamily: FONTS.light,
        fontSize: 12,
        color: COLORS.black,
        marginTop: SIZES.height * .01,
    },

    buttonBox: {
        width: SIZES.width * .9,
        alignItems: 'center',
        marginTop: SIZES.height * .05,
    },

    bottom_sheet: {
        // width: SIZES.width * .9,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: COLORS.white,
    },

    bottom_top_row: {
        width: SIZES.width * .9,
        height: SIZES.height * .1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    bottom_text: {
        width: SIZES.width * .9,
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
        marginBottom: SIZES.height * .02,
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

    btn_style: {
        width: SIZES.width * .9,
        marginBottom: SIZES.height * .02,
    },

    no_data_box: {
        width: SIZES.width * .9,
        marginBottom: SIZES.height * .02,
        // height: SIZES.height * .4,
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    no_data: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        color: COLORS.black,
    },





    inputTextStyle: {
        width: SIZES.width * .9,
        // height: SIZES.height * .06,
        fontFamily: FONTS.regular,
        fontSize: 15,
        color: COLORS.black,
        paddingLeft: 10,
        paddingVertical: SIZES.height * .01,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#333333",
        backgroundColor: COLORS.white,
        textAlignVertical: 'top',
        marginBottom: SIZES.height * .02,
    },

    rating_row2: {
        width: SIZES.width * .6,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },
})