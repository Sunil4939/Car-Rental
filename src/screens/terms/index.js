import { View, Text, StatusBar, TouchableOpacity, } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import ProgressBar from '../../component/atoms/progressBar';
import { connect } from 'react-redux';
import { LogoutApi } from '../../redux/actions/authAction';
import { GetVendorApi } from '../../redux/actions/vendorGetApi';


const Terms = ({ navigation, LogoutApi, GetVendorApi }) => {
    useEffect(() => {
        GetVendorApi()
    }, [])
    // console.log("route: ",route.par)

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />

            {/* progress */}
            <ProgressBar
                progress={.09}
            />

            <View style={styles.contentBox}>
                <Text style={styles.title1}>Review terms of services</Text>
                <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>

                <View style={styles.row}>
                    <TouchableOpacity>
                        <Text style={styles.blueText}>Terns of services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.blueText}>Privacy of policy</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={[styles.blueText, { position: 'absolute', left: 0 }]}>Non discriminations of policy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("YourCar")}>
                    <Text style={styles.buttonText}>Agree</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    LogoutApi,
    GetVendorApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Terms)