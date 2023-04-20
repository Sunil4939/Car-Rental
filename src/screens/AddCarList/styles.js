import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        alignItems: "center",
    },

    listContainer: {
        width: SIZES.width,
        backgroundColor: 'white',
    },

    titleBox: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black,
    },

    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.medium,
        fontSize: 28,
        color: COLORS.black,
        marginVertical: SIZES.height * .03,
    },

    contentBox: {
        alignItems: 'center',
    },

    title1: {
        width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        lineHeight: 24,
        color: COLORS.black,
        marginVertical: SIZES.height * .03,
    },

    listBox: {
        alignItems: 'center',
    },

    btnBox: {
        alignItems: 'center',
        marginVertical: SIZES.height * .03,
    },

    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})