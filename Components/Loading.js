import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import {firebaseApp} from '../Components/FirebaseConfig'

export default class Loading extends React.Component {

    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'ScreenHome' : 'ScreenLogin')
        })
    }
        
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})