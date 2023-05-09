import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../../component/atoms/buttons/Button1';
import InputWithIcon1 from '../../component/atoms/inputs/InputWithIcon1';
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import InputWithIcon from '../../component/atoms/inputs/InputWithIcon';
import CheckBox from '@react-native-community/checkbox';

const EnterMobileNo = ({ navigation }) => {
    const [checked, setChecked] = useState(false)
    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <View style={{ alignItems: 'center', }}>
                <Text style={styles.title}>Enter Mobile Phone</Text>
                <Text style={styles.text}>We ask for your number to connect hosts with
                    guests. We only share your number after a trip
                    has been booked. we’ll send you a text message
                    with a code to verify your number. </Text>
                <InputWithIcon
                    label={"Mobile number"}
                    placeholder={"Enter Mobile number"}
                    required={false}
                    leftIcon={"call"}
                    keyboardType={"numeric"}
                    maxLength={10}
                />
                <View style={styles.row}>
                    <CheckBox
                        disabled={false}
                        value={checked}
                        tintColors={{ true: '#0F56CC', false: 'black' }}
                        onValueChange={() => setChecked(!checked)}
                        style={styles.checkBox}
                    />
                    <Text style={styles.text1}>Enable text message notifications to receive important account updates</Text>
                </View>
                <Button1 style={styles.btn}
                backgroundColor={COLORS.black}
                textColor={COLORS.white}
            onPress={() => navigation.navigate("ConfirmMobile")}
            >
                Send code
            </Button1>
            </View>
            
        </KeyboardAwareScrollView>
    )
}

export default EnterMobileNo;