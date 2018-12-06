import React, {Component} from 'react'
import { 
    View, Image, Text
 } from "react-native";
import {Rating} from 'react-native-elements'



 export default class ItemTopHotel extends Component {
    constructor(props){
        super(props)
    //    this.item = this.props.item
    }
    ratingCompleted(){

    }
     render() {
         return (
            <View style = {{marginLeft:5, width:150}}>
                <Image
                source={{uri: this.props.image}}
                style={{height:102, width:150, borderRadius:10}}>
                </Image>
                <View style={{flexDirection:'column', marginVertical:10, alignItems:'flex-start', justifyContent:'space-between'}}>
                <Text style={{fontSize:16, width:150, fontWeight:'bold'}}>{this.props.title}</Text>
                <View style={{flexDirection:'row'}}>
                    <Rating
                        //showRating
                        type="star" 
                        fractions={1}
                        startingValue={this.props.rating}
                        ratingColor = "red"
                        imageSize={10}
                        onFinishRating={this.ratingCompleted}
                        style={{marginTop:5 }}
                        />
                    <Text style={{color: 'grey', marginLeft:5, fontSize:14}}>(190 đánh giá)</Text>
                </View>
                <Text>Per night: {this.props.Per_night}</Text>
                </View>
            
            
        </View>
         );
     }
 }