import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    tabBarStyle:{
        backgroundColor: COLORS.white, 
        borderRadius: 12, 
        marginHorizontal: 0, 
        paddingVertical: 8,  
        height: SIZES.height * .08, 
        paddingBottom: 8, 
        elevation: 15
    },
    
    labelStyle: {
        fontFamily: FONTS.medium,
        fontSize: 10,
        marginBottom: -2,
    },
  })