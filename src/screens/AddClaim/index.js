import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/atoms/buttons/Button1';
import Icons from '../../component/atoms/Icons';
import ImagePicker from 'react-native-image-crop-picker';
import Dropdown from '../../component/atoms/dropdown';
import { CreateClaimApi, GetClaimType } from '../../redux/actions/bookingAction';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { RNToasty } from 'react-native-toasty';
import Loading1 from '../../component/atoms/Loading/Loading1';



const Photo = ({ label, onChangeValue, imageName }) => {

    const [photo, setPhoto] = useState()
    const selectPhoto = async () => {
        console.log("select image")
        ImagePicker.openPicker({
            width: SIZES.width * .9,
            height: SIZES.height * .2,
            cropping: true
        }).then(image => {
            onChangeValue && onChangeValue({
                uri: image.path,
                // name: `${imageName}.jpeg`,
                name: image.filename || Date.now() + "-" + image.path.slice(-10),
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

const AddClaim = ({ navigation, route, CreateClaimApi, claimType, loading, GetClaimType }) => {
    // console.log("data: ", route.params.data)
    const claim_types = ["Select claim type", ...(claimType ? claimType : [])]
    const [postData, setPostData] = useState({
        claimImage: null,
        claimDescription: null,
        claimType: null,
        bookingInsuranceId: route.params && route.params.data
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }


    const handleSubmit = () => {
        console.log("post data : ", postData)
        if (postData.bookingInsuranceId && postData.claimDescription && postData.claimImage && postData.claimType) {
            CreateClaimApi(postData, navigation)
            setPostData({
                "claimImage": null,
                "claimDescription": null,
                "claimType": null,
            })
        } else {
            RNToasty.Error({
                title: "Please fill all filds",
                duration: 2
            })
        }
    }

    useEffect(() => {
        GetClaimType()
    }, [])
    return (

        <>
            {loading ?
                <Loading1 />
                :
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


                            <View style={styles.contentBox}>
                                <Text style={{ ...styles.title1, marginBottom: SIZES.height * .02, }}>Car Photos</Text>

                                {/* <Text style={styles.text}>High quality photos increase your earning potential by
                            attracting more guests. upload at least 6 photos,
                            including multiple exterior angles with the whole car
                            in frame, as well as interior shots. learn more here</Text>
                        <Text style={styles.redText}>Image will show as title image on search. Required*</Text> */}

                                <View style={styles.photoBox}>
                                    <Photo
                                        label={"Car Image"}
                                        imageName={"claimImage"}
                                        onChangeValue={(value) => handleChange("claimImage", value)}
                                    />
                                    {/* <Photo
                                label={"Back"}
                                imageName={"back"}
                                onChangeValue={(value) => handleChange("back", value)}
                            /> */}
                                    {/* <Photo
                                label={"Left"}
                                imageName={"left"}
                                onChangeValue={(value) => handleChange("left", value)}
                            />
                            <Photo
                                label={"Right"}
                                imageName={"right"}
                                onChangeValue={(value) => handleChange("right", value)}
                            /> */}
                                    {/* <Photo
                                label={"Front Interior"}
                                imageName={"front_interior"}
                                onChangeValue={(value) => handleChange("front_interior", value)}
                            /> */}
                                    {/* <Photo
                                label={"Back Interior"}
                                imageName={"back_interior"}
                                onChangeValue={(value) => handleChange("back_interior", value)}
                            />
                            <Photo
                                label={"Other Images"}
                                imageName={"other"}
                                onChangeValue={(value) => handleChange("other", value)}
                            /> */}
                                    <Dropdown
                                        data={claim_types}
                                        label={"Claim Type"}
                                        required={false}
                                        value={postData.claimType}
                                        onChangeText={(text) => handleChange("claimType", text)}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        numberOfLines={10}
                                        multiline={true}
                                        placeholder='description'
                                        value={postData.claimDescription}
                                        onChangeText={(text) => handleChange("claimDescription", text)}
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
            }
        </>

    )
}
const mapStateToProps = (state) => ({
    claimType: state.booking.claimType,
    loading: state.booking.loading
})

const mapDispatchToProps = {
    CreateClaimApi,
    GetClaimType,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClaim)
