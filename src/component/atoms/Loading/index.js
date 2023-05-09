// import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { COLORS, FONTS } from '../../../constants';


// const Loading = () => {
//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
//       <Text style={styles.title}>
//         Sorry for the interruption
//       </Text>
//       <ActivityIndicator color={COLORS.black} size={40} style={styles.loading} />
//       <Text style={styles.text}>Loading...</Text>
//     </View>
//   )
// }

// export default Loading;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: COLORS.white
//   },

//   title: {
//     fontFamily: FONTS.bold,
//     fontSize: 20,
//     color: COLORS.black,
//     marginBottom: 30,
//   },

//   text: {
//     fontFamily: FONTS.regular,
//     fontSize: 14,
//     color: COLORS.black,
//   },

//   loading: {
//     marginBottom: 10,
//   },

// })

import { Image,  StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../../constants';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Image source={images.loading1} style={styles.loadingImg} resizeMode='contain' />
            {/* <ActivityIndicator color={COLORS.black} size={40} style={{ marginBottom: 50 }} /> */}
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        height: SIZES.height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white
    },

    loadingImg: {
        // width: 150,
        height: 50,
        // marginBottom: 50,
    },
})