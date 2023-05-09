import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { COLORS, images } from '../../constants';

const PaymentFailed = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            <View style={styles.imageBox}>
                <Image source={images.failed} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Payment Failed</Text>
                <Text style={styles.text}>Lorem Ipsum has been the industry's standard dummy text ever since the</Text>
                <View style={styles.line} />
                
                    <View style={{ alignItems: 'center', }}>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.btnText}>Please try again</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default PaymentFailed;