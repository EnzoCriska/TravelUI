import React, {Component} from 'react';
import {
    View, Text
} from 'react-native';
import {HomeStack} from '../Rounter/Rounter';
// import Register from './Register';

export default class App extends Component {
    render() {
        return (
            <HomeStack/>
        );
    }
}