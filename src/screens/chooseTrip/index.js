import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import styles from './styles';
import { Calendar } from 'react-native-calendars';
import { COLORS, FONTS, SIZES } from '../../constants';
import Icons from '../../component/atoms/Icons';
import TimePicker from '../../component/atoms/timePicker';
import DatePicker1 from '../../component/atoms/datePicker1';
import * as Progress from 'react-native-progress';
import Button1 from '../../component/atoms/buttons/Button1';


const ChooseTrip = ({ navigation }) => {

    const [postData, setPostData] = useState({
        startDate: null,
        endDate: null,
        pickUpTime: null,
        dropTime: null,
    });

    const [selectedDate, setSelectedDate] = useState({})
  
    // console.log("selected date : ", selectedDate)
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value,
        })
       
    }

    const handleSelectedDate = (oldDate, newDate) => {
        if (selectedDate.hasOwnProperty([oldDate])) {
            delete selectedDate[oldDate]
            setSelectedDate({ ...selectedDate, [newDate]: { selected: true, marked: true, selectedColor: COLORS.black }  })
        } else {
            setSelectedDate({ ...selectedDate, [newDate]: { selected: true, marked: true, selectedColor: COLORS.black } })
        }

    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.backBtn}
                            onPress={() => navigation.goBack()}
                        >
                            <Icons name={"back"} size={20} color={COLORS.black} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Choose Trip Car</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ ...styles.clearBtnText, color: "#59595A" }}>Clear</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.dateRow}>
                    <View style={styles.dateBox}>
                        <DatePicker1 placeholder={"Start Date"}
                            value={postData.startDate}
                            onChangeValue={(date) =>{ handleSelectedDate(postData.startDate, date), handleChange("startDate", date)}}
                        />
                        <TimePicker placeholder={"Pick Up Time"}
                            value={postData.pickUpTime}
                            onChangeValue={(time) => handleChange("pickUpTime", time)} />
                    </View>
                    <View>
                        <Icons name={"rightArrow"} size={20} color={COLORS.black} />
                    </View>
                    <View style={styles.dateBox}>
                        <DatePicker1 placeholder={"End Date"}
                            value={postData.endDate}
                            onChangeValue={(date) =>{ handleSelectedDate(postData.endDate, date), handleChange("endDate", date)}}
                        />
                        <TimePicker placeholder={"Drop Off Time"}
                            value={postData.dropTime}
                            onChangeValue={(time) => handleChange("dropTime", time)} />
                    </View>
                </View>
            </View>

            <View style={styles.calendarBox}>
                <Calendar
                    // hideArrows={true}
                    // monthFormat={'dd MM yyyy'}
                    style={styles.calendar}
                    // onDayPress={day => {

                    //     console.log("selected date : ", day)
                    // }}
                    markedDates={selectedDate}

                    theme={{
                        calendarBackground: COLORS.white,
                        todayTextColor: COLORS.black,
                        // todayBackgroundColor: 'rgba(36, 36, 36, 0.4)',
                        dayTextColor: COLORS.black,
                        selectedDayBackgroundColor: COLORS.black,
                        selectedDayTextColor: '#ffffff',


                        monthTextColor: COLORS.black,
                        textDayFontFamily: FONTS.medium,
                        textMonthFontFamily: FONTS.semiBold,
                        textDayFontSize: 12,
                        textMonthFontSize: 14,
                        weekVerticalMargin: 0,
                        arrowColor: COLORS.black,
                    }}
                    enableSwipeMonths={true}
                />
            </View>

            <View style={{ alignItems: 'center', }}>
                {postData.pickUpTime &&
                    <View style={styles.timeRow}>
                        <Text style={styles.timeText}>Pick Up</Text>
                        <View>
                            <View style={styles.timeBox}>
                                <Text style={styles.time}>{postData.pickUpTime}</Text>
                            </View>
                            <Progress.Bar
                                progress={.3}
                                width={SIZES.width * .7}
                                height={4}
                                style={{...styles.progressBar, }}
                                color={'#000000'}
                                unfilledColor={'#F1F1F1'}
                                borderColor={'#F1F1F1'}
                                showsText={true}
                            />
                        </View>
                    </View>
                }
                {postData.dropTime &&
                    <View style={styles.timeRow}>
                        <Text style={styles.timeText}>Drop off</Text>
                        <View>
                            <View style={styles.timeBox}>
                                <Text style={styles.time}>{postData.dropTime}</Text>
                            </View>
                            <Progress.Bar
                                progress={.8}
                                width={SIZES.width * .7}
                                height={4}
                                style={styles.progressBar}
                                color={'#000000'}
                                unfilledColor={'#F1F1F1'}
                                borderColor={'#F1F1F1'}
                                showsText={true}
                            />
                        </View>
                    </View>
                }

                {postData.startDate && postData.endDate && postData.pickUpTime && postData.dropTime &&
                    < Button1 backgroundColor={COLORS.black}
                        textColor={COLORS.white}
                        style={styles.btn}
                    >Continue</Button1>
                }
            </View>
        </View >
    )
}

export default ChooseTrip;