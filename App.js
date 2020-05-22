import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Work from './src/login/work.js';
import File from './src/login/newfile.js';
import Personal from './src/login/personal.js';
import Stylist from './src/login/stylist.js';
import Riri from './src/login/riri.js';
import Michelle from './src/login/michelle.js';
import Abloh from './src/login/abloh.js';
import Di from './src/login/di.js';








const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Work: {screen: Work},
  File: {screen: File},
  Personal:{screen: Personal},
  Stylist:{screen:Stylist},
  Michelle:{screen:Michelle},
  Riri:{screen:Riri},
  Abloh:{screen:Abloh},
  Di:{screen:Di},
  
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

