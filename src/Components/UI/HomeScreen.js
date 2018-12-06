import React, { Component } from 'react';
import { 
    View, ScrollView, StyleSheet, ImageBackground, Text, StatusBar, TextInput, TouchableOpacity,
    Image, FlatList, Dimensions 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ItemList from './FlatListItem/FlatListItemHomeScreen/ItemList';
import ItemTrendLocation from './FlatListItem/FlatListItemHomeScreen/ItemTrendLocation'
import {isUndefined} from 'react-native-util';
import ItemPromotion from './FlatListItem/FlatListItemHomeScreen/ItemPromotion';

const window = Dimensions.get('window');
const datasourcePromotion = [
    {
        title: 'Ha Giang',
        image: 'https://triphunter.vn/media/W1siZiIsIjIwMTgvMDkvMjcvMjhheGlteGxrb19IYUdpYW5nX29wdGltaXplLmpwZyJdLFsicCIsInRodW1iIiwiNjQweDQ4MCMiXV0/Cho-tinh-khau-vai-ha-giang-mytour-1.jpg?sha=cca8f02c3fdadb82',
        rating: 4.5,
        promotion: 80
    },
    {
         title: 'Cao Bằng',
         image: 'https://triphunter.vn/media/W1siZiIsIjIwMTgvMTEvMDEvN2t2ZnY2bWNoNl9naW9pX3RoaWV1X21vY19jaGF1X1RyaXBIdW50ZXIuanBnIl0sWyJwIiwidGh1bWIiLCI2NDB4NDgwIyJdXQ/Moc-Chau-TripHunter-1.jpg?sha=e3c235622d861419',
         rating: 4,
         promotion:75
     },
     {
         title: 'Bắc Cạn',
         image: 'https://triphunter.vn/media/W1siZiIsIjIwMTgvMDQvMTAvN3dob3ZkaWNxeF9odWUuanBnIl0sWyJwIiwidGh1bWIiLCI2NDB4NDgwIyJdXQ/hue.jpg?sha=da56de6061471ded',
         rating: 3,
         promotion:60
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
                            <View style={{flex:2,  alignItem: 'flex-end',  justifyContent: 'center', width:'100%', flexDirection:'row'}}>
 
                                <View style={{flex:10, alignItems:'center', justifyContent:'flex-end'}}>
                                    <Text style={{fontSize:20, color: 'white'}}>TravelUi</Text>
                                </View>
                                
                                <View style={{flex:1, alignItems: 'flex-end',justifyContent: 'flex-end',}}>
                                    <Icon
                                        name='bell-o'
                                        size={20}
                                        color = 'white'
                                    />
                                </View>
                                
                            </View>
                            <View style={{flex:1,  alignItem: 'flex-end',  justifyContent: 'center', width:'100%', flexDirection:'row', marginTop: 20}}>
                                <TouchableOpacity 
                                    onPress={()=>{
                                        console.log("dungtt".length);
                                        this.props.navigation.navigate('ScreenSearch')}}
                                    style={{flex:1, flexDirection:'row', paddingHorizontal:10, height: 35, backgroundColor:'white', marginLeft:50, marginRight:50, borderRadius:10, alignItems:'center', justifyContent:'space-between'}}>
                                    <Text style={{color:'grey'}}>Find Destination, hotel, restaurants...</Text>
                                    <Icon
                                            name='search'
                                            size={20}
                                            color='#ED50C6'
                                        />
                                </TouchableOpacity>
                
                            </View>
                            <View style={{flex:2}}></View>

                         
                    </ImageBackground>
                </View>

                {/* Group button on Home */}
                <View style={{alignItem: 'center',  justifyContent: 'center', width:'100%', flexDirection:'row', marginTop:-30, }}>
                                <TouchableOpacity style={styles.homeButton}>
                                    <View style={{borderRadius:10,borderColor:'pink', borderWidth:1,justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
                                        <Image
                                            source={require('../../Media/HomeButton/Group4101.png')}
                                            style={styles.icButtonHome}
                                        />
                                        <Text style={styles.textButton}>Trips plan</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.homeButton} onPress= {()=> {this.props.navigation.navigate('ScreenFindHotel')}}>
                                    <View style={{borderRadius:10,borderColor:'pink', borderWidth:1,justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
                                        <Image
                                            source={require('../../Media/HomeButton/sleeping-in-bed.png')}
                                            style={styles.icButtonHome}
                                        />
                                        <Text style={styles.textButton}>Hotels</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.homeButton}>
                                    <View style={{borderRadius:10,borderColor:'pink', borderWidth:1,justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
                                        <Image
                                            source={require('../../Media/HomeButton/airplane.png')}
                                            style={styles.icButtonHome}
                                        />
                                        <Text style={styles.textButton}>Flights</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.homeButton} onPress= {()=> {this.props.navigation.navigate('ScreenFindRestaurants')}}>
                                    <View style={{borderRadius:10,borderColor:'pink', borderWidth:1,justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
                                        <Image
                                            source={require('../../Media/HomeButton/Group4163.png')}
                                            style={styles.icButtonHome}
                                        />
                                        <Text style={styles.textButton}>Restaurants</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.homeButton} onPress={()=> {this.props.navigation.navigate('ScreenFindTours')}}>
                                    <View style={{borderRadius:10,borderColor:'pink', borderWidth:1,justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
                                        <Image
                                            source={require('../../Media/HomeButton/bus.png')}
                                            style={styles.icButtonHome}
                                        />
                                        <Text style={styles.textButton}>Tours</Text>
                                    </View>
                                </TouchableOpacity>

                                
                            </View>
                
                {/* promotion news */}
                <View style={{margin: 10}}>
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
                
                {/* Địa điểm gần bạn */}
                <View style={{margin: 10}}>
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
                <View style={{margin: 10}}>
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
        if(!isUndefined(item.promotion)){
            return(
                <ItemPromotion
                    image = {item.image}
                    title = {item.title}
                    promotion = {item.promotion}
                />
            )
        }else{
            // console.log(isUndefined(item.rating ))
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
        width:30, height:25, margin:5, alignSelf: 'center'
    },
    textButton:{
        color:'grey', fontSize:11
    }

})