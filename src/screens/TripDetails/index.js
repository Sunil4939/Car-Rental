import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, images } from '../../constants'
import { connect } from 'react-redux'
import Icons from '../../component/atoms/Icons'
import styles from './styles'
import Header1 from '../../component/atoms/Header1'
import formatAMPM from '../../services/time'

const TripDetails = ({ loading, token, route }) => {

    const data = route.params.data
    // console.log("datra : ", route.params.data)
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            <Header1
                onPress={() => navigation.navigate(token ? "EditProfile" : "Login")}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container1}>
                    <View style={styles.title_box}>
                        <Text style={styles.title}>Trip  Details</Text>
                    </View>
                    <View style={styles.top_row}>
                        <View>
                            <Text style={styles.carName}>{data && data.car && data.car.name}</Text>
                            <Text style={styles.text}>Model No: {data && data.car && `${data.car.brand} ${data.car.transmission} ${data.car.fuel}${data.car.build_year}`}</Text>
                            <View style={styles.review_row}>
                                <Text style={styles.review}>5.0</Text>
                                <Icons name={"star"} color={COLORS.black} size={12} />
                                <Text style={styles.review}>(43 ratings)</Text>
                            </View>
                        </View>
                        <Text style={styles.price}>${data && data.price}</Text>
                    </View>
                    <View style={styles.hr_line} />

                    <View style={styles.date_row}>
                        <Text style={styles.pickup}>Pickup Date:-</Text>
                        <Text style={styles.text}>{data && data.trip_start_date}</Text>
                        <Text style={styles.text}>{data && data.start_time}</Text>
                    </View>
                    <View style={styles.hr_line} />
                    <View style={styles.date_row}>
                        <Text style={styles.pickup}>Drop Date:-</Text>
                        <Text style={styles.text}>{data && data.trip_end_date}</Text>
                        <Text style={styles.text}>{data && data.end_time}</Text>
                    </View>
                    <View style={styles.hr_line} />

                    <View style={styles.title_box}>
                        <Text style={styles.title1}>{data && data.distance} Kilometers</Text>
                    </View>
                    <View style={styles.receipt_row}>
                        <View style={styles.row}>
                            <View style={styles.dot_box}>
                                <View style={styles.dot} />
                                <View style={styles.vt_line} />
                                <View style={{ ...styles.dot, backgroundColor: "#FF0000" }} />
                            </View>
                            <View style={styles.text_box}>
                                <Text style={styles.text}>2021 Cambridge Drive, Peoria
                                    Arizona, 85382 United States</Text>
                                <Text style={styles.text}>2021 Cambridge Drive, Peoria
                                    Arizona, 85382 United States</Text>
                            </View>
                        </View>
                        <TouchableOpacity >
                            <Text style={styles.btn_text}>Receipt</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hr_line} />

                </View>

                <View style={styles.center_box}>
                    <View style={styles.box}>
                        <Text style={styles.title1}>Driver By</Text>
                        <View style={styles.box_row}>
                            <View style={styles.image_box}>
                                <Image source={images.profile} style={styles.image} resizeMode='contain' />
                            </View>
                            <View style={styles.right_box}>
                                <Text style={styles.driver_name}>Arjun Shrama</Text>
                                <Text style={styles.text1}>50 trips  Joined Feb 2021
                                    Typically responds within 1 minute</Text>
                            </View>
                        </View>
                        <View style={styles.box_row1}>
                            <View style={styles.row1}>
                                <View style={styles.icon_box}>
                                    <Icons name={"wallet"} size={15} color={COLORS.black} />
                                </View>
                                <Text style={styles.mobile}>USA1415110062821</Text>
                            </View>

                            <View style={styles.row1}>
                                <View style={styles.icon_box}>
                                    <Icons name={"call"} size={15} color={COLORS.black} />
                                </View>
                                <Text style={styles.mobile}>+91 987654321</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    userData: state.auth.userData,
    token: state.auth.token,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails)