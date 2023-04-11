import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Image, View, StyleSheet, } from 'react-native';
import { COLORS, SIZES, images } from '../../../constants';
import { http2 } from '../../../services/api';


const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};


const Slider = ({ data, duration }) => {
    const  slider = [images.car1, images.car2, images.car3, images.car4]
    data = data ? data : slider;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [dataState, setDataState] = useState(data);
    const ref = useRef(null);

    useInterval(() => {
        goNextSlide();
    }, duration);

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        setCurrentSlideIndex(nextSlideIndex);
        const offset = nextSlideIndex * SIZES.width;
        ref?.current?.scrollToOffset({ offset });
    }

    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 50,
    };


    const onViewableItemsChanged = ({ viewableItems, changed }) => {
        if (viewableItems.length > 0) {
            let currentIndex = viewableItems[0].index;
            if (currentIndex % data.length === data.length - 1) {
                setCurrentSlideIndex(currentIndex),
                    setDataState(dataState => [...dataState, ...data]);
            } else {
                // console.log(currentIndex, 'else');
                setCurrentSlideIndex(currentIndex);
            }
        }
    };

    const viewabilityConfigCallbackPairs = useRef([
        { viewabilityConfig, onViewableItemsChanged },
    ]);

    return (
        <View style={styles.container} >
            {/* <View> */}
                <FlatList
                    data={dataState}
                    renderItem={({ item }) => (
                        <View
                            style={styles.container}
                        >
                            <View
                                style={styles.imageBox}
                            >
                                <Image
                                    source={data ? {uri: http2 + item} : item}
                                    // source={{uri: item}}
                                    style={styles.image}
                                    resizeMode="stretch"
                                />
                            </View>
                        </View>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    key={({ _, index }) => index}
                    pagingEnabled
                    decelerationRate="fast"
                    bounces={false}
                    snapToInterval={SIZES.width}
                    ref={ref}
                    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                    getItemLayout={(data, index) => ({
                        length: SIZES.width,
                        offset: SIZES.width * index,
                        index,
                    })}
                    windowSize={1}
                    initialNumToRender={1}
                    maxToRenderPerBatch={1}
                    removeClippedSubviews={true}
                />
            {/* </View> */}
            <View
                style={styles.indicatorRow}
            >
                {data.map((_, index) =>
                    <View
                        key={index}
                        style={[styles.indicator, index == currentSlideIndex % data.length && {
                            backgroundColor: COLORS.black,
                        }]} />
                )}
            </View>

        </View>

    );
}

Slider.defaultProps = {
    duration: 2000,
}

export default Slider;

const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        alignItems: 'center',
    },

    imageBox: {
        width: SIZES.width * .9,
        height: SIZES.height * .26,
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
        // borderWidth: 1,
        backgroundColor: COLORS.light,
    },

    image: {
        width: SIZES.width * .9,
        height: SIZES.height * .24,
        borderRadius: 8,
    },

    indicatorRow: {
        width: SIZES.width,
        height: SIZES.height * .05,
        marginTop: SIZES.height * -.015,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    indicator: {
        width: 10,
        height: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginHorizontal: 5,
        borderRadius: 10,
    }

})
