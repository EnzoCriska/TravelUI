import React, { Component } from 'react';
import {
    View, StyleSheet, Text, TextInput, TouchableHighlight, Image, Alert, ImageBackground, ScrollView
} from 'react-native'
import {firebaseApp} from '../config/FirebaseConfig'
import { Dimensions } from 'react-native'

const window = Dimensions.get('window')
export default class SignInScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',

        }
    }


    onSignIn(){
        console.log(this.state)
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

    forgotPassword(){
        console.log('forget password')
        console.log("forgot password press..." + this.state.email)
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
            <ScrollView style = {Styles.container}>
                <View style= {{height: window.height/4}}>
                <ImageBackground
                        source={require('../../Media/bg-signup.png')}
                        style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source={require('../../Media/Group1916.png')}
                        style = {{width:200, height:70, paddingBottom:30}}
                    />
                </ImageBackground>
                    
                </View>
                <View style = {{height:3*(window.height/4), backgroundColor:'grey', alignItems: 'center'}}>
                    <View style = {{height:450, backgroundColor:'white', marginTop: -30, width: 391, borderRadius: 20, borderColor: 'grey', borderWidth: 0.5}}>
                        <View style={{margin: 25}}>
                            <Text>User name</Text>
                            <TextInput
                                style={{height: 50, borderBottomColor: 'gray', borderBottomWidth: 1}}
                                placeholder = 'example@gmail.com'
                                onChangeText = {(email) => this.setState({email})}
                                value = {this.state.email}
                            />
                        </View>

                        <View style={{margin: 25}}>
                            <Text>Password</Text>
                            <TextInput
                                style={{height: 50, borderBottomColor: 'gray', borderBottomWidth: 1}}
                                placeholder = 'password'
                                secureTextEntry={true}
                                onChangeText = {(password) => this.setState({password})}
                                value={this.state.password}
                            />
                        </View>

                        <View style={{alignItems:'flex-end', marginRight:25, justifyContent:'center'}}>
                            <Text style={{color:'grey'}} onPress={() =>{this.forgotPassword()}}>Forget your password</Text>
                        </View>

                        <View style={{alignItems:'center', justifyContent: 'center', marginTop: 70}}>
                            <TouchableHighlight  style={Styles.button} onPress={this.onSignIn.bind(this)}>
                                <View >
                                    <Text style={{color:'white'}}>LOG IN</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{justifyContent:'center', flexDirection:'row', margin:50}}>
                            <Text style={{color:'grey'}}>Don't have an account? </Text>
                            <Text onPress={()=>{this.props.navigation.navigate('ScreenSignUp')}} style={{color:'blue'}}>Sign Up</Text>
                        </View>
                        
                    </View>
                    
                </View>
                
            </ScrollView>
        );
    }
}

const Styles = StyleSheet.create({
    container:{
        flex:1
    },
    button:{
        backgroundColor:'#A80C9F', 
        height: 40, 
        width: 150, 
        alignItems:'center', 
        justifyContent:'center',
        borderRadius: 50,
        margin: -20
    }
})