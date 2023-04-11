import React, { useState } from 'react'
import { View,Text, StyleSheet, TouchableOpacity, } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, FONTS, SIZES } from '../../../constants';
import formatDate from '../../../services/date';


const DatePicker1 = ({ placeholder, onChangeValue, value }) => {
    const [date, setDate] = useState(false);
    const [display, setDisplay] = useState(false);

    const selectDate = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setDisplay(false);
        setDate(formatDate(currentDate))
        let month = String(currentDate.getMonth() + 1).length == 1 ? `0${(currentDate.getMonth() + 1)}` : `${(currentDate.getMonth() + 1)}` 
        let d = String(currentDate.getDate()).length == 1 ? `0${currentDate.getDate()}` : `${currentDate.getDate()}` 
        // console.log(`${currentDate.getFullYear()}-${month}-${d}`)
        // onChangeValue && onChangeValue(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} `)
        onChangeValue && onChangeValue(`${currentDate.getFullYear()}-${month}-${d}`)
        // console.log("currentDate: ", `${currentDate.getFullYear()}-${month}-${d}`)
    }

    return (
        <View>
            <TouchableOpacity style={styles.dateBtn}  onPress={() => setDisplay(!display)}>
                <Text style={{ ...styles.dateText, color: value ? COLORS.black : "#59595A" }}>{value ? formatDate(value) : placeholder}</Text>
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

DatePicker1.defaultProps = {
    placeholder: null,
    onChangeValue: null,
    value: null,
}

export default DatePicker1;

const styles = StyleSheet.create({

    dateText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    dateBtn: {
        width: SIZES.width * .3,
        height: SIZES.height * .03,
        // borderWidth: 1,
    },

})


