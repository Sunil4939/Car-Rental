import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../../component/atoms/buttons/Button1';
import InputWithIcon1 from '../../component/atoms/inputs/InputWithIcon1';
import { COLORS, SIZES } from '../../constants';
import styles from './styles';

const ResetPassword = ({ navigation }) => {
    const [secure, setSecure] = useState(true)
    const [secure1, setSecure1] = useState(true)
    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            style={styles.container}>
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
                    onPress={() => navigation.navigate("Login")}
                >
                    Done
                </Button1>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default ResetPassword;