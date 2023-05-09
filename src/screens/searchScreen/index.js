import { View, Text, FlatList, StatusBar, TextInput, ActivityIndicator, Image, } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, SIZES, images } from '../../constants'
import { connect } from 'react-redux'
import { SearchByLocation, SearchCarApi } from '../../redux/actions/searchAction'
import styles from './styles'
import { CarRent } from '../../component/atoms/cards'
import { http2 } from '../../services/api'
import Icons from '../../component/atoms/Icons'
import { useState } from 'react'
import { SingleCarDataApi } from '../../redux/actions/productAction'


const SearchScreen = ({ navigation, SearchCarApi, SearchByLocation, searchData,SingleCarDataApi, loading, route }) => {
    const [seachTitle, setSearchTitle] = useState()
    // const location = route.params && route.params.location

    useEffect(() => {
        if(route.params)
        SearchByLocation(route.params.location)
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />

            <View style={styles.searchBox}>
                <View style={styles.search}>
                    <Icons name={"search"} size={20} color={COLORS.black} style={styles.searchIcon} />
                    <TextInput placeholder={"City, Airport, Address or Hotel"}
                        placeholderTextColor={"#6D6D6D"}
                        value={seachTitle}
                        onChangeText={(text) => { setSearchTitle(text), SearchCarApi(text) }}
                        style={styles.input}
                    />
                </View>
            </View>
            {loading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={40} color={COLORS.black} />
                </View>
                :
                <FlatList
                    data={searchData}
                    renderItem={({ item }) => (
                        <CarRent
                            source={{ uri: http2 + item.image.front }}
                            price={"$" + item.location.price}
                            carName={item.name.length > 10 ? item.name.slice(0, 10) + "..." : item.name}
                            fuelType={item.fuel}
                            transmision={item.transmission}
                            onPress={() => { SingleCarDataApi(item.id), navigation.navigate("ProductDetails", {routeName: route.params && route.params.routeName}) }}
                        />
                    )}
                    key={item => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            }
        </View>
    )
}

const mapStateToProps = (state) => ({
    loading: state.search.loading,
    searchData: state.search.searchData,
})

const mapDispatchToProps = {
    SearchCarApi,
    SingleCarDataApi,
    SearchByLocation,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)