import React, {Component} from 'react'
import { 
    View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Dimensions, TextInput, StyleSheet, FlatList
 } from "react-native";
 import Icon from 'react-native-vector-icons/FontAwesome'
import  ItemTopHotel from "../FlatListItem/FlatListItemFindHotelScreen/ItemTopHotel";
import ItemTrendLocation from '../FlatListItem/FlatListItemHomeScreen/ItemTrendLocation'
import {isUndefined} from 'react-native-util';

const {height, width} = Dimensions.get('window')
const datasourceTopHotel = [
    {
        title: 'Melodi Hotel',
        image: 'https://q-ec.bstatic.com/images/hotel/max1024x768/390/39057864.jpg',
        rating: 4.5,
        Per_night: 480000
    },
    {
         title: 'Lũng Cú',
         image: 'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000499612_wh_1',
         rating: 4,
         Per_night:320000
     },
     {
         title: 'Fansipan',
         image: 'https://lh5.googleusercontent.com/p/AF1QipMqhi7Wqhw7o0vu0Rw04m-JAOeCwZX1hjFZ95en=w284-h160-k-no',
         rating: 3,
         Per_night:460000
     }
]
const datasourceLocationTrend = [
    {
        image: 'https://mochilerosentailandia.com/wp-content/uploads/2016/07/Halong-Bay.jpg',
        title: 'Hạ Long',
        description: 'Hon Ngoc'
    },
    {
        image: 'https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDUvMmp1dmg0dGljOV8xMjU5MjIyN18xMDE2NTE5MTc1MDU2MjQzXzU4MTU2MDUzNTc3NDIxMzQ0NzNfbi5qcGciXSxbInAiLCJ0aHVtYiIsIjY0MHg0ODBcdTAwM2UiXV0/12592227_1016519175056243_5815605357742134473_n.jpg?sha=c82aa868012d0f4a',
        title: 'Da Nang',
        description: 'Bien hat'
    },
    {
        image: 'https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDUvMmp1dmg0dGljOV8xMjU5MjIyN18xMDE2NTE5MTc1MDU2MjQzXzU4MTU2MDUzNTc3NDIxMzQ0NzNfbi5qcGciXSxbInAiLCJ0aHVtYiIsIjY0MHg0ODBcdTAwM2UiXV0/12592227_1016519175056243_5815605357742134473_n.jpg?sha=c82aa868012d0f4a',
        title: 'Hoi An',
        descripstion:'Ngay xua cu'
    }
] 

export default class FindHotelScreen extends Component {
     constructor(props){
         super(props)
         this.state = {
             input: ''
         }
     }

     renderRow({item}){
        if(isUndefined(item.rating)){
            return(
                <ItemTrendLocation
                    image = {item.image}
                    title = {item.title}
                />
            )
        }else{
            return(
                <ItemTopHotel
                    image = {item.image}
                    title = {item.title}
                    rating = {item.rating}
                    Per_night = {item.Per_night}
                />
            )
        }        
    }

     render() {
         return (
             <ScrollView style = {{backgroundColor:'white'}}>
                <ImageBackground 
                    style={{width:width, height:height/4}}
                    source= {require('../../../Media/bg-signup.png')}>
                    <View style={{flex:1, alignItems:'flex-end', marginBottom:10, flexDirection:'row'}}>
                        <View style={{flex:1, alignItems:'center'}}>
                                <Icon
                                    name='long-arrow-left'
                                    size={20}
                                    color='#ED50C6'
                                    onPress= {()=> {this.props.navigation.goBack()}}
                                 />
                        </View>
                        <View style={{flex:4, alignItems:'center'}}><Text style={{fontSize:24, color: 'white'}}>TravelIU</Text></View>
                        <View style={{flex:1, backgroundColor:'blue'}}></View>
                        
                    </View>
                    <View style={{flex:1}}>

                    </View>
                    
                </ImageBackground>

                <View 
                    style={Styles.containerSearch}>
                    
                    <View style = {Styles.inputSearch}>
                            <Image
                                source = {require('../../../Media/place-holder.png')}
                                style = {{height: 25, width:30, alignSelf: 'center'}}
                            />
                            <TextInput
                                style={{height: 35, width:'70%', paddingLeft:20}}
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
                <View style={{margin:10}}>
                    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end', marginBottom:10}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Tốp khách sạn</Text>
                            <Text 
                                style= {{color:'#ED50C6'}} onPress={()=>{console.log('press see all top hotel...')}}>See all</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={datasourceTopHotel}
                        renderItem = {this.renderRow}
                        keyExtractor={item => item.title}
                        />
                </View>

                <View style={{margin:10}}>
                    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end', marginBottom:10}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Tốp khách sạn Lãng mạn</Text>
                            <Text 
                                style= {{color:'#ED50C6'}} onPress={()=>{console.log('press see all top hotel...')}}>See all</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={datasourceTopHotel}
                        renderItem = {this.renderRow}
                        keyExtractor={item => item.title}
                        />
                </View>

                <View style={{margin:10}}>
                    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end', marginBottom:10}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>HomeStay đẹp nhất</Text>
                            <Text 
                                style= {{color:'#ED50C6'}} onPress={()=>{console.log('press see all top hotel...')}}>See all</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={datasourceTopHotel}
                        renderItem = {this.renderRow}
                        keyExtractor={item => item.title}
                        />
                </View>

                {/* Điểm đến phổ biến */}
                <View style={{margin: 10}}>
                    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end', margin: 10}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Điểm đến phổ biến</Text>
                            <Text 
                                style= {{color:'#ED50C6'}} 
                                onPress={()=>{
                                        console.log('press see all popularDestinations...')
                                        this.props.navigation.navigate('ScreenPopularDestinations')}}>See all</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={datasourceLocationTrend}
                        renderItem = {this.renderRow}
                        keyExtractor={item => item.title}
                        />
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
         height: height/5, 
         marginTop:-height/10, 
         borderRadius:10,
         marginVertical:10
    },
    inputSearch:{
        flex:1, 
        backgroundColor:'white', 
        paddingLeft:5, 
        flexDirection: 'row', 
        alignItems:'center', 
        borderRadius:10, 
        borderColor:'grey',
        borderWidth:1,
        marginBottom:15
    },
    buttonSearch:{
        flex:1, 
        backgroundColor:'#A80C9F', 
        alignItems:'center', 
        justifyContent:'center',
        borderRadius:10,
        
    }

 })