import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RNToasty } from 'react-native-toasty';
import { connect } from 'react-redux';
import Button1 from '../../component/atoms/buttons/Button1';
import InputWithIcon from '../../component/atoms/inputs/InputWithIcon';
import InputWithIcon1 from '../../component/atoms/inputs/InputWithIcon1';
import { COLORS, SIZES } from '../../constants';
import { SignUpApi } from '../../redux/actions/authAction';
import styles from './styles';


const SignUp = ({ navigation, SignUpApi }) => {
    const [secure, setSecure] = useState(true)
    const [secure1, setSecure1] = useState(true)
    const [checked, setChecked] = useState(false)

    const [postData, setPostData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    })
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }


    const handleSubmit = () => {
        if (postData.name && postData.email && postData.password && postData.confirm_password) {
            if (checked) {
                SignUpApi(postData, navigation)
                // console.log("postdata: ", postData)
            } else {
                RNToasty.Error({
                    title: "Please checked terms and policy",
                    duration: 2
                })
            }
        } else {
            RNToasty.Error({
                title: "Please fill all fields",
                duration: 2
            })
        }
    }
    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>Sign up</Text>
                <InputWithIcon
                    label={"Name"}
                    placeholder={"Enter Your Name"}
                    leftIcon={"user"}
                    onChangeText={(text) => handleChange("name", text)}
                    value={postData.name}
                />
                {/* <InputWithIcon
                    label={"First Name"}
                    placeholder={"Enter Your First Name"}
                    leftIcon={"user"}
                    onChangeText={(text) => setFname(text)}
                    value={fname}
                /> */}
                {/* <InputWithIcon
                    label={"Last Name"}
                    placeholder={"Enter Your Last Name"}
                    leftIcon={"user"}
                    onChangeText={(text) => setLname(text)}
                    value={lname}
                /> */}
                <InputWithIcon
                    label={"Email Id"}
                    placeholder={"Enter Your Email Id"}
                    leftIcon={"email"}
                    onChangeText={(text) => handleChange("email", text)}
                    value={postData.email}
                />
                <InputWithIcon1
                    label={"Password"}
                    placeholder={"Enter Password"}
                    leftIcon={"lock"}
                    rightIcon={secure ? "eye-off" : "eye"}
                    onPress={() => setSecure(!secure)}
                    secureTextEntry={secure}
                    onChangeText={(text) => handleChange("password", text)}
                    value={postData.password}
                />
                <InputWithIcon1
                    label={"Confirm Password"}
                    placeholder={"Enter Password"}
                    leftIcon={"lock"}
                    rightIcon={secure1 ? "eye-off" : "eye"}
                    onPress={() => setSecure1(!secure1)}
                    secureTextEntry={secure1}
                    onChangeText={(text) => handleChange("confirm_password", text)}
                    value={postData.confirm_password}
                />
                <View style={styles.row}>
                    <CheckBox
                        disabled={false}
                        value={checked}
                        tintColors={{ true: '#0F56CC', false: 'black' }}
                        onValueChange={() => setChecked(!checked)}
                        style={{ marginLeft: -5, }}
                    />
                    <View style={styles.row2}>
                        <Text style={styles.text1}>I accept the</Text>
                        <Text style={{ ...styles.text1, borderBottomWidth: 1, borderBottomColor: COLORS.black1 }}> terms of service </Text>
                        <Text style={styles.text1}>and</Text>
                        <Text style={{ ...styles.text1, borderBottomWidth: 1, borderBottomColor: COLORS.black }}> privacy policy.</Text>
                    </View>

                </View>
                <Button1 style={{ width: SIZES.width * .9 }}
                    backgroundColor={COLORS.black}
                    textColor={COLORS.white}
                    onPress={handleSubmit}
                >Sign up</Button1>
                <View style={styles.row1}>
                    <Text style={styles.text}>Already have  an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.blueText}> Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    SignUpApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)