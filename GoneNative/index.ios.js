/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, Text, View, StyleSheet, NavigatorIOS, TouchableHighlight } from 'react-native';
 import AnotherPage from './AnotherPage.js';

 <NavigatorIOS
    initialRoute={{
      component: HelloWorld,
      title: 'Some hello world messages',
    }}
    style={styles.mainContainer}
  />

class HelloWorld extends Component {
  constructor(props, context) {
   super(props, context);
   this._onForward = this._onForward.bind(this);
 }
  _onForward() {
    this.props.navigator.push({
      title: 'Here you have another page',
      component: AnotherPage
    });
  }
  render() {
    return (
      <View>
        <Text style={styles.red}>{"\n"}Hello world!</Text>
        <Text style={styles.green}>Hey there</Text>
        <Text style={styles.blue}>Its a great day</Text>
        <Text style={styles.black}>truly great</Text>
        <TouchableHighlight onPress={this._onForward}>
      <Text>Tap me to load the next page</Text>
    </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  red: {
    color: red
  },
  green: {
    color: green;
  },
  blue: {
    color: blue;
  },
  black: {
    color: black;
  },
});

AppRegistry.registerComponent('GoneNative', () => GoneNative);
