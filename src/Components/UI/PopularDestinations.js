import React, { Component } from 'react';
import { 
    View, Text, ImageBackground, ScrollView, TouchableOpacity, FlatList
 } from "react-native";
 import  Icon  from "react-native-vector-icons/FontAwesome";
 import ItemDestinations from './FlatListItem/FlatListItemHomeScreen/ItemDestinations.js'

 const datasourceDestinations = [
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
    },
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
]

 export default class PopularDestinations extends Component {

    renderRow({item}){
        console.log(item.title)
        return(
            
            <ItemDestinations
                title = {item.title}
                image = {item.image}
                description = {item.description}
            />
        )
    }
    render() {
         return (
             <View style={{flex:1}}>
                <View style={{height:'10%', backgroundColor:'#8D0CBA', width:'100%'}}>
                   <View style = {{flex:1}}>

                   </View>
                   <View style={{flex:1, flexDirection:'row', alignItems:'center', marginHorizontal:5, height:30}}>
                        <TouchableOpacity 
                                style={{height:20, width:30, borderRadius:20}}
                                onPress={()=> {this.props.navigation.goBack()}}>
                            <Icon
                                name='long-arrow-left'
                                size={20}
                                style={{color:'white'}}
                            />
                        </TouchableOpacity>
                        
                        <Text style={{color:'white', fontSize:20, marginHorizontal:20}}>Điểm đến phổ biến</Text>
                   </View>
                    
                </View>
                <ScrollView style={{flex:2, backgroundColor:'white', width:'100%', padding:15}}>
                    <FlatList
                        data={datasourceDestinations}
                        renderItem = {this.renderRow}
                        keyExtractor={item => item.title}
                    />
                </ScrollView>
             </View>
             
         );
     }
 }