import React from 'react'
import { View, Text, StatusBar, ScrollView, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native'
import Icons from '../../component/atoms/Icons';
import { COLORS, SIZES, images } from '../../constants';
import styles from './styles';
import { connect } from 'react-redux';
import { SearchCarApi } from '../../redux/actions/searchAction';


const TextBox = ({ iconName, iconStyle, title, children }) => {
  return (
    <View style={styles.textBox}>
      <View style={styles.textRow}>
        <Icons name={iconName} size={20} style={iconStyle} />
        <Text style={styles.title1}>{title}</Text>
      </View>
      <View>
        <Text style={styles.content}>{children}</Text>
      </View>
    </View>
  )
}


const SearchPage = ({ navigation, loading, searchData, SearchCarApi }) => {
  // console.log("search data : ", searchData)
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View>
        <Image source={images.image2} style={styles.bgImage} resizeMode="stretch" />
        <View style={styles.searchBox}>
          <TouchableOpacity style={styles.search}
            onPress={() => navigation.navigate("Product")}
          >
            <Icons name={"search"} size={20} color={COLORS.black} style={styles.searchIcon} />
            <TextInput placeholder={"City, Airport, Address or Hotel"}
              placeholderTextColor={"#6D6D6D"}
              style={styles.input}
              editable={false}
            />
            {/* <Text style={{ ...styles.input, color: "#6D6D6D" }}>City, Airport, Address or Hotel</Text> */}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.title}>Find your drive</Text>
        <TextBox iconName={"contact"}
          iconStyle={styles.iconStyle}
          title={"We’ve got your back"} >
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </TextBox>
        <TextBox iconName={"car"}
          iconStyle={styles.car}
          title={"Endless options"} >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </TextBox>
        <TextBox iconName={"shield"}
          iconStyle={styles.iconStyle}
          title={"Drive Confidently"} >
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,  </TextBox>

        <View style={styles.lineBox}>
          <Image source={images.line} style={styles.line} resizeMode='contain' />
        </View>

        <Text style={styles.title}>Fuel your daydreams</Text>
        <View style={styles.boxContainer}>
          <Image source={images.image5} style={styles.bgImage} resizeMode="stretch" />
          <View style={styles.box}>
            <View style={styles.innerBox}>
              <Text style={styles.featured}>Featured travelogue</Text>
              <Text style={styles.featuredTitle}>Home state escape:
                kaua’i edition</Text>
              <Text style={styles.featuredText}>the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words.</Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Read more</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
        //  style={{width: SIZES.width * .9,}}
        >
          <Text style={styles.title2}>Top Luxury Car</Text>
          <View style={styles.boxRow}>
            <View style={styles.box1}>
              <Image source={images.image6} style={styles.image6} resizeMode='contain' />
              <Text style={styles.imageText}>Los Angeles</Text>
            </View>
            <View style={styles.box1}>
              <Image source={images.image6} style={styles.image6} resizeMode='contain' />
              <Text style={styles.imageText}>Miami</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  loading: state.search.loading,
  searchData: state.search.searchData,
})

const mapDispatchToProps = {
  SearchCarApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)