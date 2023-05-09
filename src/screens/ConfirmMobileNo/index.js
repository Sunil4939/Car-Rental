import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../../component/atoms/buttons/Button1';
import InputWithIcon1 from '../../component/atoms/inputs/InputWithIcon1';
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import InputWithIcon from '../../component/atoms/inputs/InputWithIcon';

const ConfirmMobile = ({ navigation }) => {

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <View style={{ alignItems: 'center', }}>
                <View style={styles.text_box}>
                    <Text style={styles.text}>Please enter the code sent to </Text>
                    <Text style={styles.text}>+91 987456123</Text>
                </View>

                <InputWithIcon
                    placeholder={"Enter authentication code"}
                    leftIcon={"call"}
                    keyboardType={"numeric"}
                />
                <View style={styles.row}>
                    <Text style={styles.text2}>Didn’t receive the text? </Text>
                    <TouchableOpacity>
                        <Text style={styles.text1}>Resend code.</Text>
                    </TouchableOpacity>
                </View>

                <Button1 style={styles.btn}
                    onPress={() => navigation.goBack()}
                >
                    Verify
                </Button1>
            </View>

        </KeyboardAwareScrollView>
    )
}

export default ConfirmMobile;