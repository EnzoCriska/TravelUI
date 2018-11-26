import React from 'react';
import  { StackNavigator }  from 'react-navigation'
import Login from '../Components/Login';
import Register from '../Components/Register';
import Home from '../Components/Home';
import Loading from '../Components/Loading';
import StartScreen from "../Components/StartScreen";
import SignUpScreen from '../Components/SignUpScreen';

export const HomeStack = StackNavigator({
    ScreenLoading:{
        screen: Loading,
        navigationOptions: { header: null}
    },
    ScreenStart:{
        screen: StartScreen,
        navigationOptions: {header:null}    
    },
    ScreenSignUp:{
        screen: SignUpScreen,
        navigationOptions: {header: null}
    },
    ScreenLogin:{
        screen: Login,
        navigationOptions: { header: null } 
    },
    ScreenRegister: {
        screen: Register,
        navigationOptions: { header: null } 
    },
    ScreenHome: {
        screen: Home,
        navigationOptions: { header: null } 
    },
},
{ 
    headerMode: 'screen' 
  })