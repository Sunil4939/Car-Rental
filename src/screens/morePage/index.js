import React from 'react'
import { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, BackHandler, Linking } from 'react-native'
import Icons from '../../component/atoms/Icons';
import { COLORS, images, SIZES } from '../../constants';
import styles from './styles';
import Modal from 'react-native-modal'
import { GetUserDataApi, LogoutApi } from '../../redux/actions/authAction';
import { connect } from 'react-redux';
import Loading1 from '../../component/atoms/Loading/Loading1';
import { useEffect } from 'react';


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

const MorePage = ({ LogoutApi, navigation, userData, loading, token, userRole, GetUserDataApi }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    // console.log("user data : ", userData)
    // React.useEffect(() => {
    //     const backAction = () => {
    //       return true;
    //     };
    //     const backHandler = BackHandler.addEventListener(
    //       'hardwareBackPress',
    //       backAction,
    //     );
    //     return () => backHandler.remove();
    //   }, []);


    return (
        <>
            {loading ?
                <Loading1 />
                :
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor={COLORS.light}
                        barStyle="dark-content"
                    />

                    <View style={styles.imageBox}>
                        <View style={styles.leftBox}>
                            <Text style={styles.title}>Become a host</Text>
                            <Text style={styles.text}>you need to be sure there isn't anything embarras hidden in the middle of text. </Text>
                            {/* <TouchableOpacity style={styles.moreBtn}>
                <Text style={styles.moreBtnText}>Learn more</Text>
            </TouchableOpacity> */}
                        </View>
                        <View style={styles.rightBox}>
                            <Image source={images.image1} style={styles.image} resizeMode={"contain"} />
                        </View>
                    </View>
                    <View style={{ marginVertical: SIZES.height * .02 }}>
                        <NavigateButton iconName={"account"}
                            iconStyle={styles.account}
                            onPress={() => navigation.navigate("Account")}
                        // onPress={() => navigation.navigate("EditHostProfile")}
                        >
                            Account
                        </NavigateButton>
                        <NavigateButton iconName={"account"}
                            iconStyle={styles.account}
                            onPress={() => navigation.navigate("AutoPassion")}
                        >
                            How Rentau Works
                        </NavigateButton>
                        <NavigateButton iconName={"contact"}
                            iconStyle={styles.account}
                            onPress={() => navigation.navigate("ContactSupport")}
                        >
                            Contact Support
                        </NavigateButton>

                        {userRole == "vendor" &&
                            <>
                                <NavigateButton iconName={"contact"}
                                    iconStyle={styles.account}
                                    onPress={() => navigation.navigate("EditHostProfile")}
                                >
                                    Edit Host Profile
                                </NavigateButton>
                                <NavigateButton iconName={"contact"}
                                    iconStyle={styles.account}
                                    onPress={() => navigation.navigate("ClaimPage")}
                                >
                                    All Claims
                                </NavigateButton>
                            </>
                        }
                        {userRole == "customer" &&
                            <>
                                <NavigateButton iconName={"contact"}
                                    iconStyle={styles.account}
                                    onPress={() => navigation.navigate("Terms")}
                                >
                                    Become a host
                                </NavigateButton>
                            </>
                        }
                        {/* <NavigateButton iconName={"contact"}
                            iconStyle={styles.account}
                            // onPress={() => Linking.openURL("https://reactnative.dev/")}
                            onPress={() => navigation.navigate("ForgetPassword")}
                        >
                            forget Password
                        </NavigateButton> */}
                        {/* <NavigateButton iconName={"legal"}
            iconStyle={styles.legal}>
            Legal
        </NavigateButton> */}
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
                                <TouchableOpacity style={styles.modalBtn} onPress={() => { LogoutApi(), setModalVisible(!isModalVisible) }}>
                                    <Text style={styles.modalBtnText}>Yes</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    userData: state.auth.userData,
    userRole: state.auth.userRole,
    token: state.auth.token,
})

const mapDispatchToProps = {
    LogoutApi,
    GetUserDataApi
}

export default connect(mapStateToProps, mapDispatchToProps)(MorePage)