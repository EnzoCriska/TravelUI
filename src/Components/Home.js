import React, { Component } from 'react';
import {
    View, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Text, Image, Alert
} from 'react-native';

import {firebaseApp} from '../Components/FirebaseConfig'

export default class Register extends Component {
    constructor(props){
        super(props)
        
    }

    logout(){
        firebaseApp.auth().signOut()
            .then(() =>{
                console.log('Logout...');
                this.props.navigation.navigate('ScreenStart');
            })
            .catch((error) =>{
                Alert.alert(error);
            })
    }

    render() {
        return (
            <View style={register.background}>
                <ImageBackground
                    source={require('../Media/background2.jpg')}
                    style= {{flex:1}}>
                    <Text>Hello</Text>
                    <TouchableOpacity style={{backgroundColor:'blue'}} onPress={()=>{this.logout()
                    }}>
                        <Text>Log out</Text>
                    </TouchableOpacity>
                </ImageBackground>
                    
            </View>
        );
    }
}

const register= StyleSheet.create({
    background: {
        flex:1,
        

    },
  });