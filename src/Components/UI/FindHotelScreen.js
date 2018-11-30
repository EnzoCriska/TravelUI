import React, {Component} from 'react'
import { 
    View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Dimensions, TextInput, StyleSheet
 } from "react-native";
 import Icon from 'react-native-vector-icons/FontAwesome'

const {height, width} = Dimensions.get('window')
 export default class FindHotelScreen extends Component {
     constructor(props){
         super(props)
         this.state = {
             input: ''
         }
     }
     render() {
         return (
             <ScrollView>
                <ImageBackground 
                    style={{width:width, height:height/4}}
                    source= {require('../../Media/bg-signup.png')}>
                    <View style={{flex:1, alignItems:'flex-end', marginBottom:10, flexDirection:'row'}}>
                        <View style={{flex:1, backgroundColor:'green', alignItems:'center'}}>
                                <Icon
                                    name='long-arrow-left'
                                    size={20}
                                    color='#ED50C6'
                                 />
                        </View>
                        <View style={{flex:4, alignItems:'center',backgroundColor:'red'}}><Text>TravelIU</Text></View>
                        <View style={{flex:1, backgroundColor:'blue'}}></View>
                        
                    </View>
                    <View style={{flex:1}}>

                    </View>
                    
                </ImageBackground>

                <View 
                    style={Styles.containerSearch}>
                    <View style = {Styles.inputSearch}>
                            <Image
                                source = {require('../../Media/place-holder.png')}
                                style = {{height: 30, width:40}}
                            />
                            <TextInput
                                style={{height: 45, width:'70%', paddingLeft:20}}
                                placeholder = 'Where do you want to go?'
                                onChangeText = {(input) => this.setState({input})}
                                value={this.state.input}
                            />
                    </View>
                    <TouchableOpacity style = {{flex:1}}>
                        <View style = {Styles.buttonSearch}>
                            <Text style={{color:'white'}}>Find Hotels</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
             </ScrollView>
         );
     }
 }

 const Styles = StyleSheet.create({
    containerSearch:{
         marginHorizontal:20, 
         padding:20, 
         backgroundColor:'white', 
         height: height/4.5, 
         marginTop:-height/10, 
         borderRadius:10,
         marginVertical:10
    },
    inputSearch:{
        flex:1, 
        backgroundColor:'white', 
        paddingLeft:10, 
        flexDirection: 'row', 
        alignItems:'center', 
        borderRadius:10, 
        borderColor:'grey', 
        borderWidth:1,
        marginBottom:5
    },
    buttonSearch:{
        flex:1, 
        backgroundColor:'#A80C9F', 
        alignItems:'center', 
        justifyContent:'center',
        borderRadius:10
    }

 })