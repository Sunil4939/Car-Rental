
import {  Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../../constants';

const Loading1 = () => {
    return (
        <View style={styles.container}>
            <Image source={images.loading1} style={styles.loading} resizeMode='contain' />
            {/* <ActivityIndicator color={COLORS.primary} size={40} style={{ marginBottom: 50 }} /> */}
        </View>
    )
}

export default Loading1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: SIZES.width,
        // height: SIZES.height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white
    },

    loading: {
        width: 50,
        height: 50,
        // marginBottom: 50,
    },
})