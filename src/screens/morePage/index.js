import React from 'react'
import { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import Header1 from '../../component/atoms/Header1';
import Icons from '../../component/atoms/Icons';
import { COLORS, images, SIZES } from '../../constants';
import styles from './styles';
import Modal from 'react-native-modal'
import { GetUserDataApi, LogoutApi } from '../../redux/actions/authAction';
import { connect } from 'react-redux';


const NavigateButton = ({ iconName, iconStyle, children, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn}
            onPress={onPress}
        >
            <View style={styles.row}>
                <View style={styles.iconBox}>
                    <Icons name={iconName} style={iconStyle} size={20} color={COLORS.black} />
                </View>
                <Text style={styles.btnText}>{children}</Text>
            </View>
            <Icons name={"right"} size={20} color={COLORS.black} style={{ marginRight: SIZES.width * .03 }} />
        </TouchableOpacity>
    )
}

const MorePage = ({ LogoutApi, navigation, userData, token, GetUserDataApi }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    // console.log("user data : ", userData)
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            <Header1
                // source={images.profile}
                // userName={"Warker Mony"}
                onPress={() => navigation.navigate(token ? "EditProfile" : "Login")}
            />
            <View style={styles.imageBox}>
                <View style={styles.leftBox}>
                    <Text style={styles.title}>Become a host</Text>
                    <Text style={styles.text}>you need to be sure there isn't anything embarras hidden in the middle of text. </Text>
                    <TouchableOpacity style={styles.moreBtn}>
                        <Text style={styles.moreBtnText}>Learn more</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightBox}>
                    <Image source={images.image1} style={styles.image} resizeMode={"contain"} />
                </View>
            </View>
            <View style={{ marginVertical: SIZES.height * .02 }}>
                <NavigateButton iconName={"account"}
                    iconStyle={styles.account}
                >
                    Account
                </NavigateButton>
                {token &&
                    <NavigateButton iconName={"account"}
                        iconStyle={styles.account} >
                        How  Auto Passion Works
                    </NavigateButton>
                }
                <NavigateButton iconName={"contact"}
                    iconStyle={styles.account}>
                    Contact Support
                </NavigateButton>
                <NavigateButton iconName={"legal"}
                    iconStyle={styles.legal}>
                    Legal
                </NavigateButton>
                {token &&
                    <NavigateButton iconName={"logout"}
                        onPress={() => setModalVisible(!isModalVisible)}
                    >
                        Logout
                    </NavigateButton>
                }
            </View>


            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <Text style={styles.modalText}>Are you sure want to Logout</Text>
                    <View style={styles.btnRow}>
                        <TouchableOpacity style={[styles.modalBtn, { backgroundColor: COLORS.white }]} onPress={() => setModalVisible(!isModalVisible)}>
                            <Text style={[styles.modalBtnText, { color: COLORS.black }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalBtn} onPress={() => {LogoutApi(),setModalVisible(!isModalVisible)}}>
                            <Text style={styles.modalBtnText}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    userData: state.auth.userData,
    token: state.auth.token,
})

const mapDispatchToProps = {
    LogoutApi,
    GetUserDataApi
}

export default connect(mapStateToProps, mapDispatchToProps)(MorePage)