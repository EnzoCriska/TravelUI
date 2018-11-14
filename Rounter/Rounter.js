import React from 'react';
import  { StackNavigator }  from 'react-navigation'
import Login from '../Components/Login';
import Register from '../Components/Register';
import Home from '../Components/Home';
import Loading from '../Components/Loading';

export const HomeStack = StackNavigator({
    // ScreenLoading:{
    //     screen: Loading,
    //     navigationOptions: { header: null}
    // },
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