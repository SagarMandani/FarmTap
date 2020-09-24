
import React, { Component } from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import styles from './style';

class Home extends Component {

    constructor(props) {
        super();
    }

    render() {
        const { params } = this.props.route;
        const { container } = styles;
        return (
            <View style={container}>
                <SafeAreaView />
                 <Text>user id - {params && params.user.uid}</Text>
                <Text>user name - {params && params.name}</Text>
                <Text>mobile number - {params && params.user.phoneNumber}</Text>
            </View>
        )
    }
}

export default Home;