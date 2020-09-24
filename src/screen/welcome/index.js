
import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import styles from './style';

class Welcome extends Component {
    render() {
        const { container, appLogo, signUpBtn, signUpText } = styles;
        return (
            <View style={container}>
                <SafeAreaView />
                <Image
                    source={require("../../images/FT-Logo-Horizontal.png")}
                    resizeMode="contain"
                    style={appLogo}
                />
                <Image
                    source={require("../../images/img-intro.png")}
                    resizeMode="contain"
                    style={{
                        height: '55%',
                        width: "100%"
                    }}
                />

                <Text style={{fontSize: 20, color: '#B98041', textAlign: 'center', marginTop: 10, marginBottom:10}}>Virtual Organic Frams</Text>
                <Text style={{textAlign: 'center',fontSize: 16 }}>Grow & know your vegetables Virtually</Text>
                <Text style={{textAlign: 'center',fontSize: 16 }}>and get & delivery when ready!</Text>
                <TouchableOpacity style={signUpBtn} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={signUpText}>SIGN UP</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 14, color: '#B98041', textAlign: 'center', marginBottom:10}}>ALREADY HAVE AN ACCOUNT? LOG IN</Text>
            </View>
        )
    }
}

export default Welcome;