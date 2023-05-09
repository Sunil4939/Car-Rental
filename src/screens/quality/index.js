import { View, Text, StatusBar, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { COLORS, images, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import ProgressBar from '../../component/atoms/progressBar';


const Quality = ({ navigation, route }) => {
    console.log("data: ", route.params.data)
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            {/* progress */}
            <ProgressBar
                progress={.91}
                marginLeft={SIZES.width * -.09}
            />

            <View style={styles.contentBox}>
                <Text style={styles.title1}>Safety & quality standards</Text>
                <Text style={styles.text1}>We strive to maintain a safe marketplace
                    and relabel experience. As a host, you’re expected to uphold these standards.</Text>
                <Text style={styles.text}>To complete your Auto Passion Listing,
                    Please set up your payout account with strip,
                    a leading payout provider.</Text>


            </View>
            <View style={styles.imageBox}>
                <Image
                    source={images.location}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <View style={styles.btnRow}>
                    <Button1
                        onPress={() => navigation.goBack()}
                    >Back</Button1>
                    <Button1
                        backgroundColor={COLORS.black}
                        textColor={COLORS.white}
                        onPress={() => navigation.navigate("SubmitList", {data: route.params.data})}
                    >Next</Button1>
                </View>
            </View>

        </View>
    )
}

export default Quality;