import React, { Component } from 'react';
import { 
    View, ScrollView, StyleSheet, ImageBackground, 
    ToolbarAndroid, Text, StatusBar, TextInput, TouchableOpacity,
    Image, FlatList,
    ListView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import  {Input, Header}  from 'react-native-elements';
import ItemList from './FlatListItem/ItemList';
import ItemTrendLocation from './FlatListItem/ItemTrendLocation'
import { Dimensions } from 'react-native'
import {isUndefined} from 'react-native-util';

const window = Dimensions.get('window');
const datasourcePromotion = [
    {
        title: 'Ha Giang',
        image: 'https://triphunter.vn/media/W1siZiIsIjIwMTgvMDkvMjcvMjhheGlteGxrb19IYUdpYW5nX29wdGltaXplLmpwZyJdLFsicCIsInRodW1iIiwiNjQweDQ4MCMiXV0/Cho-tinh-khau-vai-ha-giang-mytour-1.jpg?sha=cca8f02c3fdadb82',
        rating: 4.5
    },
    {
         title: 'Cao Bằng',
         image: 'https://triphunter.vn/media/W1siZiIsIjIwMTgvMTEvMDEvN2t2ZnY2bWNoNl9naW9pX3RoaWV1X21vY19jaGF1X1RyaXBIdW50ZXIuanBnIl0sWyJwIiwidGh1bWIiLCI2NDB4NDgwIyJdXQ/Moc-Chau-TripHunter-1.jpg?sha=e3c235622d861419',
         rating: 4
     },
     {
         title: 'Bắc Cạn',
         image: 'https://triphunter.vn/media/W1siZiIsIjIwMTgvMDQvMTAvN3dob3ZkaWNxeF9odWUuanBnIl0sWyJwIiwidGh1bWIiLCI2NDB4NDgwIyJdXQ/hue.jpg?sha=da56de6061471ded',
         rating: 3
     }
]
const datasourceLocationTrend = [
    {
        image: 'https://mochilerosentailandia.com/wp-content/uploads/2016/07/Halong-Bay.jpg',
        title: 'Hạ Long'
    },
    {
        image: 'https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDUvMmp1dmg0dGljOV8xMjU5MjIyN18xMDE2NTE5MTc1MDU2MjQzXzU4MTU2MDUzNTc3NDIxMzQ0NzNfbi5qcGciXSxbInAiLCJ0aHVtYiIsIjY0MHg0ODBcdTAwM2UiXV0/12592227_1016519175056243_5815605357742134473_n.jpg?sha=c82aa868012d0f4a',
        title: 'Da Nang'
    },
    {
        image: 'https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDUvMmp1dmg0dGljOV8xMjU5MjIyN18xMDE2NTE5MTc1MDU2MjQzXzU4MTU2MDUzNTc3NDIxMzQ0NzNfbi5qcGciXSxbInAiLCJ0aHVtYiIsIjY0MHg0ODBcdTAwM2UiXV0/12592227_1016519175056243_5815605357742134473_n.jpg?sha=c82aa868012d0f4a',
        title: 'Hoi An'
    }
]
const datasourceNearLocation = [
    {
        title: 'Ha Giang',
        image: 'https://triphunter.vn/media/W1siZiIsIjIwMTgvMDkvMjcvMjhheGlteGxrb19IYUdpYW5nX29wdGltaXplLmpwZyJdLFsicCIsInRodW1iIiwiNjQweDQ4MCMiXV0/Cho-tinh-khau-vai-ha-giang-mytour-1.jpg?sha=cca8f02c3fdadb82',
        rating: 4.5
    },
    {
         title: 'Cao Bằng',
         image: 'https://triphunter.vn/media/W1siZiIsIjIwMTgvMTEvMDEvN2t2ZnY2bWNoNl9naW9pX3RoaWV1X21vY19jaGF1X1RyaXBIdW50ZXIuanBnIl0sWyJwIiwidGh1bWIiLCI2NDB4NDgwIyJdXQ/Moc-Chau-TripHunter-1.jpg?sha=e3c235622d861419',
         rating: 4
     },
     {
         title: 'Bắc Cạn',
         image: 'https://triphunter.vn/media/W1siZiIsIjIwMTgvMDQvMTAvN3dob3ZkaWNxeF9odWUuanBnIl0sWyJwIiwidGh1bWIiLCI2NDB4NDgwIyJdXQ/hue.jpg?sha=da56de6061471ded',
         rating: 3
     }
]
export default class HomeScreen extends Component {
   constructor(props){
       super(props)
       this.state = {
           
       }
   }
   
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor='rgba(241, 23, 190, 0.1)' translucent = {true} />
                {/* Headder, Title, Search bar */}
                <View style={{height: window.height/4, backgroundColor:'red'}}>
                    <ImageBackground
                        source={require('../../Media/bg-signup.png')}
                        style={{flex:1, width: '100%', borderRadius: 10, alignItems:'center'}}>
                            <View style={{flex:2,  alignItem: 'center',  justifyContent: 'center', width:'100%', flexDirection:'row'}}>
 
                                <View style={{flex:10, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontSize:20, color: 'white'}}>TravelUi</Text>
                                </View>
                                
                                <View style={{flex:1, justifyContent: 'center',}}>
                                    <Icon
                                        name='bell-o'
                                        size={20}
                                        color = 'white'
                                    />
                                </View>
                                
                            </View>
                            <View style={{flex:1,  alignItem: 'center',  justifyContent: 'center', width:'100%', flexDirection:'row'}}>
                                <TextInput
                                    style={{flex:1, height: 40, backgroundColor:'white', marginLeft:50, marginRight:50, borderRadius:10}}
                                    rightIcon={
                                        <Icon
                                            name='search'
                                            size={20}
                                            color='pink'
                                        />
                                    }
                                />
                            </View>
                            <View style={{flex:2}}></View>

                         
                    </ImageBackground>
                </View>

                {/* Group button on Home */}
                <View style={{alignItem: 'center',  justifyContent: 'center', width:'100%', flexDirection:'row', marginTop:-30, }}>
                                <TouchableOpacity style={styles.homeButton}>
                                    <View style={{borderRadius:10,justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
                                        <Image
                                            source={require('../../Media/Group4101.png')}
                                            style={styles.icButtonHome}
                                        />
                                        <Text style={styles.textButton}>Trips plan</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.homeButton}>
                                    <View style={{borderRadius:10,justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
                                        <Image
                                            source={require('../../Media/sleeping-in-bed.png')}
                                            style={styles.icButtonHome}
                                        />
                                        <Text style={styles.textButton}>Hotels</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.homeButton}>
                                    <View style={{borderRadius:10,justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
                                        <Image
                                            source={require('../../Media/airplane.png')}
                                            style={styles.icButtonHome}
                                        />
                                        <Text style={styles.textButton}>Flights</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.homeButton}>
                                    <View style={{borderRadius:10,justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
                                        <Image
                                            source={require('../../Media/Group4163.png')}
                                            style={styles.icButtonHome}
                                        />
                                        <Text style={styles.textButton}>Restaurants</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.homeButton}>
                                    <View style={{borderRadius:10,justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
                                        <Image
                                            source={require('../../Media/bus.png')}
                                            style={styles.icButtonHome}
                                        />
                                        <Text style={styles.textButton}>Tours</Text>
                                    </View>
                                </TouchableOpacity>

                                
                            </View>
                
                {/* promotion news */}
                <View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end', margin: 10}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Tin khuyến mãi</Text>
                            <Text 
                                style= {{color:'#ED50C6'}} onPress={()=>{console.log('press see all promotion...')}}>See all</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={datasourcePromotion}
                        renderItem = {this.renderRow}
                        keyExtractor={item => item.title}
                        />
                </View>
                
                {/* Điểm đến phổ biến */}
                <View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end', margin: 10}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Điểm đến phổ biến</Text>
                            <Text 
                                style= {{color:'#ED50C6'}} onPress={()=>{console.log('press see all promotion...')}}>See all</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={datasourceLocationTrend}
                        renderItem = {this.renderRow}
                        keyExtractor={item => item.title}
                        />
                </View>
                
                {/* Địa điểm gần bạn */}
                <View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end', margin: 10}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Điểm đến gần bạn</Text>
                            <Text 
                                style= {{color:'#ED50C6'}} onPress={()=>{console.log('press see all promotion...')}}>See all</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={datasourceNearLocation}
                        renderItem = {this.renderRow}
                        keyExtractor={item => item.title}
                        />
                </View>
                
                {/* Tháng này đi đâu */}
                <View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end', margin: 10}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Tháng này nên đi đâu</Text>
                            <Text 
                                style= {{color:'#ED50C6'}} onPress={()=>{console.log('press see all promotion...')}}>See all</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={datasourceNearLocation}
                        renderItem = {this.renderRow}
                        keyExtractor={item => item.title}
                        />
                </View>
            </ScrollView>
        );
    }

    renderRow({item}){
        console.log(isUndefined(item.rating ))
        if(isUndefined(item.rating)){
            return(
                <ItemTrendLocation
                    image = {item.image}
                    title = {item.title}
                />
            )
        }else{
            return(
                <ItemList
                    image = {item.image}
                    title = {item.title}
                    rating = {item.rating}
                />
            )
        }
        
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    }, 
    homeButton:{
        margin:2, 
        width: window.width/6, height: window.width/6
    },
    icButtonHome:{
        width:30, height:30, margin:5
    },
    textButton:{
        color:'grey', fontSize:11
    }

})