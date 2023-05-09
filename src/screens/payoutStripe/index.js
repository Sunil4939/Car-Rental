import { View, Text, StatusBar, TouchableOpacity, } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import ProgressBar from '../../component/atoms/progressBar';


const PayoutStripe = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            {/* progress */}
            <ProgressBar
                progress={.82}
                marginLeft={SIZES.width * -.09}
            />

            <View style={styles.contentBox}>
                <Text style={styles.title1}>Payout Stripe</Text>
                <Text style={styles.text}>To complete your Auto Passion Listing,
                    Please set up your payout account with strip,
                    a leading payout provider.</Text>

                <View style={styles.box1}>
                    <View style={styles.topRow}>
                        <View style={styles.stripBtn}>
                            <Text style={styles.strip}>Strip</Text>
                        </View>
                        <Text style={styles.title2}>Set up Strip account</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text1}>To receive your earning, you need to set up
                            an account with stripe, our payment provider.</Text>
                        <Text style={styles.text1}>In the next step, stripe will verify your identity
                            and account information.</Text>
                        <Text style={styles.text1}>Once your account is verified, you’ll provide
                            your direct deposit information.</Text>
                        <TouchableOpacity style={styles.btn}
                         onPress={() => navigation.navigate("SetUpAccount", { data: route.params.data })}
                        >
                            <Text style={[styles.blueText, { position: 'absolute', left: 0 }]}>SET UP ACCOUNT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.btnRow}>
                    <Button1
                        onPress={() => navigation.goBack()}
                    >Back</Button1>
                    <Button1
                        backgroundColor={COLORS.black}
                        textColor={COLORS.white}
                        onPress={() => navigation.navigate("SetUpAccount", { data: route.params.data })}
                    >Next</Button1>
                </View>
            </View>

        </View>
    )
}

export default PayoutStripe;