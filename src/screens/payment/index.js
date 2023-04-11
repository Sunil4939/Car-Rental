import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
import Icons from '../../component/atoms/Icons';
import { COLORS, SIZES, icons } from '../../constants';
import styles from './styles';
import RazorpayCheckout from 'react-native-razorpay';

const PaymentButton = ({ source, iconStyle, onPress, title, }) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={onPress ? onPress : null}
        >
            <View
                style={styles.row}
            >
                <View
                    style={styles.iconBox}
                >
                    <Image source={source} style={{ ...styles.iconStyle, ...iconStyle }} resizeMode='contain' />
                    
                </View>
                <View>
                    <Text style={styles.btnText}>{title}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const Payment = ({ navigation }) => {

    const handleRazorpay = () => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: '<YOUR_KEY_ID>',
            amount: '5000',
            name: 'Acme Corp',
            order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
            prefill: {
                email: 'gaurav.kumar@example.com',
                contact: '9098194917',
                name: 'Gaurav Kumar'
            },
            theme: { color: '#53a20e' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        })
    }
    return (
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />

            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Icons name={"back"} size={20} color={COLORS.black} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.title}>Pay $1,862.22</Text>
                        <View style={{ flexDirection: 'row',}}>
                            <Text style={styles.date}>Wed,15 Mar 23, 10:00 AM</Text>
                            <Icons name={"rightArrow"} size={15} color={COLORS.black} style={{marginHorizontal: SIZES.width * .03}} />
                            <Text style={styles.date}>Wed,15 Mar 23, 10:00 AM</Text>
                        </View>
                    </View>

                </View>

            </View>


            <View style={{ ...styles.button, marginTop: SIZES.height * .02, }}>
                <Text style={styles.buttonText}>Preferred Payment Method</Text>
            </View>
            <PaymentButton
                source={icons.googlePay}
                title={"Google Pay"}
                onPress={() => handleRazorpay()}
            />
            <PaymentButton
                source={icons.paytm}
                title={"Paytm UPI"}
            />
            <PaymentButton
                source={icons.phonePay}
                title={"PhonePe"}
            />

            <View style={styles.button}>
                <Text style={styles.buttonText}>Other Payment Options</Text>
            </View>

            <PaymentButton
                source={icons.netBanking}
                title={"Net Banking"}
                onPress={() => navigation.navigate("PaymentSuccess")}
            />
            <PaymentButton
                source={icons.wallet}
                title={"Credit / Debit Card"}
            />
            <PaymentButton
                source={icons.upi}
                title={"UPI"}
            />


        </View>
    )
}

export default Payment;