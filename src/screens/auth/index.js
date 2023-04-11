import React from 'react'
import { View, Text, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native'
import Icons from '../../component/atoms/Icons';
import { COLORS, images, SIZES } from "../../constants"
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1'

const Auth = ({navigation}) => {
    return (
        <ImageBackground source={images.bg}
            resizeMode="stretch"
            style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.white}
                barStyle="dark-content"
            />
            <View style={{ width: SIZES.width * .9 }}>
                <TouchableOpacity style={styles.close}>
                    <Icons name={"close"} size={20} color={COLORS.white} />
                </TouchableOpacity>
            </View>
            <View style={styles.container1}>

                <View style={styles.logoBox}>
                    <Image
                        source={images.logo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
            </View>

            <View style={styles.box}>
                <Text style={styles.title}>Find your drive</Text>
                <Button1 style={styles.btnStyle}
                onPress={() => navigation.navigate("SignUp")}
                >Sign up</Button1>
                <Button1 style={{width: SIZES.width * .9}}
                    backgroundColor={COLORS.black}
                    textColor={COLORS.white}
                    onPress={() => navigation.navigate("Login")}
                >Log in</Button1>
            </View>
        </ImageBackground>
    )
}

export default Auth;