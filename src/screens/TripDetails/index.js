import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../constants'
import { connect } from 'react-redux'
import Icons from '../../component/atoms/Icons'
import styles from './styles'
import formatAMPM from '../../services/time'
import { http2 } from '../../services/api'

const TripDetails = ({ loading, route, userRole }) => {

    const data = route.params.data.booking_details ? route.params.data.booking_details : route.params.data
    const insurance = route.params.data.insurance ? route.params.data.insurance : null

    const driverData = route.params.data && route.params.data.host_details && route.params.data.host_details[0]

    console.log("insurance : ", insurance)
    // console.log("userRole : ", userRole)


    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            {userRole == "vendor" ?
                <View style={styles.container1}>
                    <View style={styles.title_box}>
                        <Text style={styles.title}>Customer Details</Text>
                        <View>
                            <View style={styles.pickup_row}>
                                <Text style={styles.label}>Customer Name: </Text>
                                <Text style={styles.text}>Sunil</Text>
                            </View>
                            <View style={styles.pickup_row}>
                                <Text style={styles.label}>Customer Email : </Text>
                                <Text style={styles.text}>demo@gmail.com</Text>
                            </View>
                            {/* <Text style={{ ...styles.title, marginTop: SIZES.height * .02, }}>Car Details</Text> */}
                            <Text ></Text> 
                            <View style={styles.top_row}>
                                <View style={styles.top_box}>
                                    <View style={styles.label_row}>
                                        <Text style={styles.label}>Car Name: </Text>
                                        <Text style={styles.text}>{data && data.car && data.car.name}</Text>
                                    </View>
                                    <View style={styles.label_row}>
                                        <Text style={styles.label}>Car Details: </Text>
                                        <Text style={styles.text}>{data && data.car && `${data.car.brand} ${data.car.transmission} ${data.car.fuel} ${data.car.color} ${data.car.build_year}`}</Text>
                                    </View>
                                    <View style={styles.label_row}>
                                        <Text style={styles.label}>Insurance Amount: </Text>
                                        <Text style={styles.text}>{insurance ? "$"+ (insurance.amount > 0 ? insurance.amount :  0 ):"$"+ 0}</Text>
                                    </View> 
                                    <View style={styles.review_row}>
                                        <Text style={styles.review}>5.0</Text>
                                        <Icons name={"star"} color={COLORS.black} size={12} />
                                        <Text style={styles.review}>(43 ratings)</Text>
                                    </View>
                                    
                                </View>
                                <Text style={styles.price}>${data && data.price}</Text>
                            </View>

                        </View>

                    </View>

                    <View style={styles.date_row}>
                        <Text style={styles.pickup}>Pickup Date:-</Text>
                        <Text style={styles.text}>{data && data.trip_start_date.split("T")?.[0]}</Text>
                        <Text style={styles.text}>{data && data.start_time}</Text>
                        {/* <Text style={styles.text}>{formatAMPM(new Date(data && data.start_time))}</Text> */}
                    </View>
                    <View style={styles.hr_line} />
                    <View style={styles.date_row}>
                        <Text style={styles.pickup}>Drop Date:-</Text>
                        <Text style={styles.text}>{data && data.trip_end_date.split("T")?.[0]}</Text>
                        <Text style={styles.text}>{data && data.end_time}</Text>
                        {/* <Text style={styles.text}>{formatAMPM(new Date(data && data.end_time))}</Text> */}
                    </View>
                    <View style={styles.hr_line} />
                    <View>
                        <View style={styles.title_box}>
                            <Text style={styles.title1}>Pickup Details</Text>
                            <View style={styles.pickup_row}>
                                <Text style={styles.label}>Pickup Latitude: </Text>
                                <Text style={styles.text}>{data && data.pick_up_lat ? data.pick_up_lat : "Not Available"}</Text>
                            </View>
                            <View style={styles.pickup_row}>
                                <Text style={styles.label}>Pickup Longitude: </Text>
                                <Text style={styles.text}>{data && data.pick_up_lng ? data.pick_up_lng : "Not Available"}</Text>
                            </View>

                            <View style={styles.pickup_row}>
                                <Text style={styles.label}>Description: </Text>
                                {/* <Text style={styles.label}>Pickup & Drop Location: </Text> */}
                                <Text style={styles.text}>{data && data.description ? data.description : "Not Available"}</Text>
                            </View>
                        </View>
                    </View>
                    {/* <View style={styles.hr_line} /> */}
                </View>
                :
                <>
                    <View style={styles.container1}>
                        <View style={styles.title_box}>
                            <Text style={styles.title}>Trip Details</Text>
                        </View>
                        <View style={styles.top_row}>
                            <View style={styles.top_box}>
                                <View style={styles.label_row}>
                                    <Text style={styles.label}>Car Name: </Text>
                                    <Text style={styles.text}>{data && data.car && data.car.name}</Text>
                                </View>
                                <View style={styles.label_row}>
                                    <Text style={styles.label}>Car Details: </Text>
                                    <Text style={styles.text}>{data && data.car && `${data.car.brand} ${data.car.transmission} ${data.car.fuel} ${data.car.color} ${data.car.build_year}`}</Text>
                                </View>
                                <View style={styles.label_row}>
                                    <Text style={styles.label}>Insurance Amount: </Text>
                                    <Text style={styles.text}>{insurance ? "$"+ (insurance.amount > 0 ? insurance.amount : 0 ) :"$"+ 0}</Text>
                                </View>
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
                            <Text style={styles.text}>{data && data.trip_start_date.split("T")?.[0]}</Text>
                            <Text style={styles.text}>{data && data.start_time}</Text>
                            {/* <Text style={styles.text}>{formatAMPM(new Date(data && data.start_time))}</Text> */}
                        </View>
                        <View style={styles.hr_line} />
                        <View style={styles.date_row}>
                            <Text style={styles.pickup}>Drop Date:-</Text>
                            <Text style={styles.text}>{data && data.trip_end_date.split("T")?.[0]}</Text>
                            <Text style={styles.text}>{data && data.end_time}</Text>
                            {/* <Text style={styles.text}>{formatAMPM(new Date(data && data.end_time))}</Text> */}
                        </View>
                        <View style={styles.hr_line} />

                        {/* <View style={styles.title_box}>
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
                    </View> */}
                        <View>
                            <View style={styles.title_box}>
                                <Text style={styles.title1}>Pickup Details</Text>
                                <View style={styles.pickup_row}>
                                    <Text style={styles.label}>Pickup Latitude: </Text>
                                    <Text style={styles.text}>{data && data.pick_up_lat ? data.pick_up_lat : "Not Available"}</Text>
                                </View>
                                <View style={styles.pickup_row}>
                                    <Text style={styles.label}>Pickup Longitude: </Text>
                                    <Text style={styles.text}>{data && data.pick_up_lng ? data.pick_up_lng : "Not Available"}</Text>
                                </View>

                                <View style={styles.pickup_row}>
                                    <Text style={styles.label}>Description: </Text>
                                    {/* <Text style={styles.label}>Pickup & Drop Location: </Text> */}
                                    <Text style={styles.text}>{data && data.description ? data.description : "Not Available"}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.hr_line} />

                    </View>
                    {/* {driverData &&
                        <View style={styles.center_box}>
                            <View style={styles.box}>
                                <Text style={styles.title1}>Driver By</Text>
                                <View style={styles.box_row}>
                                    <View style={styles.image_box}>
                                        <Image source={driverData.profile_image ? { uri: http2 + driverData.profile_image } : images.profile} style={styles.image} resizeMode='contain' />
                                    </View>
                                    <View style={styles.right_box}>
                                        <Text style={styles.driver_name}>{driverData.driver_first_name} {driverData.driver_last_name}</Text>
                                        <Text style={styles.text1}>50 trips  Joined Feb 2021
                                            Typically responds within 1 minute</Text>
                                    </View>
                                </View>
                                <View style={styles.box_row1}>
                                    <View style={styles.row1}>
                                        <View style={styles.icon_box}>
                                            <Icons name={"wallet"} size={15} color={COLORS.black} />
                                        </View>
                                        <Text style={styles.mobile}>{driverData.driver_license}</Text>
                                    </View>

                                    <View style={styles.row1}>
                                        <View style={styles.icon_box}>
                                            <Icons name={"call"} size={15} color={COLORS.black} />
                                        </View>
                                        <Text style={styles.mobile}>+91 {driverData.stripe_phone ? driverData.stripe_phone : 8463872922}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    } */}
                </>
            }

        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    userData: state.auth.userData,
    token: state.auth.token,
    userRole: state.auth.userRole,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails)