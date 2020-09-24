import React, { Component } from 'react';
import { Image, TextInput, Text, View, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import styles from './style';
import auth from '@react-native-firebase/auth';

class SignUp extends Component {

    constructor(props) {
        super();
        this.state = {
            name: '',
            mobileNumber: '',
            confirmResult: null,
            verificationCode: '',
        }
    }

    isValid = () => {
        let errorMsg = '';
        let valid = true
        var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
        const { name, mobileNumber } = this.state;
        if (valid) {
            if (!name) {
                errorMsg = `Name is required`
                valid = false
            } else if (!mobileNumber) {
                errorMsg = `Mobile number is required`
                valid = false
            } else if (!regexp.test(mobileNumber)) {
                errorMsg = `Invalid Phone Number`
                valid = false
            }
        }
        if (!valid) {
            Alert.alert('FarmTap', errorMsg);
        }
        return valid;
    }

    onSubmitSignUp = async () => {
        if (this.isValid()) {
            const { mobileNumber } = this.state;
            try {
                console.log('mobileNumber --', mobileNumber)
                const confirmResult = await auth().signInWithPhoneNumber(mobileNumber);
                console.log('confirmResult --', confirmResult)
                this.setState({ confirmResult });
            } catch (error) {
                Alert.alert('FarmTap', 'Invalid code');
            }
        }
    }

    confirmCode = async () => {
        try {
            const { confirmResult, verificationCode, name } = this.state;
            if (verificationCode.length == 6) {
                let user = await confirmResult.confirm(verificationCode);
                if(user) {
                    this.setState({ confirmResult: '', mobileNumber: '', name: '' });
                    console.log('user --', user.user)
                    Alert.alert('FarmTap', `Verified! ${user.user.uid}`);
                    this.props.navigation.navigate('Home',{ name, user: user.user });
                }               
            } else {
                alert('Please enter a 6 digit OTP code.')
            }
        } catch (error) {
            Alert.alert('FarmTap', 'Invalid code');
        }
    }

    render() {
        const { container, appLogo, inputBox, signUpBtn, signUpText } = styles;
        const { name, mobileNumber, verificationCode, confirmResult } = this.state;
        return (
            <View style={container}>
                <SafeAreaView />
                <Image
                    source={require("../../images/FT-Logo-Horizontal.png")}
                    resizeMode="contain"
                    style={appLogo}
                />
                <Text style={{ margin: 20, fontSize: 16 }}>Sign Up</Text>
                <TextInput
                    style={inputBox}
                    underlineColorAndroid="transparent"
                    placeholder="Enter name"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    value={name}
                    onChangeText={(text) => this.setState({ name: text })}
                />
                <TextInput
                    style={inputBox}
                    underlineColorAndroid="transparent"
                    placeholder="Enter mobile number"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    value={mobileNumber}
                    onChangeText={(text) => this.setState({ mobileNumber: text })}
                />
                <TouchableOpacity style={signUpBtn} onPress={() => this.onSubmitSignUp()}>
                    <Text style={signUpText}>SIGN UP</Text>
                </TouchableOpacity>
                {
                    confirmResult ?
                        <>
                            <TextInput
                                style={[inputBox, { marginTop: 20 }]}
                                value={verificationCode}
                                placeholder='Verification code'
                                keyboardType='numeric'
                                onChangeText={(text) => this.setState({ verificationCode: text })} />
                            <TouchableOpacity style={signUpBtn} onPress={() => this.confirmCode()}>
                                <Text style={signUpText}>Confirm Code</Text>
                            </TouchableOpacity>
                        </>
                        : undefined
                }
            </View>
        )
    }
}

export default SignUp;