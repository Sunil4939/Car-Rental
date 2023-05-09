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
    
  
    title_box: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .02,
        // marginBottom: SIZES.height * .02,
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        color: COLORS.black,
        marginBottom: -6,
        // marginTop: SIZES.height * -.03,
    },
    btnRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .03,
    }, 
    btn1: {
        width: SIZES.width * .4,
        height: SIZES.height * .06,
    },
    
   
   
    btn: {
        width: SIZES.width,
        borderBottomWidth: 1,
        borderBottomColor: "#DBDBDB",
        paddingHorizontal: SIZES.width * .05,
        // marginBottom: SIZES.height * .02,
        paddingVertical: SIZES.height * .015,
    },
    btn_title: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black,
    },
    
    btn_text: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        marginBottom: -2,
        color: COLORS.black,
    },
    

    bottom_sheet: {
        width: SIZES.width,
        // height: SIZES.height * .4,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLORS.white,
    },

    bottom_title_box: {
        width: SIZES.width * .9,
        marginVertical: SIZES.height * .02,
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    bottom_text: {
        width: SIZES.width * .9,
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
        marginBottom: SIZES.height * .04,
    },
    radioBtnRow: {
        width: SIZES.width * .9,
        // height: SIZES.height * .06,
        // borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        marginBottom: SIZES.height * .02,
    },
    radioLabelTxt: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        // marginBottom: -3,
        color: COLORS.black,
        marginLeft: SIZES.width * .01,
    },
})