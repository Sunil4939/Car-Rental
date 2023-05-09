import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Icons from '../Icons'


const Input1 = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    label,
    leftIcon,
    labelStyle,
    editable,
    inputStyle }) => {
    return (
        <View
            style={[styles.inputStyle, inputStyle]}
        >
            {label &&
                <Text
                    style={[styles.label, labelStyle]}
                >
                    {label}
                </Text>
            }

            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"#BABFD1"}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                maxLength={maxLength}
                style={[styles.inputTextStyle, inputTextStyle]}
                editable={editable}
            />
        </View>
    )
}

Input1.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: null,
    value: null,
    keyboardType: "default",
    maxLength: null,
    label: "null",
    labelStyle: null,
    inputStyle: null,
    leftIcon: "email",
    editable: true,
}

export default Input1;

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
    },

    label: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
    },



    inputStyle: {
        marginBottom: SIZES.height * .03,
    },

    inputBox: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#333333",
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
    },

    inputTextStyle: {
        width: SIZES.width * .9,
        // height: SIZES.height * .06,
        fontFamily: FONTS.regular,
        fontSize: 15,
        color: COLORS.black,
        paddingLeft: 10,
        paddingVertical: SIZES.height * .01,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#333333",
        backgroundColor: COLORS.white,
    },
})