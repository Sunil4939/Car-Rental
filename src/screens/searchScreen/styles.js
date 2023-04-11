import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center'
    },

    bgImage: {
        width: SIZES.width,
        height: SIZES.height * .35,
        alignItems: 'center',
        // borderWidth: 1,
    },

    searchBox: {
        width: SIZES.width,
        alignItems: 'center',
        // position: 'absolute',
    },

    search: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        elevation: 5,
        marginVertical: SIZES.height * .02,
    },

    searchIcon: {
        marginHorizontal: SIZES.width * .03,
    },

    input: {
        width: SIZES.width * .8,
        height: SIZES.height * .06,
        alignItems: "center",
        justifyContent: 'center',
        fontFamily: FONTS.medium,
        fontSize: 14,
        // lineHeight: 18,
        color: COLORS.black,
        // borderWidth: 1,
    },
})