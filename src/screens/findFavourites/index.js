import React from 'react'
import { View, Text, ScrollView, Image, StatusBar } from 'react-native'
import styles from './styles'
import { COLORS, SIZES, images } from '../../constants';
import HeaderLeft from '../../component/atoms/HeaderLeft'
import Button1 from '../../component/atoms/buttons/Button1';

const FindFavourites = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            <HeaderLeft navigation={navigation} title={"Favourites"} />
            <View style={styles.center}>
                <View style={styles.box}>
                    <View style={styles.imageBox}>
                        <Image source={images.image3} style={styles.image} resizeMode='contain' />
                    </View>
                    <Text style={styles.title}>No favorites available</Text>
                </View>


                <Button1 style={styles.btn}
                    backgroundColor={COLORS.black}
                    textColor={COLORS.white}
                onPress={() => navigation.navigate("Location")}
                >Find cars</Button1>

            </View>
        </ScrollView>
    )
}

export default FindFavourites