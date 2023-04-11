import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../../constants';

const NoDataBox = ({ source, title }) => {
    return (
        <View style={styles.container1}>
            <View style={styles.box}>
                <Image
                    source={source}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.text1}>{title}</Text>
            </View>
        </View>
    )
}

NoDataBox.defaultProps = {
    source: images.notFound,
    title: "No Data"
}

export default NoDataBox;

const styles = StyleSheet.create({
    container1 :{
        flex: 1,
        // height: SIZES.height * .86,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },

    box: {
        width: SIZES.width * .8,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        elevation: 10,
        borderRadius: 8,
    },

    image: {
        width: SIZES.width * .7,
        height: SIZES.height * .4,
    },

    text1:{
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        color: COLORS.black,
        marginTop: SIZES.height * -.02,
        marginBottom: SIZES.height * .02,
    },
})