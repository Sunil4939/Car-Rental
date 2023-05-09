import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import styles from './styles';
import Icons from '../../component/atoms/Icons';
import { SIZES, COLORS, dummyData } from '../../constants';
import { useState } from 'react';
import Collapsible from 'react-native-collapsible';

const Accordian = ({ text, onPress, collapsed, title, children, data }) => {
    return (
        <View style={styles.bottom_line}>
            <TouchableOpacity
                style={styles.accordian_btn}
                onPress={onPress}
            >
                <Text style={styles.accordian_btn_title}>{title}</Text>
                <Icons name={collapsed ? "down-outline" : "up-outline"} size={20} color={COLORS.black} />
            </TouchableOpacity>
            <Collapsible
                collapsed={collapsed}
            >
                {children}
            </Collapsible>
        </View>
    )
}

const ContactSupport = () => {
    const [searchTitle, setSearchTitle] = useState('');
    const [condition, setCondition] = useState("guest");
    const [collapsed, setCollapsed] = useState();
    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ ...styles.box, marginTop: SIZES.height * .03, }}>
                <View style={styles.search}>
                    <Icons name={"search"} size={20} color={"#6D6D6D"} style={styles.searchIcon} />
                    <TextInput placeholder='Search Articles' placeholderTextColor={"#6D6D6D"}
                        style={styles.searchInput}
                        onChangeText={(text) => setSearchTitle(text)}
                        value={searchTitle}
                    />
                </View>

                <View style={styles.title_box}>
                    <Text style={styles.title}>Help Center</Text>
                    <Text style={styles.sub_title}>What can we do for you?</Text>
                </View>

                <View style={styles.tab_row}>
                    <TouchableOpacity
                        style={[styles.tab_btn, condition == "guest" && { borderBottomWidth: 1 }]}
                        onPress={() => setCondition("guest")}
                    >
                        <Text style={[styles.tab_btn_text, condition == "guest" && { color: COLORS.black, }]}>Guests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab_btn, condition == "host" && { borderBottomWidth: 1 }]}
                        onPress={() => setCondition("host")}
                    >
                        <Text style={[styles.tab_btn_text, condition == "host" && { color: COLORS.black, }]}>Hosts</Text>
                    </TouchableOpacity>
                </View>

                {/* guest container */}
                {condition == "guest" &&
                    <>
                        {/* Featured Articles */}
                        <Accordian title={"Featured Articles"} collapsed={collapsed == "guest1" ? false : true}
                            onPress={() => setCollapsed("guest1")}
                        >
                            {dummyData.GuestFeatures.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>
                        {/* Getting started */}
                        <Accordian title={"Getting started"} collapsed={collapsed == "guest14" ? false : true}
                            onPress={() => setCollapsed("guest14")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Planning your trip */}
                        <Accordian title={"Planning your trip"} collapsed={collapsed == "guest2" ? false : true}
                            onPress={() => setCollapsed("guest2")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Paying for your trip */}
                        <Accordian title={"Paying for your trip"} collapsed={collapsed == "guest3" ? false : true}
                            onPress={() => setCollapsed("guest3")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Changing or canceling your trip */}
                        <Accordian title={"Changing or canceling your trip"} collapsed={collapsed == "guest4" ? false : true}
                            onPress={() => setCollapsed("guest4")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Arranging airport delivery */}
                        <Accordian title={"Arranging airport delivery"} collapsed={collapsed == "guest5" ? false : true}
                            onPress={() => setCollapsed("guest5")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Understanding guest responsibilities */}
                        <Accordian title={"Understanding guest responsibilities"} collapsed={collapsed == "guest6" ? false : true}
                            onPress={() => setCollapsed("guest6")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Managing incidents */}
                        <Accordian title={"Managing incidents"} collapsed={collapsed == "guest7" ? false : true}
                            onPress={() => setCollapsed("guest7")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Managing your account */}
                        <Accordian title={"Managing your account"} collapsed={collapsed == "guest8" ? false : true}
                            onPress={() => setCollapsed("guest8")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Troubleshooting account issues */}
                        <Accordian title={"Troubleshooting account issues"} collapsed={collapsed == "guest9" ? false : true}
                            onPress={() => setCollapsed("guest9")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Vehicle use policies */}
                        <Accordian title={"Vehicle use policies"} collapsed={collapsed == "guest10" ? false : true}
                            onPress={() => setCollapsed("guest10")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Using Turo Go */}
                        <Accordian title={"Using Turo Go"} collapsed={collapsed == "guest11" ? false : true}
                            onPress={() => setCollapsed("guest11")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Understanding and choosing protection */}
                        <Accordian title={"Understanding and choosing protection"} collapsed={collapsed == "guest12" ? false : true}
                            onPress={() => setCollapsed("guest12")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Managing vehicle damage */}
                        <Accordian title={"Managing vehicle damage"} collapsed={collapsed == "guest13" ? false : true}
                            onPress={() => setCollapsed("guest13")}
                        >
                            {dummyData.GuestData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>




                    </>
                }

                {/* host container */}
                {condition == "host" &&
                    <>
                        {/* Featured Articles */}
                        <Accordian title={"Featured Articles"} collapsed={collapsed == "host1" ? false : true}
                            onPress={() => setCollapsed("host1")}
                        >
                            {dummyData.HostFeatures.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Getting started */}
                        <Accordian title={"Getting started"} collapsed={collapsed == "host18" ? false : true}
                            onPress={() => setCollapsed("host18")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Planning your trip */}
                        <Accordian title={"Planning your trip"} collapsed={collapsed == "host2" ? false : true}
                            onPress={() => setCollapsed("host2")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Paying for your trip */}
                        <Accordian title={"Paying for your trip"} collapsed={collapsed == "host3" ? false : true}
                            onPress={() => setCollapsed("host3")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* settings and options */}
                        <Accordian title={"settings and options"} collapsed={collapsed == "host4" ? false : true}
                            onPress={() => setCollapsed("host4")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Getting paid */}
                        <Accordian title={"Getting paid"} collapsed={collapsed == "host5" ? false : true}
                            onPress={() => setCollapsed("host5")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Managing bookings and trips */}
                        <Accordian title={"Managing bookings and trips"} collapsed={collapsed == "host6" ? false : true}
                            onPress={() => setCollapsed("host6")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Managing your vehicle listing */}
                        <Accordian title={"Managing your vehicle listing"} collapsed={collapsed == "host7" ? false : true}
                            onPress={() => setCollapsed("host7")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Arranging airport delivery  */}
                        <Accordian title={"Arranging airport delivery "} collapsed={collapsed == "host8" ? false : true}
                            onPress={() => setCollapsed("host8")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Managing your account */}
                        <Accordian title={"Managing your account"} collapsed={collapsed == "host9" ? false : true}
                            onPress={() => setCollapsed("host9")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Canceling trips */}
                        <Accordian title={"Canceling trips"} collapsed={collapsed == "host10" ? false : true}
                            onPress={() => setCollapsed("host10")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Maintaining your vehicle */}
                        <Accordian title={"Maintaining your vehicle"} collapsed={collapsed == "host11" ? false : true}
                            onPress={() => setCollapsed("host11")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Taking safety measures */}
                        <Accordian title={"Taking safety measures"} collapsed={collapsed == "host12" ? false : true}
                            onPress={() => setCollapsed("host12")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Hosting with Rentau */}
                        <Accordian title={"Hosting with Auto Passion"} collapsed={collapsed == "host13" ? false : true}
                            onPress={() => setCollapsed("host13")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>



                        {/* Vehicle Policies */}
                        <Accordian title={"Vehicle Policies"} collapsed={collapsed == "host14" ? false : true}
                            onPress={() => setCollapsed("host14")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Understanding and choosing */}
                        <Accordian title={"protection"} collapsed={collapsed == "host15" ? false : true}
                            onPress={() => setCollapsed("host15")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Managing vehicle damage */}
                        <Accordian title={"Managing vehicle damage"} collapsed={collapsed == "host16" ? false : true}
                            onPress={() => setCollapsed("host16")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>

                        {/* Taxes */}
                        <Accordian title={"Taxes"} collapsed={collapsed == "host17" ? false : true}
                            onPress={() => setCollapsed("host17")}
                        >
                            {dummyData.HostData.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.content_box}>
                                    <Text style={styles.accordian_text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Accordian>
                    </>
                }

                {/* bottom text box */}
                <View style={styles.bottom_box}>
                    <View style={styles.bottom_text_row}>
                        <Text style={styles.bottom_text}>@2023 Rentau</Text>
                        <Text style={styles.bottom_text}>Terms</Text>
                        <Text style={styles.bottom_text}>Privacy</Text>
                        <Text style={styles.bottom_text}>Sitemap</Text>
                    </View>
                    <Text style={styles.bottom_text1}>Cookie Preferences</Text>
                    <Text style={styles.bottom_text1}>Do not sell or share my personal information</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ContactSupport;