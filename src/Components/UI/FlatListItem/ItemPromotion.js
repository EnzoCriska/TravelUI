import React, {Component} from 'react'
import { 
    View, ImageBackground, Text
 } from "react-native";
import {Rating} from 'react-native-elements'



 export default class ItemPromotion extends Component {
    constructor(props){
        super(props)
    //    this.item = this.props.item
    }
    ratingCompleted(){

    }


     render() {
         return (
             <View style = {{marginLeft:5}}>
                 <ImageBackground
                    source={{uri: this.props.image}}
                    style={{height:150, width:200, alignItems:'flex-end'}}
                    imageStyle={{ borderRadius: 10 }}>
                    <ImageBackground
                        source={require('../../../Media/promotion.png')}
                        style={{height:50, width:50, alignItems:'center'}}>
                        <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>{this.props.promotion} %</Text>
                    </ImageBackground>
                    
                 </ImageBackground>
                 <View style={{flexDirection:'column', marginVertical:10, alignItems:'flex-start', justifyContent:'space-between'}}>
                    <Text style={{fontSize:16}}>{this.props.title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Rating
                            //showRating
                            type="star" 
                            fractions={1}
                            startingValue={this.props.rating}
                            ratingColor = "red"
                            imageSize={13}
                            onFinishRating={this.ratingCompleted}
                            style={{marginTop:5 }}
                            />
                        <Text style={{color: 'grey', marginLeft:5}}>(190 đánh giá)</Text>
                    </View>
                    
                 </View>
                 
             </View>
         );
     }
 }