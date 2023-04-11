import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {

    // Primary
    primary: '#FF7900',

    // secondary
    secondary: "#24113B",
   

    // light
    light: "#F1F1F1",
    light1: "#8D8D8D",
    light2: "#808080",
    light3: "#777777",

    //white 
    white: "#FFFFFF",
    white1: "#F3F3F3",
    white2: "#D9D9D9",

    // lightWhite
    lightWhite: "#F1F1F1",

    // black
    black: "#000000",
    black1: "#232323",
    black2: "#444444",
    black3: "#2D2D2D",
    black4: "#555555",
   
    // grey
    grey: "#616161",
    grey1: "#818181",

    // lightGray
    lightGray: "#C1C1C1",
    lightGrey2: "#E1E1E1",

    // blue
    blue: "#0F56CC",
    blue1: "#2F95C4",
    blue2:"#07A3BC",

    // yellow
    yellow: "#FFC107",

    // orange
    orange: "#FF3D00",

    // green
    green: "#00FF47",
    green1: "#34C759",

}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding1: 15,
    margin: 20,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    //Font family
    black: "Inter-Black",
    bold: "Inter-Bold",
    extraBold: "Inter-ExtraBold",
    extraLight: "Inter-ExtraLight",
    semiBold: "Inter-SemiBold",
    medium: "Inter-Medium",
    regular: "Inter-Regular",
    light: "Inter-Light",
    thin: "Inter-Thin",

    largeTitle: { fontFamily: "Poppins Black 900", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins Bold 700", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins Bold 700", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins SemiBold 600", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins SemiBold 600", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins SemiBold 600", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Poppins Regular 400", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins Regular 400", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins Regular 400", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins Regular 400", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins Regular 400", fontSize: SIZES.body5, lineHeight: 22 },
};

export const darkTheme = {
    backgroundColor: COLORS.darkBackground,
}

export const lightTheme = {
    backgroundColor: COLORS.white,
}

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;