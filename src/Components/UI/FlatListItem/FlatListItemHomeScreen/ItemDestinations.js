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
         console.log(this.props.image)
         return (
             <View style = {{margin:3, height:200, width:'98%',alignItems:'center', justifyContent:'center', marginBottom:6}}>
                 <ImageBackground
                    source={{uri: this.props.image}}
                    style={{flex: 1, width:'100%', alignItems:'center', justifyContent:'center'}}
                    imageStyle={{ borderRadius: 10 }}>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>{this.props.title}</Text>
                        <Text style={{color:'white', fontSize:18}}>{this.props.description}</Text>
                    </View>
                    
                 </ImageBackground>
                 
             </View>
         );
     }
 }