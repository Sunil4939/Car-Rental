import React, { useState } from "react";
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import formatAMPM from "../../../services/time";
import { COLORS, FONTS, SIZES } from "../../../constants";


const TimePicker = ({  onChangeValue, value, placeholder }) => {
    const [timePicker, setTimePicker] = useState(false);

    const showTimePicker = () => {
        setTimePicker(true);
    };
    const onTimeSelected = (event, value) => {
        onChangeValue && onChangeValue(formatAMPM(value))
        setTimePicker(false);
    };
    return (
        <View>
            {timePicker && (
                <DateTimePicker
                    value={new Date()}
                    mode={'time'}
                    display="default"
                    onChange={onTimeSelected}
                />
            )}
            <TouchableOpacity style={styles.dateBtn} onPress={() => showTimePicker()}>
                <Text style={{ ...styles.dateText, color: value ? COLORS.black : "#59595A" }}>{value ? value : placeholder}</Text>
            </TouchableOpacity>
        </View>
    )
}

TimePicker.defaultProps = {
    placeholder: null,
    onChangeValue: null,
    value: "",
}


export default TimePicker;


const styles = StyleSheet.create({

    dateText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    dateBtn: {
        width: SIZES.width * .28,
        height: SIZES.height * .03,
        // borderWidth: 1,
    },


})