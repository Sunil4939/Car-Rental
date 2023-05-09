import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../../component/atoms/buttons/Button1';
import InputWithIcon1 from '../../component/atoms/inputs/InputWithIcon1';
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import { ForgetPasswordApi } from '../../redux/actions/authAction';
import { connect } from 'react-redux';
// import { WebView } from 'react-native-webview';


const ResetPassword = ({ navigation, ForgetPasswordApi, userData }) => {
    const [secure, setSecure] = useState(true)
    const [secure1, setSecure1] = useState(true)

    // console.log("userData", userData)

    const [postData, setPostData] = useState({
         email: "trubasunil@gmail.com",
        // email: userData && userData.email,
        // password:null,
    })
    // console.log(route.params.mobile)
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const handleSubmit = () => {
        if (postData.email && postData.password) {
            ForgetPasswordApi(postData, navigation)
        } else {
            RNToasty.Error({
                title: "Please fill all fields",
                duration: 2
            })
        }
    }


    return (
        // <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1, backgroundColor: COLORS.black, }} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
                // style={styles.container}
                >
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Reset Password</Text>
                    <InputWithIcon1
                        placeholder={"New Password"}
                        leftIcon={"lock"}
                        rightIcon={secure ? "eye-off" : "eye"}
                        onPress={() => setSecure(!secure)}
                        secureTextEntry={secure}
                    />
                    <InputWithIcon1
                        placeholder={"Confirm new Password"}
                        leftIcon={"lock"}
                        rightIcon={secure1 ? "eye-off" : "eye"}
                        onPress={() => setSecure1(!secure1)}
                        secureTextEntry={secure1}
                    />


                    <Button1 style={{ width: SIZES.width * .9 }}
                        backgroundColor={COLORS.black}
                        textColor={COLORS.white}
                        onPress={() => ForgetPasswordApi(postData, navigation)}
                    // onPress={() => navigation.navigate("Login")}
                    >
                        Done
                    </Button1>
                </View>
            </KeyboardAwareScrollView>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
})

const mapDispatchToProps = {
    ForgetPasswordApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
