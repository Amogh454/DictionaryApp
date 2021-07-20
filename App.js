import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/main';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1,
      backgroundColor:'#ccccff',
      }
      }>
        <HomeScreen />
      </View>
    )
  }
}
