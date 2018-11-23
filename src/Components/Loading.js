import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native'
import {firebaseApp} from '../Components/FirebaseConfig'

export default class Loading extends React.Component {

    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'ScreenHome' : 'ScreenStart')
        })
    }
        
  render() {
    return (
      <View ScreenStartstyle={styles.container}>
        <ImageBackground
          source={require('../Media/dk.png')}
          style= {{flex:1, justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{fontSize: 30, fontStyle: "italic", color: 'white', padding: 20}}>Loading</Text>
            <ActivityIndicator size="large" />
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