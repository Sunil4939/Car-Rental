import { View, Text, StatusBar, TouchableOpacity, TextInput, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS, SIZES, dummyData, images } from '../../constants'
import Header from '../../component/atoms/Header'
import Icons from '../../component/atoms/Icons'
import { useState } from 'react'
import Button1 from '../../component/atoms/buttons/Button1';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CarRent } from '../../component/atoms/cards'
import { BottomSheet } from 'react-native-btr'
import { connect } from 'react-redux'
import { GetFuelListApi, GetTransmissionListApi } from '../../redux/actions/vendorGetApi'
import CheckBox from '@react-native-community/checkbox'
import { RadioButton } from 'react-native-paper';
import { useEffect } from 'react'
import { FilterApi, ResetFilterApi, SearchFilterApi, SingleCarDataApi } from '../../redux/actions/productAction'
import { http2 } from '../../services/api'
import Loading1 from '../../component/atoms/Loading/Loading1'
import Loading from '../../component/atoms/Loading'




const DateButton = ({ placeholder, onChangeValue, value }) => {
  const [date, setDate] = useState(false);
  const [display, setDisplay] = useState(false);

  const selectDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setDisplay(false);
    // setDate(formatDate(currentDate))
    let month = String(currentDate.getMonth() + 1).length == 1 ? `0${(currentDate.getMonth() + 1)}` : `${(currentDate.getMonth() + 1)}`
    let d = String(currentDate.getDate()).length == 1 ? `0${currentDate.getDate()}` : `${currentDate.getDate()}`
    // console.log(`${currentDate.getFullYear()}-${month}-${d}`)
    // onChangeValue && onChangeValue(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} `)
    onChangeValue && onChangeValue(`${d}-${month}-${currentDate.getFullYear()}`)
    // console.log("currentDate: ", `${currentDate.getFullYear()}-${month}-${d}`)
  }

  return (
    <View>
      <TouchableOpacity style={styles.dateBtn} onPress={() => setDisplay(!display)}>
        <Text style={{ ...styles.dateText, color: value ? COLORS.black : "#59595A" }}>{value ? value : placeholder}</Text>
      </TouchableOpacity>
      {display && (
        <DateTimePicker
          value={new Date()}
          mode={'date'}
          display="default"
          onChange={selectDate}
        />
      )}
    </View>
  )
}


const Product = ({ navigation, filter, FilterApi, loading, SingleCarDataApi, ResetFilterApi, SearchFilterApi, filterData, GetTransmissionListApi, GetFuelListApi, fuelList, transmissionList }) => {
  const [filterBottom, setFilterBottom] = useState(false)
  const [sortBottom, setSortBottom] = useState(false)

  const [searchTitle, setSearchTitle] = useState('');
  // console.log("fuel list : ", fuelList)
  // console.log("filter data : ", filterData)

  let year = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]

  let brands = ["Maruti Suzuki", "Hyundai", "Toyota", "Honda", "Skoda", "Renault"]
  let colors = ["Red", "Black", "Green", "White", "Blue", "Natural", "Gray", "Purple", "Yellow"]
  const [sortChecked, setSortChecked] = useState();

  const [type, setType] = useState(1)

  const filterType = [
    { id: 1, type: 'Fuel Type' },
    { id: 2, type: 'Transmission' },
    { id: 3, type: 'Brands' },
    { id: 4, type: 'Colors' },
    { id: 5, type: 'Years' },
  ]

  const sort = [
    { id: 1, value: 'Date: Newest First' },
    { id: 2, value: 'Date: Oldest First' },
  ]

  const handleSort = (value) => {
    setSortChecked(value)
    setSortBottom(!sortBottom)
  }
  const [postData, setPostData] = useState({
    from: null,
    until: null,
    fuelType: '',
    color: '',
    brand: '',
    years: '',
    transmission: '',
  });


  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    })
  }

  useEffect(() => {
    GetFuelListApi()
    GetTransmissionListApi()
    SearchFilterApi(searchTitle)
  }, [])

  const [color, setColor] = useState('')
  const [fuelType, setFuelType] = useState('')
  const [transmission, setTransmission] = useState('')
  const [brand, setBrand] = useState('')
  const [years, setYears] = useState('')

  const handleColor = (value) => {
    let arr = [...color]
    if (arr.includes(value)) {
      arr.splice(color.indexOf(value), 1)
    } else {
      arr.push(value)
    }
    setColor(arr)
  }

  const handleFuel = (value) => {
    let arr = [...fuelType]
    if (arr.includes(value)) {
      arr.splice(fuelType.indexOf(value), 1)
    } else {
      arr.push(value)
    }
    setFuelType(arr)
  }

  const handleTransmision = (value) => {
    let arr = [...transmission]
    if (arr.includes(value)) {
      arr.splice(transmission.indexOf(value), 1)
    } else {
      arr.push(value)
    }
    setTransmission(arr)
  }

  const handleBrand = (value) => {
    let arr = [...brand]
    if (arr.includes(value)) {
      arr.splice(brand.indexOf(value), 1)
    } else {
      arr.push(value)
    }
    setBrand(arr)
  }

  const handleYear = (value) => {
    let arr = [...years]
    if (arr.includes(value)) {
      arr.splice(years.indexOf(value), 1)
    } else {
      arr.push(value)
    }
    setYears(arr)
  }

  const resetFilter = () => {
    setPostData({
      fuelType: null,
      color: null,
      brand: null,
      years: null,
      transmission: null,
    })
    setFilterBottom(!filterBottom)
    ResetFilterApi(postData)
  }

  const handleFilter = () => {
    const filterUrl = `search_car?&brandFilter=${postData.brand}&yearFilter=${postData.years}&${postData.transmission}Filter=${postData.transmission}&${postData.fuelType}Filter=${postData.fuelType}`
    // const filterUrl = `search_car?&brandFilter=${brand}&yearFilter=${years}&${transmission}Filter=${transmission}&${fuelType}Filter=${fuelType}`
    // const filterUrl = `filter_car?page=1&brandFilter=${brand}&yearFilter=${years}&${transmission}Filter=${transmission}&${fuelType}Filter=${fuelType}`

    console.log("guguo ", filterUrl)
    FilterApi(filterUrl, postData)
  }


  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.light}
        barStyle="dark-content"
      />
      {/* header */}
      <Header />

      <View style={{ alignItems: 'center' }}>
        <View style={styles.topBox}>
          <View style={styles.topBtnRow}>
            <TouchableOpacity style={styles.sortBtn}
              onPress={() => setSortBottom(!filterBottom)}>
              <Icons name={"sort"} size={15} color={COLORS.black} style={styles.iconStyle} />
              <Text style={styles.sortBtnText}>Sort</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortBtn}
              onPress={() => setFilterBottom(!filterBottom)}>
              <Icons name={"filter"} size={15} color={COLORS.black} style={styles.iconStyle} />
              <Text style={styles.sortBtnText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {loading ?
        <Loading1 />
        :
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}>
          <View style={styles.box}>
            <View style={styles.box1}>
              <Text style={styles.label}>Where?</Text>
              <View style={styles.search}>
                <Icons name={"search"} size={20} color={"#333333"} style={styles.searchIcon} />
                <TextInput placeholder='City, Airport, Address or Hotel' placeholderTextColor={"#6D6D6D"}
                  style={styles.searchInput}
                  onChangeText={(text) => setSearchTitle(text)}
                  value={searchTitle}
                />
              </View>
            </View>

            <View style={styles.box1}>
              <View style={styles.row1}>
                <Text style={styles.label}>From</Text>
                <Text style={styles.label}>Until</Text>
              </View>
              <View style={styles.dateBox}>
                <View style={styles.row}>
                  <Icons name={"calendar1"} size={20} color={"#333333"} style={styles.searchIcon} />
                  <DateButton placeholder={"dd-mm-yyyy"} value={postData.from}
                    onChangeValue={(date) => handleChange("from", date)}
                  />
                </View>
                <Icons name={"rightArrow"} size={20} color={COLORS.black} style={styles.rightArrow} />
                <DateButton placeholder={"dd-mm-yyyy"} value={postData.until}
                  onChangeValue={(date) => handleChange("until", date)}
                />
              </View>
            </View>

            <Button1 backgroundColor={COLORS.black}
              textColor={COLORS.white} style={{ width: SIZES.width * .9 }}
              onPress={() => SearchFilterApi(searchTitle)}
            >
              Search
            </Button1>
          </View>

          <View style={styles.carListBox}>
            <FlatList
              data={filterData}
              renderItem={({ item }) => (
                <CarRent
                  source={{ uri: http2 + item.image.front }}
                  price={item.location.currency.symbol + item.location.price}
                  carName={item.name.length > 10 ? item.name.slice(0, 10) + "..." : item.name}
                  fuelType={item.fuel}
                  transmision={item.transmission}
                  onPress={() => { navigation.navigate("ProductDetails", { carData: item }) }}
                // onPress={() => { SingleCarDataApi(item.id), navigation.navigate("ProductDetails") }}
                />
              )}
              key={item => item.id}
              numColumns={2}
              showsVerticalScrollIndicator={false}
            />
          </View>

          {/* sort bottom sheet */}
          <BottomSheet
            visible={sortBottom}
            onBackButtonPress={() => setSortBottom(!sortBottom)}
            onBackdropPress={() => setSortBottom(!sortBottom)}
          >
            <View style={styles.bottomSheet}>
              <View style={styles.titleRow}>
                <Text style={styles.bottomTitle}>Sort</Text>
                <TouchableOpacity
                  onPress={() => setSortBottom(!sortBottom)}>
                  <Icons name={"close"} size={30} color={COLORS.black} />
                </TouchableOpacity>
              </View>

              {sort.map((item) => (
                <TouchableOpacity style={styles.radioBtnRow} key={item.id} onPress={() => { handleSort(item.value), SearchFilterApi(item.value) }}>
                  <RadioButton
                    value={sortChecked}
                    color={COLORS.blue}
                    status={sortChecked === item.value ? 'checked' : 'unchecked'}
                  // onPress={() => setSortChecked(radio.value)}
                  />
                  <Text style={styles.radioLabelTxt}>{item.value}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </BottomSheet>


          <BottomSheet
            visible={filterBottom}
            onBackButtonPress={() => setFilterBottom(!filterBottom)}
            onBackdropPress={() => setFilterBottom(!filterBottom)}
          >
            <View style={styles.bottomSheet1}>
              <View style={styles.titleRow}>
                <Text style={styles.bottomTitle}>Filter</Text>
                <TouchableOpacity
                  onPress={() => setFilterBottom(!filterBottom)}>
                  <Icons name={"close"} size={30} color={COLORS.black} />
                </TouchableOpacity>
              </View>
              <View style={styles.row2}>
                <View style={styles.sideBar}>

                  {filterType.map((item) => (
                    <TouchableOpacity key={item.id} style={[styles.btn, type == item.id && { backgroundColor: COLORS.white }]}
                      onPress={() => setType(item.id)}
                    >
                      <Text style={styles.btnTxt}>{item.type}</Text>
                    </TouchableOpacity>
                  ))}

                </View>
                <View style={styles.rightBox}>
                  {fuelList && type == 1 && fuelList.map((item, i) => (
                    <View style={styles.row1} key={i}>
                      <CheckBox
                        disabled={false}
                        value={postData.fuelType == item ? true : false}
                        onValueChange={() => handleChange("fuelType", item)}
                        // value={fuelType == item ? true : false}
                        tintColors={{ true: "#59595A", false: "#59595A" }}
                        // onValueChange={() => setFuelType(item)}
                        style={styles.checkBox}
                      />
                      <Text style={styles.label}>{item}</Text>
                    </View>
                  ))}

                  {transmissionList && type == 2 && transmissionList.map((item, i) => (
                    <View style={styles.row1} key={i}>
                      <CheckBox
                        disabled={false}
                        // value={transmission == item ? true : false}
                        value={postData.transmission == item ? true : false}
                        onValueChange={() => handleChange("transmission", item)}
                        tintColors={{ true: "#59595A", false: "#59595A" }}
                        // onValueChange={() => setTransmission(item)}
                        style={styles.checkBox}
                      />
                      <Text style={styles.label}>{item}</Text>
                    </View>
                  ))}
                  {brands && type == 3 && brands.map((item, i) => (
                    <View style={styles.row1} key={i}>
                      <CheckBox
                        disabled={false}
                        // value={brand == item ? true : false}
                        tintColors={{ true: "#59595A", false: "#59595A" }}
                        // onValueChange={() => setBrand(item)}
                        value={postData.brand == item ? true : false}
                        onValueChange={() => handleChange("brand", item)}
                        style={styles.checkBox}
                      />
                      <Text style={styles.label}>{item}</Text>
                    </View>
                  ))}
                  <ScrollView >
                    {colors && type == 4 && colors.map((item, i) => (
                      <View style={styles.row1} key={i}>
                        <CheckBox
                          disabled={false}
                          // value={color == item ? true : false}
                          onValueChange={() => handleChange("color", item)}
                          value={postData.color == item ? true : false}
                          tintColors={{ true: "#59595A", false: "#59595A" }}
                          // onValueChange={() => setColor(item)}
                          style={styles.checkBox}
                        />
                        <Text style={styles.label}>{item}</Text>
                      </View>
                    ))}
                  </ScrollView>

                  <ScrollView >
                    {year && type == 5 && year.map((item, i) => (

                      <View style={styles.row1} key={i}>
                        <CheckBox
                          disabled={false}
                          value={postData.years == item ? true : false}
                          tintColors={{ true: "#59595A", false: "#59595A" }}
                          // onValueChange={() => setYears(item)}
                          // value={years == item ? true : false}
                          onValueChange={() => handleChange("years", item)}
                          style={styles.checkBox}
                        />
                        <Text style={styles.label}>{item}</Text>
                      </View>
                    ))}
                  </ScrollView>

                </View>
              </View>
              <View style={styles.btnRow}>
                <TouchableOpacity style={[styles.bottomBtn, { backgroundColor: COLORS.white }]}
                  onPress={resetFilter}
                >
                  <Text style={[styles.bottomBtnTxt, { color: "#0F56CC", }]}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBtn}
                  onPress={() => { setFilterBottom(!filterBottom), handleFilter() }}
                // onPress={() => setFilterBottom(!filterBottom)}
                >
                  <Text style={styles.bottomBtnTxt}>Apply filters</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheet>
        </ScrollView>
      }
    </View>

  )
}

const mapStateToProps = (state) => ({
  loading: state.product.loading,
  transmissionList: state.getVendor.transmissionList,
  fuelList: state.getVendor.fuelList,
  filterData: state.product.filterData,
  filter: state.product.filter,
})

const mapDispatchToProps = {
  GetTransmissionListApi,
  GetFuelListApi,
  FilterApi,
  ResetFilterApi,
  SearchFilterApi,
  SingleCarDataApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)