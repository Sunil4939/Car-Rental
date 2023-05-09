import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'


const InputWithLabel = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    secureTextEntry,
    label,
    labelStyle,
    required,
    inputStyle }) => {
    return (
        <View
            style={[styles.inputStyle, inputStyle]}
        >
            {label &&
                <View style={styles.row}>
                    <Text
                        style={[styles.label, labelStyle]}
                    >
                        {label}
                    </Text>
                   {required && 
                    <Text style={styles.required}>*</Text>
                   }
                </View>
            }
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"#BABFD1"}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                maxLength={maxLength}
                style={[styles.inputTextStyle, inputTextStyle]}
            />
        </View>
    )
}

InputWithLabel.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: null,
    value: '',
    keyboardType: "default",
    maxLength: null,
    secureTextEntry: false,
    label: null,
    labelStyle: null,
    inputStyle: null,
    required: true
}

export default InputWithLabel;

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
    },

    label: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
    },

    required: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        lineHeight: 20,
        color: '#FF0000',
    },

    inputStyle: {
      marginBottom: SIZES.height * .02,
    },

    inputTextStyle: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        borderColor: "#333333",
        backgroundColor: COLORS.white,
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
     },
})