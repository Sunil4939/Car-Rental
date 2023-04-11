import { View, Text, StatusBar, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLORS, icons, SIZES } from '../../constants';
import styles from './styles';
import * as Progress from 'react-native-progress';
import InputWithLabel from '../../component/atoms/inputs/InputWithLabel';
import InputWithLabel1 from '../../component/atoms/inputs/inputWithLabel1';
import Button1 from '../../component/atoms/buttons/Button1';
import Icons from '../../component/atoms/Icons';
import ImagePicker from 'react-native-image-crop-picker';
import CheckBox from '@react-native-community/checkbox';
import Dropdown from '../../component/atoms/dropdown';



const RenderTerms = ({ onPress }) => {
  return (
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

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Agree</Text>
      </TouchableOpacity>
    </View>
  )
}

const CarDetails = ({ backButton, nextButton }) => {
  const country = ["Select your country", "india", "nepal", "pakistan", "india", "nepal", "pakistan",]
  const transmission = ["Manual", "default", "disabled"]
  const fuel = ["Select Fuel", 1, 2, 3, 4, 5, 6, 7, 8]
  const year = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1990, 1991, 1992, 1993, 1994, 1995, 1996,]
  return (
    <ScrollView style={styles.contentBox}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title1}>Your Car</Text>
      <View style={styles.formContainer}>
        <InputWithLabel
          label={"Your Car Location"}
          placeholder={"Enter your address"}
        />
        <InputWithLabel
          label={"Pincode"}
          placeholder={"Enter your pincode"}
          maxLength={6}
        />
        <Dropdown
          data={country}
          label={"Country"}
        />
        <InputWithLabel
          label={"Registration number/VIN"}
          placeholder={"Enter your vin number"}
        />
        <InputWithLabel
          label={"Brand name"}
          placeholder={"Brand name"}
        />
        <InputWithLabel
          label={"Car Name/model"}
          placeholder={"Car Name/model"}
        />
        <Dropdown
          data={year}
          label={"Build Year"}
          required={false}
        />
        <InputWithLabel
          label={"Odometer"}
          placeholder={"Odometer"}
          required={false}
        />
        <Dropdown
          data={transmission}
          label={"Transmission"}
          required={false}
        />
        <InputWithLabel
          label={"Color"}
          placeholder={"Select Color"}
          required={false}
        />
        <InputWithLabel
          label={"Air Conditioner"}
          placeholder={"Yes"}
          required={false}
        />
        <InputWithLabel
          label={"Seat"}
          placeholder={"4 or 5"}
          required={false}
        />
        <Dropdown
          data={fuel}
          label={"Fuel/Engine"}
          required={false}
        />
        <InputWithLabel
          label={"Currency"}
          value={"CAD($)"}
        />
        <InputWithLabel1
          label={"Price"}
          placeholder={"Price"}
          rightText={"Days"}
        />
        <InputWithLabel
          label={"Additional Price"}
          placeholder={"Additional Price"}
        />
        <InputWithLabel1
          label={"Allowed Distance"}
          placeholder={"Distance"}
          rightText={"Miles"}
        />
        <View style={styles.btnRow}>
          <Button1
            onPress={backButton}
          >Back</Button1>
          <Button1
            backgroundColor={COLORS.black}
            textColor={COLORS.white}
            onPress={nextButton}
          >Next</Button1>
        </View>
      </View>
    </ScrollView>
  )
}

const CarProfile = ({ backButton, nextButton }) => {
  const [profile, setProfile] = useState()
  const selectProfile = async () => {
    console.log("select image")
    ImagePicker.openPicker({
      width: SIZES.width * .9,
      height: SIZES.height * .2,
      cropping: true
    }).then(image => {
      // handleChange("logo", {
      //     uri: image.path,
      //     name: "logo.jpeg",
      //     type: image.mime
      // })
      // console.log(image.path)
      setProfile(image.path);
    }).catch((err) => console.log(err));
  };
  return (
    <View style={styles.contentBox}>
      <Text style={styles.title1}>Profile Photo</Text>

      <View style={styles.box1}>
        <Text style={styles.subTitle}>Profile Photo</Text>
        <TouchableOpacity style={styles.profileImgBox}
          onPress={selectProfile}
        >
          {profile ?
            <Image
              source={{ uri: profile }}
              style={styles.profileImg}
              resizeMode={"contain"}
            />
            :
            <>
              <Icons
                name={"cloud"}
                size={30}
                color={"#59595A"}
              />
              <Text style={styles.text1}>Drag and drop a file here or click</Text>
            </>
          }
        </TouchableOpacity>
        <Text style={styles.redText}>( Profile photo will help your customer to identify you )</Text>
        <View style={styles.btnRow}>
          <Button1
            onPress={backButton}
          >Back</Button1>
          <Button1
            backgroundColor={COLORS.black}
            textColor={COLORS.white}
            onPress={nextButton}
          >Next</Button1>
        </View>
      </View>
    </View>
  )
}

const YourGoals = ({ backButton, nextButton }) => {
  const payment = ["Cover your car payment", 1, 2, 3, 4, 5, 6, 7, 8]
  const family = ["Never", 1, 2, 3, 4, 5, 6, 7, 8]
  const share = ["Not sure yet or just curious", 1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <View style={styles.contentBox}>
      <Text style={{ ...styles.title1, marginBottom: SIZES.height * .02, }}>Your goals</Text>
      <Dropdown
        data={payment}
        requiredStyle={{ marginTop: 18, marginLeft: SIZES.width * -.1 }}
        label={"What is your primary financial goal for sharing this car on auto passion?"}
      />
      <Dropdown
        data={family}
        requiredStyle={{ marginTop: 18, left: SIZES.width * .18, position: "absolute" }}
        label={"How often do you or your family currently us this car?"}
      />
      <Dropdown
        data={share}
        label={"How often do you want to share your car?"}
      />
      <View style={styles.btnRow}>
        <Button1
          onPress={backButton}
        >Back</Button1>
        <Button1
          backgroundColor={COLORS.black}
          textColor={COLORS.white}
          onPress={nextButton}
        >Next</Button1>
      </View>
    </View>
  )
}

const CarFeatures = ({ backButton, nextButton }) => {
  const features = ["All-wheel drive", "Android auto", "Apple CarPlay", "AUX input", "Backup camera", "Bike rack", "Blind spot warning", "Bluetooth", "Child seat", "Convertible", "GPS",
    "Heated Seats", "Keyless entry", "Pet friendly", "Snow tries of chains", "Ski rack ", "Sunroof", "Tool pass", "USB Charger", "USB input", "Whellchair accessible"]
    const [select, setSelect] = useState([])
    const handleSelect = (value) => {
        let arr = [...select]
        // console.log("arrrrr", arr.indexOf(value))
        if (arr.includes(value)) {
            arr.splice(select.indexOf(value), 1)
        } else {
            arr.push(value)
            // postData.push({
            //     item: {
            //         product: item.product._id,
            //         color: item.product.color[0],
            //         quantity: item.quantity
            //     }
            // })
        }
        setSelect(arr)
        console.log('select : ', arr)

    }
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={styles.contentBox}>
      <Text style={{ ...styles.title1, marginBottom: SIZES.height * .02, }}>Car Details</Text>
      <InputWithLabel
        label={"License plat number"}
        placeholder={"Plat number"}
      />
      <Text style={styles.redText}>You're license information won’t be publicity visible</Text>
      <View>
        <Text>Car features</Text>
        <View style={styles.featureContainer}>
          {features.map((item, index) => (
            <View key={index} style={styles.featureRow}>
              <CheckBox
                disabled={false}
                value={select.includes(index)}
                tintColors={{ true: 'blue', false: 'black' }}
                onValueChange={() => handleSelect(index)}
                // style={styles.checkBox}
              />
              <Text style={styles.feature}>{item}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.redText}>Apple Car Play is registered transmission of Apple inc.{'\n'} Android is a tradmeter of google LIC.</Text>
      </View>
    </ScrollView>
  )
}


const VendorRegister = () => {
  let term = <RenderTerms />
  const data = [<RenderTerms />, <CarDetails />, "renderTerms", "renderTerms", "renderTerms",]

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    term = data[currentSlideIndex]
  }, [currentSlideIndex])


  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
  }

  const goPrevSlide = () => {
    const prevSlideIndex = currentSlideIndex - 1;
    if (prevSlideIndex != data.length) {
      const offset = prevSlideIndex * SIZES.width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(prevSlideIndex);
    }
  }

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != data.length) {
      const offset = nextSlideIndex * SIZES.width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.light}
        barStyle="dark-content"
      />
      <View style={styles.topBox}>
        <View style={styles.box}>
          <Text style={styles.title}>List your car</Text>
          <Progress.Bar
            progress={.2}
            width={SIZES.width * .9}
            height={10}
            style={styles.progressBar}
            color={'#4FB5FF'}
            unfilledColor={'#F1F1F1'}
            borderColor={'#F1F1F1'}
          />
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={(item) => (
          <View style={{ width: SIZES.width, alignItems: 'center' }}>
            {currentSlideIndex == 0 &&
              <RenderTerms onPress={goNextSlide} />
            }
            {currentSlideIndex == 1 &&
              <CarDetails
                backButton={goPrevSlide}
                nextButton={goNextSlide}
              />
            }
            {currentSlideIndex == 2 &&
              <CarProfile
                backButton={goPrevSlide}
                nextButton={goNextSlide}
              />
            }
            {currentSlideIndex == 3 &&
              <YourGoals
                backButton={goPrevSlide}
                nextButton={goNextSlide}
              />
            }
            {currentSlideIndex == 4 &&
              <CarFeatures
                backButton={goPrevSlide}
                nextButton={goNextSlide}
              />
            }
            {/* {term} */}
          </View>
        )}
        key={(_, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
      />
      {/* <RenderTerms /> */}

    </View>
  )
}

export default VendorRegister;