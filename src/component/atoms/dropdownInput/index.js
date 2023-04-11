import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Icons from '../Icons'
import SelectDropdown from 'react-native-select-dropdown'


const DropdownInput = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    label,
    leftIcon,
    data,
    labelStyle,
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
                <View
                    style={styles.icon}
                >
                    <Icons
                        name={leftIcon}
                        size={20}
                        color={COLORS.black}
                    />
                </View>
                <SelectDropdown
                    dropdownIconPosition={'right'}
                    rowTextStyle={{ textAlign: 'center', padding: 0 }}
                    renderDropdownIcon={() => (
                        <Icons name="down" size={15} style={styles.down} color={COLORS.black} />
                    )}
                    dropdownStyle={styles.dropDown}
                    buttonStyle={styles.dropDownBtnStyle}
                    buttonTextStyle={styles.dropDownTextStyle}
                    data={data}
                    defaultValueByIndex={0}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                        onChangeText && onChangeText(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
                {/* <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={"#BABFD1"}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    style={[styles.inputTextStyle, inputTextStyle]}
                /> */}
            </View>
        </View>
    )
}

DropdownInput.defaultProps = {
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
    data: []
}

export default DropdownInput;

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
        overflow: "hidden",
    },

    dropDown: {
        height: "30%",
        borderRadius: 8,
    },
    dropDownBtnStyle: {
        width: SIZES.width * .77,
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
        // borderWidth: 1,
        borderRadius: 8,
        // borderColor: "#333333",
    },
    dropDownTextStyle: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
        textAlign: 'left',
    },
})