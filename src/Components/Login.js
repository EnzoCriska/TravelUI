import React, { Component } from 'react';
import { 
    View, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Text, Image, Alert, ActivityIndicator
} from 'react-native';
import {firebaseApp} from '../Components/FirebaseConfig'
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk'

export default class Login extends Component {
    isLogin = null;
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onLogin(){
        this.isLogin = 'false';
        console.log('click login...');
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            console.log('Login...')
            Alert.alert(
                'Congratulation',
                'Login Successfully',
                [
                  {text: 'OK', onPress: () => this.props.navigation.navigate('ScreenHome')},
                ],
                { cancelable: false }
              )
            this.setState({
                email: '',
                password: ''
            });
            this.isLogin = 'true';
        })
        .catch(function(error) {
            Alert.alert(
                'Sorry',
                'Login Fail, password require 6 character' + error,
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
            this.isLogin = null;
          });
    }

    onRegister(){
        console.log('click Register...')
        this.props.navigation.navigate('ScreenRegister');
    }

    _fbAuth(){
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

                    }).catch((error) => {
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

    forgotPassword(){
        console.log("forgot password press...")
        if (this.state.email == ''){
            Alert.alert(
                'Sorry',
                'please type your email to continue',
                [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )  
        }else{
            firebaseApp.auth().sendPasswordResetEmail(this.state.email)
                .then(()=>{
                    console.log('forgot...');
                    Alert.alert(
                        'Information',
                        'Please check your email',
                        [
                        {text: 'OK', onPress: () => console.log('goto email')},
                        ],
                        { cancelable: false }
                    );
                    this.setState({
                        email: '',
                        password: ''
                    });
                })
                .catch((error)=> {
                    Alert.alert(error)
                });
        }
        
    }


    render() {
        return (
            <View style={login.background}>
                <ImageBackground
                    source={require('../Media/dk.png')}
                    style= {{flex:1}}>
                    <View style={{flex:2,justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../Media/logo.png')}
                            style={{width:130, height:130}}
                        />
                    </View>
                    <View style={{flex:3, justifyContent: 'center'}}>
                    <TextInput
                        style={login.input}
                        placeholder='Email'
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                    <TextInput
                        style={login.input}
                        placeholder='Pass Word'
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=> {this.onLogin(this)}}>
                            <View style={login.button}>
                                <Text style={{color: 'white', fontSize: 20}}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.onRegister()}}>
                        <View style={login.button}>
                            <Text style={{color: 'white', fontSize: 20}}>Register</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                        style={{backgroundColor: 'blue', padding: 5, margin: 10, borderRadius: 5}}
                        onPress={this._fbAuth.bind(this)}
                        >
                            <Text style={{color: 'white'}}>
                            Continue with Facebook
                            </Text>
                        </TouchableOpacity>  
                        <Text style={{color: 'white',}} onPress={() =>{this.forgotPassword()}}>
                            Forgot password</Text> 
                    </View>
                   
                    </View>
                    
                    
                </ImageBackground>
                

            </View>
            
        );
    }
}

const login = StyleSheet.create({
    background: {
        flex:1,
    },
    input:{
        backgroundColor: 'white',
        opacity: 0.5,
        color: 'blue',
        fontSize: 18,
        margin: 10,
        height: 40,
        borderColor: 'green',
        borderWidth: 0.5
    },
    button:{
        borderRadius: 5,
        width: 185,
        padding:5,
        margin: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
        
    }
  });