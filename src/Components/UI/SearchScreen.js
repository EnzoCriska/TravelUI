import React, { Component } from 'react';
import { 
    View, Text, StatusBar, TextInput, TouchableHighlight
 } from "react-native";
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
 export default class SearchScreen extends Component {
     constructor(props){
         super(props)
         this.state={
             input: ''
         }
     }
    
    render() {
         return (
            <View>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor='rgba(241, 23, 190, 0.0)' translucent = {true} />
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    leftComponent={
                        <View style= {{height: '50%', justifyContent:'space-between', alignItems:"stretch"}}>
                            <Icon
                            name='long-arrow-left'
                            size={20}
                            color='white'
                            style = {{flex:1}} />
                        </View>
                    }
                    centerComponent={
                        <View style={{height:'70%', width:'100%',flexDirection:'row', backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                            <TextInput 
                                style={{height: 35,}}
                                placeholder = 'Find Destination, hotel, restaurant'
                                onChangeText = {(input) => this.setState({input})}
                                value = {this.state.input}>
                        
                            </TextInput>
                            <Icon
                                name='search'
                                size={20}
                                color='#ED50C6'
                            />
                        </View>
                    }
                    outerContainerStyles={{ backgroundColor: 'rgba(241, 23, 190, 0.9)', height:80}}
                    innerContainerStyles={{ justifyContent: 'space-around', }}
                    />
                    <View style={{flexDirection:'column', height:'80%'}}>
                        <View>
                            <TouchableHighlight style={{flex:1,shadowColor:'grey'}}>
                                <View style={{height:50,justifyContent: 'center', padding:10, alignItems:'flex-start',backgroundColor:'white'}}>
                                    <Text>Địa điểm gần bạn</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{flex:1,shadowColor:'grey'}}>
                                <View style={{height:50,justifyContent: 'center', padding:10, alignItems:'flex-start',backgroundColor:'white'}}>
                                    <Text>Hà Nội</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        
                        <TouchableHighlight style={{flex:1,shadowColor:'grey'}}>
                            <View style={{height:50,justifyContent: 'center', padding:10, alignItems:'flex-start',backgroundColor:'white'}}>
                                <Text>Địa điểm gần bạn</Text>
                            </View>
                        </TouchableHighlight>
                        
                    </View>
                
            </View> 
         );
     }
 }
