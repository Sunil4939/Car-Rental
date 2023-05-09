import { View, Text, StatusBar, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { COLORS, images, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';


const AlmostDone = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />

            <View style={styles.imageBox}>
                <Image
                    source={images.approved}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.title}>Almost done</Text>
                <Text style={styles.text}>Before you can drive a Auto Passion car,
                    we need a bit more inforamtion.</Text>


                <View style={styles.row}>
                    <Text style={styles.text2}>If you have questions or need help. please </Text>
                    <TouchableOpacity>
                        <Text style={styles.text1}>contact us.</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ alignItems: "center" }}>
                <Button1
                    backgroundColor={COLORS.black}
                    textColor={COLORS.white}
                    style={styles.btn}
                onPress={() => navigation.goBack()}
                >Next</Button1>
            </View>

        </View>
    )
}

export default AlmostDone;