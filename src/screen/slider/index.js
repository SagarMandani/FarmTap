
import React, { Component } from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from './style';

const slides = [
    {
        key: "one",
        title: "Select & Plant",
        text:
            "You Own Farm",
        image: require("../../images/1x@farmer.png"),
    },
    {
        key: "two",
        title: "Get Direct Updates",
        text:
            "You the farm",
        image: require("../../images/2x@cropselection.png"),
    },
    {
        key: "three",
        title: "Harvest & delivery",
        text:
            "Visit the farm or get if delivery when ready",
        image: require("../../images/3x@cropselection.png"),
    },
];

class Slider extends Component {

    renderItem = (item, index) => {
        const { appLogo, nameText, welcomeText, desText, stepText, titleText, normalText } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Image
                    source={require("../../images/FT-Logo-Horizontal.png")}
                    resizeMode="contain"
                    style={appLogo}
                />
                <Text style={nameText}>Hey Samyak</Text>
                <Text style={welcomeText}>Welcome to FarmTab</Text>
                <Text style={desText}>Explore the app, ZFind step wise</Text>
                <Text style={[desText, { marginBottom: 20 }]}>Information about our services</Text>
                <Text style={stepText}>Step {index + 1}</Text>
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{
                        height: "40%",
                        width: "100%",
                    }}
                />
                <Text style={titleText}>{item.title}</Text>
                <Text style={normalText}>{item.text}</Text>
            </View>
        );
    };

    render() {
        const { container, startBtn, startText } = styles;
        return (
            <View style={container}>
                <SafeAreaView />
                <AppIntroSlider
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    data={slides}
                    showNextButton={false}
                    showDoneButton={false}
                    activeDotStyle={{
                        backgroundColor: "#98D33C",
                        width: 10
                    }}
                />
                <TouchableOpacity style={startBtn} onPress={() => this.props.navigation.navigate('Welcome')}>
                    <Text style={startText}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Slider;