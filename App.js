/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Router from './src/Router';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />

          <Router />
      </>
    );
  }
};

export default App;
