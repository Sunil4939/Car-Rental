import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native'
import styles from './styles';
import { COLORS, icons, images } from '../../constants';

const LocationBtn = ({ source, onPress, children, iconStyle }) => {
  return (
    <View style={styles.buttonBox}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.iconBox}>
          <Image source={source} style={{ ...styles.iconStyle, ...iconStyle }} resizeMode='contain' />
        </View>
        <Text>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Location = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <StatusBar
              backgroundColor={COLORS.light}
              barStyle="dark-content"
            />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TextInput style={styles.search} placeholder='City, Airport, Address or Hotel'
            placeholderTextColor={"#6D6D6D"}
          />
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.btnBox}>
        <LocationBtn source={icons.send} onPress={() => navigation.navigate("ChooseTrip")} >
          Current Location
        </LocationBtn>
        <LocationBtn source={icons.angle} >
          Los Angeles, CA
        </LocationBtn>
        <LocationBtn source={icons.train} >
          Union Station, Los Angeles
        </LocationBtn>
        <LocationBtn source={icons.plane} >
          San Jose Norman Mineta Airport
        </LocationBtn>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Powered by</Text>
        <Image source={images.google} style={styles.google} resizeMode='contain' />
      </View>
    </View>
  )
}

export default Location