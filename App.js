import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

export class Home extends Component{
  render(){
    return(
      <View style={style.container}>
      <Image source={require('./img/1.jpg')} />
      <Text>Home</Text>
      </View>
      );
  }
}
export class Heroes extends Component{
  render(){
    return(
      <View style={style.container}>
      <Text>Heroes</Text>
      </View>
      );
  }
}
export class Setting extends Component{
  render(){
    return(
      <View style={style.container}>
      <Text>Setting</Text>
      </View>
      );
  }
}
export default createBottomTabNavigator({
  Home: { screen: Home,
  navigationOptions:{
    tabBarLabel: 'Home',
  }},
  Heroes: { screen: Heroes,
  navigationOptions:{
    tabBarLabel: 'Heroes',
  }  },
  Setting: { screen: Setting,
  navigationOptions:{
    tabBarLabel: 'Setting',
  }  }
},{
  initialRouteName: 'Home',
  order: ['Home','Heroes','Setting'],
  navigationOptions:{
    tabBarVisible: true
  },
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  }});
const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});