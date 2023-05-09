import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import SelectDropdown from 'react-native-select-dropdown'


const InputWithLabel1 = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    data,
    secureTextEntry,
    onChangeValue,
    rightText,
    label,
    labelStyle,
    required,
    dropDownValue,
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
            <View style={styles.row1}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={"#BABFD1"}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    style={[styles.inputTextStyle, inputTextStyle]}
                />
                {/* {data && */}
                     {/* <Text style={styles.rightText}>{rightText}</Text> */}
                    <SelectDropdown
                        dropdownStyle={styles.dropDown}
                        buttonStyle={styles.dropDownBtnStyle}
                        buttonTextStyle={styles.dropDownTextStyle}
                        data={data}      
                        defaultValueByIndex={dropDownValue}
                        // defaultValueByIndex={dropDownValue ? data.indexOf(value) : 0}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            onChangeValue && onChangeValue(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                {/* } */}
            </View>
        </View>
    )
}

InputWithLabel1.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: null,
    value: null,
    keyboardType: "default",
    maxLength: null,
    secureTextEntry: false,
    label: null,
    labelStyle: null,
    inputStyle: null,
    required: true,
    rightText: null,
    onChangeValue: null,
    dropDownValue: 0
}

export default InputWithLabel1;

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
        width: SIZES.width * .68,
        height: SIZES.height * .06,
        paddingLeft: 15,
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
    },

    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#333333",
        backgroundColor: COLORS.white,
    },

    rightText: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
    },

    dropDownBtnStyle: {
        // borderWidth: 1,
        width: SIZES.width * .2,
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
    },

    dropDownTextStyle: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
        textAlign: 'left',
    },
    dropDown: {
        borderRadius: 8,
    },
})