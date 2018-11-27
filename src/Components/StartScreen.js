import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native'
import {firebaseApp} from './FirebaseConfig'
import Icon from 'react-native-vector-icons/FontAwesome'
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk'

export default class StartScreen extends React.Component {
  
  _fbAuth(){
    console.log('FB Login Click...')
    LoginManager.logInWithReadPermissions(['public_profile', 'email'])
                    .then((result) => {
                        console.log('RESULT ' + result);
                        if(result.isCancelled){
                            return Promise.reject(new Error('the user cancle request'))
                        }
                        console.log('Login success: ' + result.grantedPermissions.toString())
                        return AccessToken.getCurrentAccessToken();
                    })
                    .then((data) =>{    
                        const firebase = require('firebase');
                        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                        return firebase.auth().signInAndRetrieveDataWithCredential(credential);
                    })
                    .then((currentUser) =>{
                        console.log(JSON.stringify(currentUser));
                        this.props.navigation.navigate('ScreenHome');
                    })
                    .catch((error) => {
                        console.log('ERROR '+  error);
                        Alert.alert(
                            'Sorry',
                            '' + error,
                            [
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            { cancelable: false }
                        )
                    })
                  }

  _ggAuth(){
    console.log('Google login Button click...')
  }

  _eSigupAuth(){
    console.log('email sign up click...')
    this.props.navigation.navigate('ScreenSignUp');
  }
  
  onLoginSc(){
    console.log('Login btn text click...')
    this.props.navigation.navigate('ScreenSignIn');
  }
render() {
    return (
      <View style={styles.container}>
        
        <ImageBackground
            source = {require('../Media/dk.png')}
            style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <Image
                source={require('../Media/Group1916.png')}
                style={{width:220, height:100}}
              />
              <Text style={{color:'white'}}>Travel with people, Make new friends</Text>
            </View>

            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>

              {/* //Facebook login button */}
              <TouchableOpacity style={styles.button} onPress={this._fbAuth.bind(this)} >
                <View style = {{flex:1, flexDirection: 'row', backgroundColor : '#3C5997', borderRadius: 50,}}>
                    <View style={{flex: 1,alignItems: 'center', justifyContent:'center'}}>
                      <Icon
                        name='facebook'
                        size={20}
                        color='white'
                      />
                    </View>
                    <View style={{flex: 3, alignItems:'center', justifyContent:'center'}}>
                      <Text style={{color: 'white', fontSize: 15}}>Facebook</Text>
                    </View>
                    <View style={{flex:1}}/>
                </View>
              </TouchableOpacity>

              {/* Google login button */}
              <TouchableOpacity style={styles.button} onPress={this._ggAuth.bind(this)}>
                <View style = {{flex:1, flexDirection: 'row', backgroundColor : '#FFFFFF', borderRadius: 50,}}>
                      <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
                        <Image
                          source={require('../Media/ic_google.png')}
                          style={{width:25, height:25}}
                          
                        />
                      </View>
                      <View style={{flex: 3, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{ fontSize: 15}}>Google</Text>
                      </View>
                      <View style={{flex:1}}/>
                  </View>
              </TouchableOpacity>

              {/* Email Sign up Button */}
              <TouchableOpacity style={styles.button} onPress={this._eSigupAuth.bind(this)}>
                <View style = {{flex:1, flexDirection: 'row', borderRadius: 50, borderColor: 'white', borderWidth: 1}}>
                      <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
                        <Icon
                          name='envelope'
                          size={20}
                          color='white'
                        />
                      </View>
                      <View style={{flex: 3, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{ fontSize: 15, color: 'white'}}>Sign Up with Email</Text>
                      </View>
                      <View style={{flex:1}}/>
                  </View>
              </TouchableOpacity>

              {/* Text Login */}
              <TouchableOpacity onPress={this.onLoginSc.bind(this)}>
                <Text style={{color:'white', fontSize:20}}>Log In</Text>
              </TouchableOpacity>
              
            </View>
            
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
    flexDirection: 'row',
    width: 272,
    height: 44,
    borderRadius: 50,  
     // alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 20
  }
})