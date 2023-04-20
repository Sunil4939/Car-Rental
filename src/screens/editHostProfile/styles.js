import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center'
    },

    headerBox: {
        alignItems: 'center',
    },

    header: {
        backgroundColor: COLORS.light,
    },
    header1: {
        width: SIZES.width,
        height: SIZES.height * .08,
        backgroundColor: COLORS.light,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    profileImageBox: {
        width: SIZES.width * .3,
        height: SIZES.height * .15,
        borderRadius: SIZES.width * .1,
        // overflow: 'hidden',
        // borderWidth: 1,
        marginTop: SIZES.height * -.075,
    },

    profileImage: {
        width: SIZES.width * .3,
        height: SIZES.height * .148,
        borderRadius: SIZES.width * .15,
    },

    editBtn: {
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: SIZES.height * .01,
        right: SIZES.width * .03,
        width: SIZES.width * .06,
        height: SIZES.height * .03,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 5,
        // borderWidth: 1,
    },

    edit: {
        width: 14,
        height: 22,
    },

    form: {
        // width: SIZES.width * .9,
        alignItems: 'center',
        marginTop: SIZES.height * .05,
    },

    // title: {
    //     width: SIZES.width * .9,
    //     fontFamily: FONTS.semiBold,
    //     fontSize: 24,
    //     lineHeight: 30,
    //     color: COLORS.black,
    //     marginTop: SIZES.height * .15,
    //     marginBottom: SIZES.height * .05,
    // },

    btnRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .05,
    },
})