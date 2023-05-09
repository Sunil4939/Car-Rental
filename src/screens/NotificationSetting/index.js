import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import SwitchToggle from 'react-native-switch-toggle';

const NotificationSetting = ({ navigation }) => {
    const [toggle, setToggle] = useState(true)
    const [toggle1, setToggle1] = useState(true)
    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <View style={{ alignItems: 'center', }}>
                <View style={styles.title_box}>
                <Text style={styles.title}>Notification Settings</Text>
                </View>


                <View style={styles.box}>
                    <Text style={styles.title1}>Mobile Notifications</Text>
                    <View style={styles.toggle_row}>
                        <Text style={styles.text}>Enable text message notification</Text>
                        <SwitchToggle
                            // switchOn={toggle.includes(data.item.id)}
                            switchOn={toggle}
                            circleColorOff={COLORS.white}
                            circleColorOn={COLORS.white}
                            backgroundColorOn={COLORS.blue}
                            backgroundColorOff={COLORS.lightGrey2}
                            containerStyle={styles.toggleContainerStyle}
                            circleStyle={styles.toggleCircleStyle}
                            onPress={() => setToggle(!toggle)}
                        />
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.title1}>Email Notifications</Text>
                    <View style={styles.toggle_row}>
                        <Text style={styles.text}>Email Notifications</Text>
                        <SwitchToggle
                            // switchOn={toggle.includes(data.item.id)}
                            switchOn={toggle1}
                            circleColorOff={COLORS.white}
                            circleColorOn={COLORS.white}
                            backgroundColorOn={COLORS.blue}
                            backgroundColorOff={COLORS.lightGrey2}
                            containerStyle={styles.toggleContainerStyle}
                            circleStyle={styles.toggleCircleStyle}
                            onPress={() => setToggle1(!toggle1)}
                        />
                    </View>
                </View>

            </View>

        </KeyboardAwareScrollView>
    )
}

export default NotificationSetting;