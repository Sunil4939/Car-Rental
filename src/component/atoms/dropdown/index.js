import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import SelectDropdown from 'react-native-select-dropdown'
import Icons from '../Icons'


const Dropdown = ({
    data,
    value,
    requiredStyle,
    defaultValue,
    label,
    labelStyle,
    onChangeText,
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
                        <Text style={{...styles.required, ...requiredStyle}}>*</Text>
                    }

                </View>

            }
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
                // search={true}
                // searchPlaceHolder={"Search here"}
                // renderSearchInputLeftIcon={()=> (
                //     <Icons name="search" size={20} style={styles.down} color={COLORS.light1} />
                // )}
                // defaultValueByIndex={0} 
                defaultValueByIndex={value ? data.indexOf(value) : 0}
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
        </View>
    )
}

Dropdown.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    value: null,
    label: "",
    labelStyle: null,
    inputStyle: null,
    required: true,
    data: null,
    defaultValue: null,
    requiredStyle: null,
}

export default Dropdown;

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // alignItems: "center",
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

    dropDown: {
        height: "30%",
        borderRadius: 7,
    },
    dropDownBtnStyle: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#333333",
    },
    dropDownTextStyle: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
        textAlign: 'left',
    },
})