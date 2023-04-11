import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import styles from './styles';
import { COLORS, } from '../../constants';
import HeaderLeft from '../../component/atoms/HeaderLeft';
import Icons from '../../component/atoms/Icons';
import Button1 from '../../component/atoms/buttons/Button1';
import { StoreCarBookingApi } from '../../redux/actions/productAction';
import { connect } from 'react-redux';
// import { StripeProvider } from '@stripe/stripe-react-native';


const ButtonBox = ({ iconName, title, text }) => {
    return (
        <View style={styles.box} >
            <View style={styles.iconBox}>
                <Icons name={iconName} size={20} color={COLORS.black} />
            </View>
            <View style={styles.content_box}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text1}>{text}</Text>
            </View>
        </View>
    )
}

const ApprovedDrive = ({ navigation , StoreCarBookingApi}) => {


    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            <HeaderLeft navigation={navigation} title={"Get approved to Drive"} />
            <View style={styles.textBox}>
                <Text style={styles.text}>Content here, content here', making it look like readable English. Many desktop publishing packages and web page editor...</Text>
            </View>

            <View style={styles.box_container}>
                <ButtonBox iconName={"user"} title={"Profile Photo"}
                    text={"Your Auto Passion host will use it to identify you at pickup"} />
                <ButtonBox iconName={"call"} title={"Phone Number"}
                    text={"Weill send you a verification code to help secure your account"} />
                <ButtonBox iconName={"license"} title={"Driver’s license"}
                    text={"You must have a valid driver’s license to book on auto passion"} />
                <ButtonBox iconName={"wallet"} title={"Payment method"}
                    text={"You won’t be charged unitl you book your auto passion."} />
            </View>
            <View style={styles.textBox}>
                <Text style={styles.text}>Your Information is stored securely. hosts only see your name and date of birth after you book a trip. The rest stays private. Learn more about Auto Passion Privacy Policy.</Text>
            </View>
            <Button1 style={styles.btn}
                backgroundColor={COLORS.black} textColor={COLORS.white}
                // onPress={() => navigation.navigate("ApprovedDrive")}
                onPress={() => StoreCarBookingApi(postData, navigation)}
            >
                Continue
            </Button1>

            {/* <StripeProvider
                publishableKey="pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
                urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
                merchantIdentifier="merchant.com.Car" // required for Apple Pay
            >
      // Your app code here
            </StripeProvider> */}
        </View>
    )
}
// 

const mapStateToProps = (state) => ({
    loading: state.product.loading,
  
  })
  
  const mapDispatchToProps = {
    StoreCarBookingApi,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ApprovedDrive)