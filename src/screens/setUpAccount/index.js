import { View, Text, StatusBar, TouchableOpacity, } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import InputWithIcon from '../../component/atoms/inputs/InputWithIcon';
import { useState } from 'react';
import { RNToasty } from 'react-native-toasty';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const SetUpAccount = ({ navigation, route }) => {
    console.log("data: ", route.params.data)
    const [postData, setPostData] = useState({
        ...route.params.data,
        strip_email: "",
        strip_phone: "",
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }


    const handleSubmit = () => {
        console.log("post data : ", postData)
        if (postData.strip_email && postData.strip_phone) {
            navigation.navigate("Quality", { data: postData })
        } else {
            RNToasty.Error({
                title: "Please fill all fields",
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
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false} >
                <View style={styles.contentBox}>
                    <Text style={styles.title1}>SET UP ACCOUNT</Text>

                    <InputWithIcon
                        label={"Email Id"}
                        placeholder={"Enter Your Email Id"}
                        leftIcon={"email"}
                        value={postData.strip_email}
                        onChangeText={(text) => handleChange("strip_email", text)}
                    />

                    <InputWithIcon
                        label={"Phone No"}
                        placeholder={"Enter Your Phone Number"}
                        leftIcon={"call"}
                        keyboardType={"numeric"}
                        maxLength={10}
                        value={String(postData.strip_phone)}
                        onChangeText={(text) => handleChange("strip_phone", Number(text))}
                    />

                    <Text style={styles.text}>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</Text>

                    <View style={styles.btnBox}>

                        {/* <View style={styles.btnRow1}>
                            <Button1
                                style={styles.btnStyle}
                            // onPress={() => navigation.goBack()}
                            >Cancel</Button1>
                            <Button1
                                backgroundColor={COLORS.black}
                                textColor={COLORS.white}
                                style={styles.btnStyle}
                            // onPress={() => navigation.navigate("Quality")}
                            >Save</Button1>
                        </View> */}
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

            </KeyboardAwareScrollView >
        </View>

    )
}

export default SetUpAccount;