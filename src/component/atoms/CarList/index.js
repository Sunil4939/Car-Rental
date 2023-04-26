import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CarList = (data) => {

    return (
        <TouchableOpacity style={styles.frontBox}>
            <View style={styles.box}>
                <View style={styles.row}>
                    <View style={styles.row1}>
                        <View style={styles.imageBox}>
                            <Image source={data.item.profile_image ? { uri: http2 + data.item.profile_image } : source} style={styles.image} resizeMode="contain" />
                        </View>
                        <View style={styles.box1}>
                            <Text style={styles.name}>{data.item.name}</Text>
                            <View style={styles.row1}>
                                <Text style={styles.year}>Year {data.item.build_year ? data.item.build_year : year}</Text>
                                <Text style={styles.added}>Added: {findAgoDays(data.item.created_at)}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.toggleBox}>
                        <SwitchToggle
                            // switchOn={toggle.includes(data.item.id)}
                            // onPress={() => handleArrayChange(data.item.id)}
                            switchOn={data.item.is_active ? data.item.is_active : false}
                            circleColorOff={COLORS.white}
                            circleColorOn={COLORS.white}
                            backgroundColorOn={COLORS.green1}
                            backgroundColorOff={COLORS.lightGrey2}
                            containerStyle={styles.toggleContainerStyle}
                            circleStyle={styles.toggleCircleStyle}
                        />
                        <Text style={styles.active}>{data.item.is_active ? "Active" : "Inactive"}</Text>
                        {/* <Text style={styles.active}>{toggle.includes(data.item.id) ? "Active" : "Inactive"}</Text> */}
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}

export default index

const styles = StyleSheet.create({})