import React from 'react';
import { Text } from "react-native";
import  { StackNavigator, createBottomTabNavigator }  from 'react-navigation'
import HomeScreen from '../Components/UI/HomeScreen';
import Loading from '../Components/UI/Loading';
import StartScreen from "../Components/UI/StartScreen";
import SignUpScreen from '../Components/UI/SignUpScreen';
import SignInScreen from '../Components/UI/SignInScreen';

export const HomeStack = createBottomTabNavigator({
    ScreenLoading:{
        screen: Loading,
        navigationOptions: { header: null, bottomTab: null}
    },
    ScreenStart:{
        screen: StartScreen,
        navigationOptions: {header:null}    
    },
    ScreenSignUp:{
        screen: SignUpScreen,
        navigationOptions: {header: null}
    },
    ScreenSignIn:{
        screen: SignInScreen,
        navigationOptions:{header:null}
    },
    ScreenHome: {
        screen: HomeScreen,
        navigationOptions:{header:null}
    },
},
{ 
    headerMode: 'screen' })
