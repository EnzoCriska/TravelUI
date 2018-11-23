import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native'
import {firebaseApp} from './FirebaseConfig'

export default class StartScreen extends React.Component {
        
  render() {
    return (
      <View style={styles.container}>
        
        <ImageBackground
            source = {require('../Media/dk.png')}
            style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Hello</Text>
        
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})