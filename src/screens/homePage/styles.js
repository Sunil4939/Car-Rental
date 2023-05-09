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
        backgroundColor: COLORS.light,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        alignItems: 'center',
    },

    menuCircle: {
        width: SIZES.width * .06,
        height: SIZES.height * .03,
        borderRadius: 100,
        backgroundColor: COLORS.white,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        right: SIZES.width * -.02,
        zIndex: 2,
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

    profileBox: {
        width: SIZES.width * .14,
        height: SIZES.height * .07,
        // borderWidth: 1,
        borderRadius: 100,
        // overflow: 'hidden',
        borderColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },

    profile: {
        width: SIZES.width * .07,
        height: SIZES.height * .035,
    },

    profileImg: {
        width: SIZES.width * .14,
        height: SIZES.height * .069,
        borderRadius:100,
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

    userName: {
        fontFamily: FONTS.semiBold,
        color: COLORS.black,
        fontSize: 18,
    },

    searchBox: {
        width: SIZES.width,
        alignItems: 'center',
        backgroundColor: COLORS.light,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    search: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginTop: SIZES.height * .01,
        marginBottom: SIZES.height * .03,
    },

    searchIcon: {
        marginHorizontal: SIZES.width * .03,
    },

    input: {
        width: SIZES.width * .8,
        // height: SIZES.height * .06,
        alignItems: "center",
        justifyContent: 'center',
        fontFamily: FONTS.medium,
        fontSize: 14,
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







    location: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black,
        // marginBottom: -4,
    },

    location_box: {
        width: SIZES.width * .45,
        // alignItems: 'flex-start',
        alignItems: 'center',
    },
    
    button: {
        width: SIZES.width * .4,
        height: SIZES.height * .05,
        backgroundColor: COLORS.light,
        borderRadius: 8,
        marginBottom: SIZES.height * .01,
        justifyContent: 'center',
        paddingLeft: SIZES.width * .05,
    },
    title2: {
        fontFamily: FONTS.bold,
        fontSize: 18,
        color: COLORS.black, 
        // marginBottom: -5,
        marginBottom: SIZES.height * .02,
    },

})