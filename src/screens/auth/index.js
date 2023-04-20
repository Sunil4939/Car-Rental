import React from 'react'
import { View, Text, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native'
import Icons from '../../component/atoms/Icons';
import { COLORS, images, SIZES } from "../../constants"
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1'
import { connect } from 'react-redux';

const Auth = ({ navigation, token }) => {
    return (
        <ImageBackground source={images.bg}
            resizeMode="stretch"
            style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.white}
                barStyle="dark-content"
            />
            {/* <View style={{ width: SIZES.width * .9 }}>
                <TouchableOpacity style={styles.close}>
                    <Icons name={"close"} size={20} color={COLORS.white} />
                </TouchableOpacity>
            </View> */}
            <View style={styles.container1}>

                <View style={styles.logoBox}>
                    <Image
                        source={images.logo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <Button1 style={styles.hostBtn}
                    // backgroundColor={COLORS.black}
                    // textColor={COLORS.white}
                    onPress={() => navigation.navigate(token ? "Term" :"Login")}
                >Become a host</Button1>

            <View style={styles.box}>
                <Text style={styles.title}>Find your drive</Text>
                <Button1 style={styles.btnStyle}
                    onPress={() => navigation.navigate("SignUp")}
                >Sign up</Button1>
                <Button1  style={styles.btnStyle}
                    backgroundColor={COLORS.black}
                    textColor={COLORS.white}
                    onPress={() => navigation.navigate("Login")}
                >Log in</Button1>
            </View>
                
        </ImageBackground>
    )
}

const mapStateToProps = (state) => ({
    loading: state.getVendor.loading,
    token: state.auth.token,
  })
  
  const mapDispatchToProps = {
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Auth)