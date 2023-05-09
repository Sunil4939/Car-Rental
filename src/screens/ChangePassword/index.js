import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../../component/atoms/buttons/Button1';
import InputWithIcon1 from '../../component/atoms/inputs/InputWithIcon1';
import { COLORS, SIZES } from '../../constants';
import styles from './styles';

const ChangePassword = ({ navigation }) => {
    const [secure, setSecure] = useState(true)
    const [secure1, setSecure1] = useState(true)
    const [secure2, setSecure2] = useState(true)
    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <View style={{ alignItems: 'center', }}>
                <Text style={styles.title}>Change Password</Text>
                <InputWithIcon1
                    placeholder={"Current Password"}
                    leftIcon={"lock"}
                    rightIcon={secure1 ? "eye-off" : "eye"}
                    onPress={() => setSecure1(!secure1)}
                    secureTextEntry={secure1}
                />
                <InputWithIcon1
                    placeholder={"New Password"}
                    leftIcon={"lock"}
                    rightIcon={secure ? "eye-off" : "eye"}
                    onPress={() => setSecure(!secure)}
                    secureTextEntry={secure}
                />
                <Text style={styles.text}>Your password must include at least 8 characters.</Text>

                <InputWithIcon1
                    placeholder={"Re-enter new Password"}
                    leftIcon={"lock"}
                    rightIcon={secure1 ? "eye-off" : "eye"}
                    onPress={() => setSecure2(!secure2)}
                    secureTextEntry={secure2}
                />
                <Button1 style={styles.btn}
                    backgroundColor={COLORS.black}
                    textColor={COLORS.white}
                // onPress={() => navigation.navigate("Login")}
                >
                    Change
                </Button1>
            </View>

        </KeyboardAwareScrollView>
    )
}

export default ChangePassword;