import React, { Component } from 'react';
import {
    View, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Text, Image, Alert
} from 'react-native';

import {firebaseApp} from './config/FirebaseConfig'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onRegister(){
        console.log('start register...' + this.state.email + '...' + this.state.password )
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            console.log('registered...')
            Alert.alert(
                'Congratulation',
                'Registered Successfully',
                [
                  {text: 'OK', onPress: () => this.props.navigation.navigate('ScreenHome')},
                ],
                { cancelable: false }
              )
            this.setState({
                email: '',
                password: ''
            })
        })
        .catch(function(error) {
            Alert.alert(
                'Sorry',
                'Registered Fail',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
          });
    }

    render() {
        return (
            <View style={register.background}>
                <ImageBackground
                    source={require('../Media/background2.jpg')}
                    style= {{flex:1}}>
                    <View style={{flex:2,justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../Media/logo.png')}
                            style={{width:130, height:130}}
                        />
                    </View>
                    <View style={{flex:3}}>
                        <TextInput
                            style={register.input}
                            placeholder='Email'
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                        />
                        <TextInput
                            style={register.input}
                            secureTextEntry={true}
                            placeholder='Pass Word'
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                        />

                        <TouchableOpacity onPress={()=> {this.onRegister()}}>
                            <View style={register.button}>
                                <Text style={{color: 'white', fontSize: 20}}>Register</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                </ImageBackground>
                    
            </View>
        );
    }
}

const register= StyleSheet.create({
    background: {
        flex:1,
        

    },
    input:{
        color: 'white',
        fontSize: 18,
        margin: 10,
        height: 40,
        borderColor: 'green',
        borderWidth: 0.5
    },
    button:{
        borderRadius: 4,
        padding:5,
        margin: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
        
    }
  });