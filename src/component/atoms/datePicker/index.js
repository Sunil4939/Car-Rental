import React, { useState } from 'react'
import { ScrollView, View, TextInput, Text, StatusBar, StyleSheet, TouchableOpacity, Image } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Icons from '../Icons';
import { COLORS, FONTS, SIZES } from '../../../constants';


const DatePicker = ({ label, placeholder,labelStyle,required, onChangeText }) => {
    const [date, setDate] = useState(false);
    const [display, setDisplay] = useState(false);

    const selectDate = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setDisplay(false);
        setDate(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} `)
        // setDate(`${currentDate.getDate()} / ${currentDate.getMonth() + 1} / ${currentDate.getFullYear()} `);
        onChangeText && onChangeText(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} `)
    }

    return (
        <View style={styles.inputBox}>
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
            {/* <Text style={styles.labels}>{label}</Text> */}

            <TouchableOpacity style={styles.input} onPress={() => setDisplay(!display)} >
                <Text style={styles.inputTextStyle}>{date ? date : placeholder}</Text>
                <Icons
                    name={"calendar"}
                    size={25}
                    color={COLORS.black}
                />
            </TouchableOpacity>
            {display && (
                <DateTimePicker
                    testID="dateTimePicker1"
                    value={new Date()}
                    mode={'date'}
                    display="default"
                    onChange={selectDate}
                />
            )}
        </View>
    )
}

DatePicker.defaultProps = {
    label: null,
    placeholder: null,
    labelStyle: null,
    required: true,
    onChangeText: null,
}

export default DatePicker;

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

    inputBox: {
        marginBottom: SIZES.height * .02,
    },
    input: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        borderColor: "#333333",
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputTextStyle: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
    },

})