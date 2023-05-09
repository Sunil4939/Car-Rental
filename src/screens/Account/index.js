import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles';
import { useState } from 'react';
import Button1 from '../../component/atoms/buttons/Button1';
import { BottomSheet } from 'react-native-btr'
import { COLORS, SIZES, icons, images } from '../../constants';
import InputWithLabel from '../../component/atoms/inputs/InputWithLabel';
import InputWithIcon from '../../component/atoms/inputs/InputWithIcon';
import InputWithIcon1 from '../../component/atoms/inputs/InputWithIcon1';
import { RadioButton } from 'react-native-paper';


const Button2 = ({ title, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn}
      onPress={onPress}
    >
      <Text style={styles.btn_title}>{title}</Text>
      {text && <Text style={styles.btn_text}>{text}</Text>}
    </TouchableOpacity>
  )
}

const Account = ({ navigation }) => {
  const [condition, setCondition] = useState()
  const [secure, setSecure] = useState(true)
  const [sortIndex, setSortIndex] = useState(0)

  const sort = ["Yes, I’m able to drive a stick shift", "No, I’m not able to drive a stick shift"]
  return (
    <ScrollView showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
      style={styles.container}
    >
      <View style={styles.box}>
        <View style={styles.title_box}>
          <Text style={styles.title}>Login Settings</Text>
        </View>
        <View>
          <Button2 title={"Email"} text={"jhonsmith@gmail.com"}
            onPress={() => setCondition("email")} />
          <Button2 title={"Password"}  onPress={() => navigation.navigate("ChangePassword")} />
          <Button2 title={"Google"} text={"Not connectd"} />
          <Button2 title={"Facebook"} text={"Not connectd"} />
          <Button2 title={"Mobile phone"} onPress={() => navigation.navigate("EnterMobileNo")} />
        </View>

        <View style={styles.title_box}>
          <Text style={styles.title}>Payment Settings</Text>
        </View>
        <View>
          <Button2 title={"Add travel credit"} text={"Travel credit $0.00"}
            onPress={() => setCondition("travel")} />
          <Button2 title={"Notification Settings"}
          // text={"Notification manager"} 
          onPress={() => navigation.navigate("NotificationSetting")}
          />
          <Button2 title={"General Settings"}
            text={"Manual transmission"}
            onPress={() => setCondition("transmission")}
          />
          <Button2 title={"Approval status"}  onPress={() => navigation.navigate("AlmostDone")}/>
          <Button2 title={"Close my account"} onPress={() => navigation.goBack()}/>
        </View>


        {/* bottom sheet */}
        {/* email bottom sheet */}
        <BottomSheet
          visible={condition == "email"}
          onBackButtonPress={() => setCondition(null)}
          onBackdropPress={() => setCondition(null)}
        >
          <View style={styles.bottom_sheet}>
            <View style={styles.bottom_title_box}>
              <Text style={styles.title}>Login Settings</Text>
            </View>
            <Text style={styles.bottom_text}>We’ll send a link to your new email
              address to verify it. Your log in
              email will be updated as well</Text>

            <InputWithIcon
              label={"Email Id"}
              placeholder={"Enter Your Email Id"}
              leftIcon={"email"}
            // onChangeText={(text) => handleChange("email", text)}
            // value={postData.email}
            />
            <View style={styles.btnRow}>
              <Button1
                style={styles.btn1}
                backgroundColor={COLORS.black}
                textColor={COLORS.white}
              // onPress={handleSubmit}
              >Update</Button1>
              <Button1
                style={styles.btn1}
                onPress={() => setCondition(null)}
              >Cancel</Button1>
            </View>
          </View>
        </BottomSheet>

        {/* code bottom sheet */}
        <BottomSheet
          visible={condition == "travel"}
          onBackButtonPress={() => setCondition(null)}
          onBackdropPress={() => setCondition(null)}
        >
          <View style={styles.bottom_sheet}>
            <View style={styles.bottom_title_box}>
              <Text style={styles.title}>Enter travel credit code</Text>
            </View>
            <Text style={styles.bottom_text}>Travel credit will automatically apply towards your next trip. promo codes must be entered at checkout.</Text>

            <InputWithIcon1
              label={"Travel credit code"}
              placeholder={"Travel credit code"}
              leftIcon={"lock"}
              rightIcon={secure ? "eye-off" : "eye"}
              onPress={() => setSecure(!secure)}
              secureTextEntry={secure}
              keyboardType={'numeric'}
            // onChangeText={(text) => handleChange("password", text)}
            // value={postData.password}
            />
            <View style={styles.btnRow}>
              <Button1
                style={styles.btn1}
                backgroundColor={COLORS.black}
                textColor={COLORS.white}
              // onPress={handleSubmit}
              >Update</Button1>
              <Button1
                style={styles.btn1}
                onPress={() => setCondition(null)}
              >Cancel</Button1>
            </View>
          </View>
        </BottomSheet>

        {/* transmission bottom sheet */}
        <BottomSheet
          visible={condition == "transmission"}
          onBackButtonPress={() => setCondition(null)}
          onBackdropPress={() => setCondition(null)}
        >
          <View style={styles.bottom_sheet}>
            <View style={styles.bottom_title_box}>
              <Text style={styles.title}>Manual transmission</Text>
            </View>
            <Text style={styles.bottom_text}>Some cars have manual
              transmissions. are you able to drive
              a stick shift?</Text>

            {sort.map((item, index) => (
              <TouchableOpacity style={styles.radioBtnRow} key={index} onPress={() => setSortIndex(index)}>
                <RadioButton
                  value={sortIndex}
                  color={COLORS.blue}
                  status={sortIndex === index ? 'checked' : 'unchecked'}
                  onPress={() => setSortIndex(index)}
                />
                <Text style={styles.radioLabelTxt}>{item}</Text>
              </TouchableOpacity>
            ))}

            <View style={styles.btnRow}>
              <Button1
                style={styles.btn1}
                backgroundColor={COLORS.black}
                textColor={COLORS.white}
                onPress={() => setCondition(null)}
              >Update</Button1>
              <Button1
                style={styles.btn1}
                onPress={() => setCondition(null)}
              >Cancel</Button1>
            </View>
          </View>
        </BottomSheet>
      </View>
    </ScrollView>
  )
}

export default Account;