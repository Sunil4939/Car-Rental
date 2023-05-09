import React from "react"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Zocial from 'react-native-vector-icons/Zocial'
import { Image, StyleSheet } from "react-native"
import { icons, images } from "../../../constants"




const Icons = ({ name, color, size, style }) => {
    switch (name) {
        // Bottom tab icons
        case 'trip':
            return <Image source={icons.trip}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'addPost':
            return <Image source={icons.addPost}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'edit':
            return <Image source={icons.edit}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'gender':
            return <Image source={icons.gender}
                style={[{ height: size, width: size }, style]}
                resizeMode="contain"
            />

        case 'account':
            return <Image source={icons.account}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'contact':
            return <Image source={icons.contact}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'car':
            return <Image source={icons.car}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'shield':
            return <Image source={icons.shield}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'legal':
            return <Image source={icons.legal}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'back':
            return <Image source={icons.back}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'logout':
            return <Image source={icons.logout}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'rightArrow':
            return <Image source={icons.rightArrow}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'sort':
            return <Image source={icons.sort}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'filter':
            return <Image source={icons.filter}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'calendar1':
            return <Image source={icons.calendar1}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />

        case 'star':
            return <Image source={icons.star}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />

        case 'fuel':
            return <Image source={icons.fuel}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'transmision':
            return <Image source={icons.transmision}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'license':
            return <Image source={icons.license}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'wallet':
            return <Image source={icons.wallet}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />

        case 'home':
            return <Image source={icons.home}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'location':
            return <Image source={icons.location}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'calendar2':
            return <Image source={icons.calendar2}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'notification':
            return <Image source={icons.notification}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />

        case 'delete':
            return <Image source={icons.trash}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />

        case 'insurance':
            return <Image source={icons.insurance}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'code':
            return <Image source={icons.code}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
        case 'code1':
            return <Image source={icons.code1}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />


        // icons
        case 'checkmark':
            return <Ionicons style={StyleSheet.create(style)} name="checkmark-circle-outline" size={size} color={color} />
        case 'carlist':
            return <Ionicons style={StyleSheet.create(style)} name="car-sport" size={size} color={color} />
        case 'accountcircle':
            return <MaterialCommunityIcons style={StyleSheet.create(style)} name="account-circle-outline" size={size} color={color} />
        case 'up-outline':
            return <Ionicons style={StyleSheet.create(style)} name="chevron-up-outline" size={size} color={color} />
        case 'down-outline':
            return <Ionicons style={StyleSheet.create(style)} name="chevron-down-outline" size={size} color={color} />
        case 'heart':
            return <AntDesign style={StyleSheet.create(style)} name="hearto" size={size} color={color} />
        case 'inbox':
            return <Ionicons style={StyleSheet.create(style)} name="chatbox-ellipses-outline" size={size} color={color} />
        case 'threeDots':
            return <Entypo style={StyleSheet.create(style)} name="dots-three-horizontal" size={size} color={color} />
        case 'down':
            return <AntDesign style={StyleSheet.create(style)} name="caretdown" size={size} color={color} />
        case 'cloud':
            return <Ionicons style={StyleSheet.create(style)} name="ios-cloud-upload-outline" size={size} color={color} />
        case 'calendar':
            return <Ionicons style={StyleSheet.create(style)} name="calendar" size={size} color={color} />
        case 'info':
            return <Entypo style={StyleSheet.create(style)} name="info-with-circle" size={size} color={color} />
        case 'email':
            return <Zocial style={StyleSheet.create(style)} name="email" size={size} color={color} />
        case 'call':
            return <Ionicons style={StyleSheet.create(style)} name="ios-call" size={size} color={color} />
        case 'close':
            return <AntDesign style={StyleSheet.create(style)} name="close" size={size} color={color} />
        case 'facebook':
            return <FontAwesome style={StyleSheet.create(style)} name="facebook" size={size} color={color} />
        case 'apple':
            return <FontAwesome style={StyleSheet.create(style)} name="apple" size={size} color={color} />
        case 'google':
            return <AntDesign style={StyleSheet.create(style)} name="google" size={size} color={color} />
        case 'lock':
            return <Fontisto style={StyleSheet.create(style)} name="locked" size={size} color={color} />
        case 'user':
            return <FontAwesome5 style={StyleSheet.create(style)} name="user-alt" size={size} color={color} />
        case 'eye-off':
            return <Ionicons style={StyleSheet.create(style)} name="eye-off" size={size} color={color} />
        case 'eye':
            return <Ionicons style={StyleSheet.create(style)} name="eye" size={size} color={color} />
        case 'search':
            return <Ionicons style={StyleSheet.create(style)} name="search" size={size} color={color} />
        case 'right':
            return <Feather style={StyleSheet.create(style)} name="chevron-right" size={size} color={color} />


        case 'cancel':
            return <MaterialCommunityIcons style={StyleSheet.create(style)} name="cancel" size={size} color={color} />

        case 'android':
            return <AntDesign style={StyleSheet.create(style)} name="android1" size={size} color={color} />
        case 'bluetooth':
            return <Feather style={StyleSheet.create(style)} name="bluetooth" size={size} color={color} />
        case 'play':
            return <Entypo style={StyleSheet.create(style)} name="controller-play" size={size} color={color} />
        case 'questioncircle':
            return <AntDesign style={StyleSheet.create(style)} name="questioncircle" size={size} color={color} />

        case 'menu':
            return <Feather style={StyleSheet.create(style)} name="menu" size={size} color={color} />
        case 'license1':
            return <FontAwesome style={StyleSheet.create(style)} name="drivers-license" size={size} color={color} />
        case 'bank':
            return <MaterialCommunityIcons style={StyleSheet.create(style)} name="bank" size={size} color={color} />
        case 'wallet1':
            return <FontAwesome5 style={StyleSheet.create(style)} name="wallet" size={size} color={color} />
        case 'edit1':
            return <FontAwesome5 style={StyleSheet.create(style)} name="edit" size={size} color={color} />
        case 'add-location':
            return <MaterialIcons style={StyleSheet.create(style)} name="add-location" size={size} color={color} />
        case 'edit-location':
            return <MaterialIcons style={StyleSheet.create(style)} name="edit-location" size={size} color={color} />

        case 'star-fill':
            return <FontAwesome style={StyleSheet.create(style)} name="star" size={size} color={color} />
        case 'star-outline':
            return <FontAwesome style={StyleSheet.create(style)} name="star-o" size={size} color={color} />
        case 'twitter-circle':
            return <Entypo style={StyleSheet.create(style)} name="twitter-with-circle" size={size} color={color} />
        case 'facebook-circle':
            return <Entypo style={StyleSheet.create(style)} name="facebook-with-circle" size={size} color={color} />
        case 'instagram-circle':
            return <Entypo style={StyleSheet.create(style)} name="instagram-with-circle" size={size} color={color} />
        case 'youtube-circle':
            return <Entypo style={StyleSheet.create(style)} name="youtube-with-circle" size={size} color={color} />

        default:
            return <MaterialIcons style={StyleSheet.create(style)} name="logout" size={size} color={color} />
    }
}

Icons.defaultProps = {
    style: null,
    color: null
}

export default Icons