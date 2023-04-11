import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center'
    },

    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: 24,
        lineHeight: 30,
        color: COLORS.black,
        marginTop: SIZES.height * .15,
        marginBottom: SIZES.height * .05,
    },

})