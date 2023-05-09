import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Icons from '../Icons'


const InputWithIcon = ({
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
                <View style={styles.labelBox}>
                    <Text
                    style={[styles.label, labelStyle]}
                >
                    {label}
                </Text>
                </View>
            }

            <View style={styles.inputBox}>
                <Icons
                    name={leftIcon}
                    size={20}
                    color={COLORS.black}
                    style={styles.icon}
                />
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
        </View>
    )
}

InputWithIcon.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: null,
    value: null,
    keyboardType: "default",
    maxLength: null,
    label: null,
    labelStyle: null,
    inputStyle: null,
    leftIcon: "email",
    editable: true,
}

export default InputWithIcon;

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

    labelBox: {
        backgroundColor: COLORS.white,
        position: "absolute",
        top: -10,
        left: SIZES.width * .05,
        zIndex: 99,
    },

    inputStyle: {
        marginBottom: SIZES.height * .03,
    },

    icon: {
        // width: SIZES.width * .1,
        // alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: COLORS.light1,
        paddingHorizontal: SIZES.width * .03,
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
        // borderWidth: 1,
        width: SIZES.width * .77,
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
        paddingLeft: 10,
    },
})