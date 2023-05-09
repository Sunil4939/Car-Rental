import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import Icons from '../../component/atoms/Icons';
import ImagePicker from 'react-native-image-crop-picker';
import ProgressBar from '../../component/atoms/progressBar';


const Photo = ({ label, onChangeValue, imageName }) => {

    const [photo, setPhoto] = useState()
    const selectPhoto = async () => {
        console.log("select image")
        ImagePicker.openPicker({
            width: SIZES.width * .42,
            height: SIZES.height * .2,
            cropping: true
        }).then(image => {
            onChangeValue && onChangeValue({
                uri: image.path,
                name: `${imageName}.jpeg`,
                type: image.mime
            })
            // console.log(image)
            setPhoto(image.path);
            // onChangeValue(onChangeValue ? image.path : null)
        }).catch((err) => console.log(err));
    };
    return (
        <View style={styles.box1}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.profileImgBox}
                onPress={selectPhoto}
            >
                {photo ?
                    <Image
                        source={{ uri: photo }}
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

        </View>
    )
}

const CarPhotos = ({ navigation, route }) => {
    // console.log("data: ", route.params.data)
    const [postData, setPostData] = useState({
        ...route.params.data,
        front: null,
        back: null,
        left: null,
        right: null,
        front_interior: null,
        back_interior: null,
        other: null,
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }


    const handleSubmit = () => {
        console.log("post data : ", postData)
        navigation.navigate("PayoutStripe", { data: postData })
    }
    return (

        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.light}
                barStyle="dark-content"
            />
            <ScrollView
              keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: 'center' }}>
                    {/* progress */}
                    <ProgressBar
                        progress={.75}
                        marginLeft={SIZES.width * -.08}
                    />

                    <View style={styles.contentBox}>
                        <Text style={{ ...styles.title1, marginBottom: SIZES.height * .02, }}>Car Photos</Text>

                        <Text style={styles.text}>High quality photos increase your earning potential by
                            attracting more guests. upload at least 6 photos,
                            including multiple exterior angles with the whole car
                            in frame, as well as interior shots. learn more here</Text>
                        <Text style={styles.redText}>Image will show as title image on search. Required*</Text>

                        <View style={styles.photoBox}>
                            <Photo
                                label={"Front"}
                                imageName={"front"}
                                onChangeValue={(value) => handleChange("front", value)}
                            />
                            <Photo
                                label={"Back"}
                                imageName={"back"}
                                onChangeValue={(value) => handleChange("back", value)}
                            />
                            <Photo
                                label={"Left"}
                                imageName={"left"}
                                onChangeValue={(value) => handleChange("left", value)}
                            />
                            <Photo
                                label={"Right"}
                                imageName={"right"}
                                onChangeValue={(value) => handleChange("right", value)}
                            />
                            <Photo
                                label={"Front Interior"}
                                imageName={"front_interior"}
                                onChangeValue={(value) => handleChange("front_interior", value)}
                            />
                            <Photo
                                label={"Back Interior"}
                                imageName={"back_interior"}
                                onChangeValue={(value) => handleChange("back_interior", value)}
                            />
                            <Photo
                                label={"Other Images"}
                                imageName={"other"}
                                onChangeValue={(value) => handleChange("other", value)}
                            />

                        </View>
                        <View style={styles.btnRow}>
                            <Button1
                                onPress={() => navigation.goBack()}
                            >Back</Button1>
                            <Button1
                                backgroundColor={COLORS.black}
                                textColor={COLORS.white}
                                onPress={handleSubmit}
                            >Next</Button1>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default CarPhotos;