import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { COLORS, images } from '../../constants';
import HeaderLeft from '../../component/atoms/HeaderLeft';
import { useEffect } from 'react';
import formatAMPM from '../../services/time';
import formatDate from '../../services/date';

const PaymentSuccess = ({ navigation, route }) => {
    // result = route.params && route.params.paymentResult
    const date = new Date()
    // console.log("result : ", result)

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            <HeaderLeft navigation={navigation} title={"Booking Confirmed"} />
            <View style={styles.imageBox}>
                <Image source={images.success} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Payment Successful</Text>
                <Text style={styles.text}>Lorem Ipsum has been the industry's standard dummy text ever since the</Text>
                <View style={styles.line} />
                {/* <Text style={styles.blueText}>{success ? `Transaction Number : ${route.data.transaction_id}` : "Your Payment wasn’t completed."}</Text> */}
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.text1}>Total Amount Paid</Text>
                            <Text style={styles.price}>${route.params && route.params.amount}</Text>
                        </View>
                        <View style={styles.line} />
                        {/* <View style={styles.row}>
                            <Text style={styles.text1}>Payed By</Text>
                            <Text style={styles.price}>Paytm</Text>
                        </View> */}
                        {/* <View style={styles.line} /> */}
                        <View style={styles.row}>
                            <Text style={styles.text1}>Transaction Date</Text>
                            <Text style={styles.price}> {formatDate(date)}, {formatAMPM(date)}</Text>
                        </View>
                    </View>
                   
            </View>
        </View>
    )
}

export default PaymentSuccess;