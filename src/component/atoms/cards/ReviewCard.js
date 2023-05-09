import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Stars from 'react-native-stars';
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants';
import Icons from '../Icons';


const ReviewCard = ({ source, name, message, date, rating, deletePress, showDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.topRow}>
                    <View style={styles.imageBox}>
                        <Image source={source} style={styles.image} resizeMode='contain' />
                    </View>
                    <View style={styles.rating_box}>
                        <Stars
                            display={rating}
                            spacing={3}
                            count={5}
                            starSize={13}
                            fullStar={icons.star_fill}
                            emptyStar={icons.star}
                            disabled={true}
                        />
                        <View style={styles.row}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.date}>{date}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.message}>{message}</Text>
                </View>

                {/* {message.length > 30 &&
                    <View style={styles.btnBox}>
                        <TouchableOpacity>
                            <Text style={styles.btnText}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                } */}
                {showDelete &&
                    <TouchableOpacity
                        style={styles.delete_btn}
                        onPress={deletePress}
                    >
                        <Icons name={"delete"} size={20} color={COLORS.black} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}


ReviewCard.defaultProps = {
    source: images.profile,
    rating: 4,
    name: "Kunal",
    date: "May 12, 2023",
    message: "It has survived not only five centuries,",
    deletePress: null,
    showDelete: true
}

export default ReviewCard;

const styles = StyleSheet.create({
    container: {
        width: SIZES.width * .9,
        alignItems: "center",
    },

    card: {
        width: SIZES.width * .84,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: COLORS.light,
        borderRadius: 10,
        marginBottom: SIZES.height * .02,
        paddingVertical: SIZES.height * .02,
    },

    topRow: {
        width: SIZES.width * .76,
        flexDirection: 'row',
        alignItems: 'center',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rating_box: {
        width: SIZES.width * .5,
        alignItems: 'flex-start',
    },

    imageBox: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        borderRadius: 100,
        // borderWidth: 1,
        overflow: 'hidden',
        borderColor: COLORS.black,
        alignItems: "center",
        justifyContent: 'center',
        marginRight: SIZES.width * .03,
    },

    image: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        borderRadius: 100,
    },

    name: {
        fontFamily: FONTS.semiBold,
        fontSize: 15,
        color: COLORS.black,
    },

    date: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.black,
        marginLeft: SIZES.width * .02,
    },


    textBox: {
        width: SIZES.width * .76,
        marginVertical: SIZES.height * .01,
    },

    message: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black,
    },

    btnBox: {
        width: SIZES.width * .76,
        alignItems: 'flex-start',
    },

    btnText: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: '#0F56CC',
        borderBottomWidth: 1,
        borderBottomColor: '#0F56CC',
    },

    delete_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: "center",
        justifyContent: 'center',
        // backgroundColor: COLORS.white,
        borderRadius: 20,
        // borderWidth: 1,
        position: 'absolute',
        right: 0,
        top: 0,
    },
})