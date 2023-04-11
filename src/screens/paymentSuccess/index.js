import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { COLORS, images } from '../../constants';
import HeaderLeft from '../../component/atoms/HeaderLeft';

const PaymentSuccess = ({ navigation, route }) => {
    const [success, setSuccess] = useState(route.success == "success" ? true : false)
    const paymentTitle = success ? "Booking Confirmed" : "Payment Failed"


    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            <HeaderLeft navigation={navigation} title={paymentTitle} />
            <View style={styles.imageBox}>
                <Image source={success ? images.success : images.failed} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>{success ? "Payment Successful" : "Payment Failed"}</Text>
                <Text style={styles.text}>Lorem Ipsum has been the industry's standard dummy text ever since the</Text>
                <View style={styles.line} />
                <Text style={styles.blueText}>{success ? `Transaction Number : ${route.data.transaction_id}` : "Your Payment wasn’t completed."}</Text>
                {success ?
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.text1}>Total Amount Paid</Text>
                            <Text style={styles.price}>$1,862,22{route.data.amount}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.row}>
                            <Text style={styles.text1}>Payed By</Text>
                            <Text style={styles.price}>Paytm</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.row}>
                            <Text style={styles.text1}>Transaction Date</Text>
                            <Text style={styles.price}>Wed,15 Mar 23, 10:00 AM</Text>
                        </View>
                    </View>
                    :
                    <View style={{ alignItems: 'center',}}>
                        <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.btnText}>Please try again</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}

export default PaymentSuccess;