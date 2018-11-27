import React, { Component } from 'react';
import {
    View, StyleSheet, Text, TextInput, TouchableHighlight, Image, Alert, ImageBackground    
} from 'react-native'
import {firebaseApp} from '../Components/FirebaseConfig'

export default class SignUpScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            repass: ''
        }
    }


    onSignUp(){
        console.log(this.state)
        if(this.state.password != this.state.repass){
            Alert.alert('Sorry!', 'please type your password and re pass',
                [
                    {text: 'OK', 
                        onPress: () => {
                            console.log('OK Pressed')
                            this.setState({
                                email: '',
                                password: '',
                                repass: ''
                            })
                    }},
                ],)
        }else{
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
    }


    render() {
        return (
            <View style = {Styles.container}>
                <View style= {{height: 176, backgroundColor: '#A80C9F'}}>
                <ImageBackground
                        source={require('../Media/bg-signup.png')}
                        style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source={require('../Media/Group1916.png')}
                        style = {{width:200, height:70}}
                    />
                    </ImageBackground>
                </View>
                <View style = {{height:491, backgroundColor:'white', alignItems: 'center'}}>
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

                        <View style={{margin: 25}}>
                            <Text>Confirm Password</Text>
                            <TextInput
                                style={{height: 50, borderBottomColor: 'gray', borderBottomWidth: 1}}
                                placeholder = 'repass'
                                secureTextEntry={true}
                                onChangeText = {(repass) => this.setState({repass})}
                                value={this.state.repass}
                            />
                        </View>                        
                    </View>
                    <TouchableHighlight  style={Styles.button} onPress={this.onSignUp.bind(this)}>
                            <View >
                                <Text style={{color:'white'}}>SIGN UP</Text>
                            </View>
                    </TouchableHighlight>
                </View>
                
            </View>
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