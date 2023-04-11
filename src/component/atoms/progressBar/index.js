import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { COLORS, FONTS, SIZES } from '../../../constants';

const ProgressBar = ({ progress, marginLeft }) => {
    return (
        <View style={styles.topBox}>
            <View style={styles.box}>
                <Text style={styles.title}>List your car</Text>
                <View>
                    <Progress.Bar
                        progress={progress}
                        width={SIZES.width * .9}
                        height={10}
                        style={styles.progressBar}
                        color={'#4FB5FF'}
                        unfilledColor={'#F1F1F1'}
                        borderColor={'#F1F1F1'}
                        showsText={true}
                    />
                    <View style={{...styles.percentBox, left: SIZES.width * (progress < 1 ? progress : .4),marginLeft: marginLeft}}>
                        <Text style={styles.percent}>{progress * 100}%</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

ProgressBar.defaultProps = {
    progress: 0.3,
    marginLeft: null
}

export default ProgressBar;

const styles = StyleSheet.create({
    topBox: {
        width: SIZES.width,
        height: SIZES.height * .14,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
        alignItems: "center",
        justifyContent: 'center',
    },

    box: {
        width: SIZES.width * .9,
    },

    title: {
        fontFamily: FONTS.medium,
        fontSize: 26,
        lineHeight: 30,
        color: COLORS.black,
    },

    progressBar: {
        marginTop: SIZES.height * .01,
        borderRadius: 20,
    },

    percentBox: {
        paddingVertical: 2,
        paddingHorizontal: 6,
        height: 16,
        borderRadius: 10,
        backgroundColor: COLORS.light,
        position: 'absolute',
        top: 3,
        elevation: 4,
        marginLeft: -10,
    },

    percent: {
        fontFamily: FONTS.medium,
        fontSize: 10,
        lineHeight: 12,
        color: COLORS.black,
    },
})