import React, {Component} from 'react'
import { 
    View, Image, Text
 } from "react-native";
import {Rating} from 'react-native-elements'



 export default class ItemList extends Component {
    constructor(props){
        super(props)
    //    this.item = this.props.item
    }
    ratingCompleted(){

    }


     render() {
         return (
             <View style = {{margin:3, padding:10}}>
                 <Image
                    source={{uri: this.props.image}}
                    style={{height:150, width:200, borderRadius:10}}>
                 </Image>
                 <View style={{flexDirection:'row', marginTop:10,alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:16}}>{this.props.title}</Text>
                    <Rating
                        //showRating
                        type="star"
                        fractions={1}
                        startingValue={this.props.rating}
                        ratingColor = "red"
                        imageSize={15}
                        onFinishRating={this.ratingCompleted}
                        style={{ backgroundColor: 'pink' }}
                        />
                 </View>
                 
             </View>
         );
     }
 }