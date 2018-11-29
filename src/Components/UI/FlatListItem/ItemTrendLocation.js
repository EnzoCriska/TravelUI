import React, {Component} from 'react'
import { 
    View, ImageBackground, Text
 } from "react-native";
import {Rating} from 'react-native-elements'



 export default class ItemTrendLocation extends Component {
    constructor(props){
        super(props)
    //    this.item = this.props.item
    }
    ratingCompleted(){

    }
     render() {
         return (
             <View style = {{margin:3, paddingLeft:10,height:250, width:150 }}>
                 <ImageBackground
                    source={{uri: this.props.image}}
                    style={{flex: 1, width:'100%',borderRadius:10, alignItems:'flex-start', justifyContent:'flex-end'}}>
                    <Text style={{fontSize:16, fontWeight:'bold', color:'white', margin:10}}>{this.props.title}</Text>
                 </ImageBackground>
                 
             </View>
         );
     }
 }