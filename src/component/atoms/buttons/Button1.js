import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'

const Button1 = ({ backgroundColor, style, children, textColor, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.btn, ...style, backgroundColor: backgroundColor }}
      onPress={onPress}
    >
      <Text style={{ ...styles.btnText, color: textColor }}>{children}</Text>
    </TouchableOpacity>
  )
}

Button1.defaultProps = {
  backgroundColor: COLORS.white,
  style: null,
  textColor: COLORS.black,
  children: null,
  onPress: null,
}

export default Button1;

const styles = StyleSheet.create({
  btn: {
    width: SIZES.width * .43,
    height: SIZES.height * .06,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#333333",
  },

  btnText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.black,
  },
})