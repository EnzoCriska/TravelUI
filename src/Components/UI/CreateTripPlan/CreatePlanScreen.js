import React, { Component } from 'react';
import { 
    View, Text, Image, StyleSheet, TextInput, ImageBackground, Switch, TouchableHighlight
 } from "react-native";
 import {Header} from 'react-native-elements'
 import Icon from 'react-native-vector-icons/FontAwesome'
 import DateTimePicker from 'react-native-modal-datetime-picker';

 export default class CreatePlanScreen extends Component {
     constructor(props){
         super(props)
         this.state={
             planName:'',
             goFrom:'',
             goTo:'',
             timeStart:'',
             timeEnd:'',
             private:false,
             isDateTimePickerVisible:false
         }
     }

     componentWillMount(){
        let date = new Date();
         let current = '';
         current += date.getDate() +"/";
         current += (date.getMonth()+1) +"/";
         current += date.getFullYear();
         this.setState({
             timeStart: current
         })
         this.setState({
            timeEnd: current
        })
     }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.setState({
            timeStart:date.getDate() +"/"+ (date.getMonth()+1)+"/" + date.getFullYear()
        })
        console.log(this.state.timeStart)
        this._hideDateTimePicker();
    };


     render() {
         return (
             <View style = {{flex:1}}>
                <ImageBackground
                    source={require('../../../Media/TripPlan/logo.png')}
                    style = {{height:100, width:'100%'}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:1, flexDirection:'row', alignItems: 'center', padding:10}}>
                                <Icon
                                    name='long-arrow-left'
                                    size={20}
                                    color='#fff'
                                    onPress= {()=> {this.props.navigation.goBack()}}
                                 />
                        <Text style={{color: '#fff', paddingLeft:20, fontSize:20}}>Create Trip plan</Text>
                    </View>
                </ImageBackground>
                <View style = {{flex:1, backgroundColor:'#fff', padding:15}}>
                    <View style = {[shadow,{ flexDirection:'row', borderRadius:5}]}>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Image
                                source={require('../../../Media/TripPlan/user.png')}
                                style={{height:25, width:22, alignSelf:'center'}}
                            />
                        </View>
                        <View style={{flex:2, justifyContent:"center", paddingLeft:10}}>
                            <Text style={{color:'grey'}}>Plan name</Text>
                        </View>
                        <View style={{flex:6, alignItems:'flex-end'}}>
                            <TextInput
                                style={{width:'80%'}}
                                onChangeText={(planName) => {this.setState({planName})}}
                                value={this.state.planName}
                            />
                        </View>
                    </View>

                    <View style = {[shadow, {flexDirection: 'row', marginTop:10, borderRadius:5}]}>
                        <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Image
                                source= {require('../../../Media/TripPlan/route.png')}
                                style = {{height:150, width:23, alignSelf:'center', marginVertical:30}}
                            />
                        </View>
                        <View style={{flex:8, paddingRight:20}}>
                            <View style={{flex:1, borderRadius:5, borderColor:'grey', borderWidth:1, marginVertical:30, flexDirection:'row'}}>
                                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{color:'grey'}}>Đi</Text>
                                </View>
                                <View style={{flex:4,alignItems:'flex-end'}}>
                                    <TextInput
                                    style={{}}
                                    onChangeText={(goFrom) => {this.setState({goFrom})}}
                                    value={this.state.goFrom}
                                    placeholder='Ha Noi'
                                    />
                                </View>
                            </View>
                            <View style={{flex:1, borderRadius:5, borderColor:'grey', borderWidth:1 , marginVertical:30, flexDirection:'row'}}>
                                <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
                                    <Text style={{color:'grey'}}>Đến</Text>
                                </View>
                                <View style={{flex:4,  alignItems:'flex-end'}}>
                                    <TextInput
                                        style={{}}
                                        onChangeText={(goTo) => {this.setState({goTo})}}
                                        value={this.state.goTo}
                                        placeholder='Chon Diem Den'
                                        
                                        />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style = {[shadow,{ flexDirection:'row', borderRadius:5, marginTop:10}]}>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Image
                                source={require('../../../Media/TripPlan/calendar.png')}
                                style={{height:20, width:20, alignSelf:'center'}}
                            />
                        </View>
                        <View style={{flex:2, justifyContent:"center", paddingLeft:10}}>
                            <Text style={{color:'grey'}}>Ngày bắt đầu</Text>
                        </View>
                        <View style={{flex:5, alignItems:'flex-end', padding:15}}>
                            <TouchableHighlight onPress = {this._showDateTimePicker}>
                                <Text>{this.state.timeStart}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style = {[shadow,{ flexDirection:'row', borderRadius:5, marginTop:10}]}>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Image
                                source={require('../../../Media/TripPlan/calendar.png')}
                                style={{height:20, width:20, alignSelf:'center'}}
                            />
                        </View>
                        <View style={{flex:2, justifyContent:"center", paddingLeft:10}}>
                            <Text style={{color:'grey'}}>Ngày quay lại</Text>
                        </View>
                        <View style={{flex:5, alignItems:'flex-end', padding:15}}>
                            <TouchableHighlight>
                                <Text>{this.state.timeEnd}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style = {[shadow,{ flexDirection:'row', borderRadius:5, marginTop:10}]}>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Image
                                source={require('../../../Media/TripPlan/lock.png')}
                                style={{height:25, width:20, alignSelf:'center'}}
                            />
                        </View>
                        <View style={{flex:2, justifyContent:"center", paddingLeft:10}}>
                            <Text style={{color:'grey'}}>Private</Text>
                        </View>
                        <View style={{flex:4, justifyContent:"center", paddingLeft:10}}>
                            <Text style={{color:'grey'}}>Make a Trip as Private</Text>
                        </View>
                        <View style={{flex:1, alignItems:'flex-end', justifyContent:"center", padding:10}}>
                            <Switch
                                onValueChange={(value)=>{this.setState({private:value})}}
                                value={this.state.private}
                            />
                        </View>
                    </View>
                </View>
                <Image
                    source={require('../../../Media/TripPlan/nextsteep.png')}
                    style={{height:50, width:'100%'}}
                />
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    />
             </View>
         );
     }
 }

 const shadow = {
    shadowColor: '#999a9a',
    shadowRadius: 10,
    shadowOpacity: 0.8,
    elevation: 3,
}