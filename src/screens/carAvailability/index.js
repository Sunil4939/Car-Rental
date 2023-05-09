import { View, Text, StatusBar, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import Dropdown from '../../component/atoms/dropdown';
import ProgressBar from '../../component/atoms/progressBar';
import Icons from '../../component/atoms/Icons';
import { RNToasty } from 'react-native-toasty';


const CarAvailability = ({ navigation, route }) => {
    console.log("data: ", route.params.data)
    const notice = ["12 hours", "24 hours",]
    const minimum = ["1 day(recommended)", "2 day(recommended)", "3 day(recommended)", "4 day(recommended)",]
    const maximum = ["5 days", "10 days", "15 days", "20 days"]

    const [postData, setPostData] = useState({
        ...route.params.data,
        advance_notice: notice[0],
        minimum_trip: minimum[0],
        maximum_trip: maximum[0],
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }


    const handleSubmit = () => {
        console.log("post data : ", postData)
        if (postData.advance_notice && postData.maximum_trip && postData.minimum_trip) {
            navigation.navigate("CarDetails", { data: postData })
        } else {
            RNToasty.Error({
                title: "Please fill all required fields",
                duration: 2
            })
        }
    }
    return (

        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            <ScrollView
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: 'center' }}>
                    {/* progress */}
                    <ProgressBar
                        progress={.54}
                        marginLeft={SIZES.width * -.05}
                    />

                    <View style={styles.contentBox}>
                        <Text style={styles.title1}>Car availability</Text>
                        <Text style={styles.title}>Advance Notice</Text>
                        <Text style={styles.text}>How much advance notice do you need before  a trip start?</Text>
                        <View style={styles.formContainer}>
                            <Dropdown
                                data={notice}
                                label={"Advance notice at home"}
                            />

                            <View style={styles.box1}>
                                <View style={styles.topRow}>
                                    <Text style={styles.title2}>Trips to get more booking</Text>
                                </View>
                                <View style={styles.content}>
                                    <Icons
                                        name={"info"}
                                        size={40}
                                        color={COLORS.black}
                                        style={{ marginRight: 10, }}
                                    />
                                    <Text style={styles.text1}>12 hours notice opens you up to
                                        nearly  68% of trips!</Text>
                                </View>
                            </View>

                            <Text style={styles.title}>Trip Duration</Text>
                            <Text style={styles.text}>What’s the shortest and longest possible trip you'll accept?</Text>
                            <View style={styles.formContainer}>
                                <Dropdown
                                    data={minimum}
                                    label={"Minimum trip duration"}
                                />

                                <View style={styles.box1}>
                                    <View style={styles.topRow}>
                                        <Text style={styles.title2}>Trips to get more booking</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Icons
                                            name={"info"}
                                            size={40}
                                            color={COLORS.black}
                                            style={{ marginRight: 10, }}
                                        />
                                        <Text style={styles.text1}>A1 day minimum opens you up to 100% of trips</Text>

                                    </View>
                                </View>
                            </View>
                            <View style={styles.formContainer}>
                                <Dropdown
                                    data={maximum}
                                    label={"Maximum trip duration"}
                                />

                                <View style={styles.box1}>
                                    <View style={styles.topRow}>
                                        <Text style={styles.title2}>Trips to get more booking</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Icons
                                            name={"info"}
                                            size={40}
                                            color={COLORS.black}
                                            style={{ marginRight: 10, }}
                                        />
                                        <Text style={styles.text1}>18% of booked trips are longer than your current maximum of 5 days</Text>

                                    </View>
                                </View>
                            </View>

                            <View style={styles.btnRow}>
                                <Button1
                                    onPress={() => navigation.goBack()}
                                >Back</Button1>
                                <Button1
                                    backgroundColor={COLORS.black}
                                    textColor={COLORS.white}
                                    onPress={handleSubmit}
                                >Next</Button1>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default CarAvailability;