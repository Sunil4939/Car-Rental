import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import Dropdown from '../../component/atoms/dropdown';
import ProgressBar from '../../component/atoms/progressBar';


const Goals = ({ navigation, route }) => {
    // console.log("data: ", route.params.data)
    const payment = ["Cover your car payment", "Generate side income","Expand an existing business", "Build a primary source of income","Not sure yet"]
    const family = ["Never","Rarely: once a week or less", "Sometimes: a few days per week", "Often: most days per week", "Always: every day"]
    const share = ["Not sure yet or just curious", "Rarely: once a week or less", "Sometimes: a few days per week", "Often: most days per week", "Always: every day"]

    
    const [postData, setPostData] = useState({
        ...route.params.data,
        financial_goal: payment[0],
        family_use: family[0],
        car_share: share[0],
    })
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }
    const handleSubmit = () => {
        console.log("post data : ", postData)
        navigation.navigate("CarAvailability", { data: postData })
        
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            {/* progress */}
            <ProgressBar
                progress={.45}
                marginLeft={SIZES.width * -.05}
            />

            <View style={styles.contentBox}>
                <Text style={{ ...styles.title1, marginBottom: SIZES.height * .02, }}>Your goals</Text>
                <Dropdown
                    data={payment}
                    requiredStyle={{ marginTop: 18, marginLeft: SIZES.width * -.1 }}
                    label={"What is your primary financial goal for sharing this car on auto passion?"}
                   onChangeText={(value) => handleChange("financial_goal", value ? value : payment[0])}
                />
                <Dropdown
                    data={family}
                    requiredStyle={{ marginTop: 18, left: SIZES.width * .18, position: "absolute" }}
                    label={"How often do you or your family currently us this car?"}
                    onChangeText={(value) => handleChange("family_use", value)}
                />
                <Dropdown
                    data={share}
                    label={"How often do you want to share your car?"}
                    onChangeText={(value) => handleChange("car_share", value)}
                />
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
    )
}

export default Goals;