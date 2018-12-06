import React from 'react';
import { Text, Image } from "react-native";
import  { StackNavigator, createBottomTabNavigator, createAppContainer }  from 'react-navigation'
import HomeScreen from '../Components/UI/HomeScreen';
import Loading from '../Components/UI/Loading';

import StartScreen from "../Components/UI/StartScreen";

import SignUpScreen from '../Components/UI/SignUpScreen';
import SignInScreen from '../Components/UI/SignInScreen';

import SearchScreen from '../Components/UI/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import PopularDestinations from '../Components/UI/PopularDestinations';

import FindHotelScreen from '../Components/UI/FindingScreen/FindHotelScreen';
import FindRestaurantScreen from '../Components/UI/FindingScreen/FindRestaurantScreen';
import FindToursScreen from '../Components/UI/FindingScreen/FindToursScreen';

import CreatePlanScreen from '../Components/UI/CreateTripPlan/CreatePlanScreen';


const HomeStack = StackNavigator({
    ScreenLoading:{
        screen: Loading,
        navigationOptions: { header: null}
    },
    ScreenStart:{
        screen: StartScreen,
        navigationOptions: {header:null} 
    },
    ScreenSignUp:{
        screen: SignUpScreen,
        navigationOptions: {header: null}
    },
    ScreenSignIn:{
        screen: SignInScreen,
        navigationOptions:{header:null}
    },
    ScreenHome: {
        screen: HomeScreen,
        navigationOptions:{header:null}
    },
    ScreenSearch:{
        screen: SearchScreen,
        navigationOptions:{header:null}
    },
    ScreenPopularDestinations:{
        screen: PopularDestinations,
        navigationOptions: {header:null}
    },
    ScreenFindHotel:{
        screen: FindHotelScreen,
        navigationOptions: {header:null}
    },
    ScreenFindRestaurants:{
        screen: FindRestaurantScreen,
        navigationOptions:{header: null}
    },
    ScreenFindTours:{
        screen: FindToursScreen,
        navigationOptions:{header: null}
    }
},
{ 
    headerMode: 'screen' })



HomeStack.navigationOptions = ({ navigation }) => {
        let tabBarVisible = false;
        let state = navigation.state;
        let routes = state.routes;
        if (routes[state.index].routeName === 'ScreenHome') {
          tabBarVisible = true;
        }  
        return {
          tabBarVisible,
        };
      };

const PlanStack = StackNavigator({
    ScreenHome: {
        screen: HomeScreen,
        navigationOptions:{header:null}
    },
})

const CreateStack = StackNavigator({
    ScreenCreat: {
        screen: CreatePlanScreen,
        navigationOptions:{header:null}
    },
})

CreateStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = false
    return {tabBarVisible,};
}

const TripsStack = StackNavigator({
    ScreenHome: {
        screen: HomeScreen,
        navigationOptions:{header:null}
    },
})

const AccountStack = StackNavigator({
    ScreenHome: {
        screen: HomeScreen,
        navigationOptions:{header:null}
    },
})

export const Stack = createBottomTabNavigator(
       {
            Home: {
                screen: HomeStack,
                navigationOptions: {     
                    tabBarIcon : 
                     ({ focused, tintColor }) => {
                                let iconName;
                                iconName = `ios-home`;
                                return <Ionicons name={iconName} size={25} color={tintColor} />;
                                }            
                        // <Image source= {require('../Media/BottomTabIcon/home.png')} style ={{width:20, height:20}}/>  },
                 }
            },
            Plan:{
                screen: PlanStack,
                navigationOptions: {
                        tabBarIcon :  ({ focused, tintColor }) => {
                                    let iconName;
                                    iconName = `ios-list-box`;
                                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                                }
                    }
            },
            Create:{
                screen: CreateStack,
                navigationOptions:{
                        tabBarIcon: <Image source= {require('../Media/BottomTabIcon/Create.png')} style ={{width:80, height:80, marginTop:-10}}/> 
                }
            },
            Trips:{
                screen: TripsStack,
                navigationOptions: {
                                tabBarIcon :  ({ focused, tintColor }) => {
                                    let iconName;
                                    iconName = `ios-pulse`;
                                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                                }
                            }
            },
            Account:{
                screen: AccountStack,
                navigationOptions: {
                                tabBarIcon :  ({ focused, tintColor }) => {
                                    let iconName;
                                    iconName = `ios-person`;
                                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                                }
                            }
            }
       },
       {
            tabBarOptions: {
                showLabel: false,
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                pressColor: 'pink',
                }
        }
)


    // {
    //     Home: {
    //         screen: HomeStack,
    //         navigationOptions: {     
    //             tabBarIcon :  ({ focused, tintColor }) => {
    //                 let iconName;
    //                 iconName = `home-outline`;
    //                 return <Icon name={iconName} size={25} color={tintColor} />;
    //             }
                
    //             // <Image source= {require('../Media/BottomTabIcon/home.png')} style ={{width:20, height:20}}/>  },
    //         },
    //       Plan: { 
    //         screen: PlanStack,
    //         navigationOptions: {
    //             tabBarIcon :  ({ focused, tintColor }) => {
    //                 let iconName;
    //                 iconName = `file-document-box-outline`;
    //                 return <Icon name={iconName} size={25} color={tintColor} />;
    //             }
                
    //             // <Image source= {require('../Media/BottomTabIcon/file.png')} style ={{width:20, height:20}}/> },
    //         },
    //       Create: { 
    //         screen: CreateStack,
    //         navigationOptions: {
    //             tabBarIcon : <Image source= {require('../Media/BottomTabIcon/Create.png')} style ={{width:80, height:80, marginTop:-10}}/> },
    //         },
    //       Trips: {
    //         screen: TripsStack,
    //         navigationOptions: {
    //             tabBarIcon :  ({ focused, tintColor }) => {
    //                 let iconName;
    //                 iconName = `chart-line-variant`;
    //                 return <Icon name={iconName} size={25} color={tintColor} />;
    //             }
    //         //     tabBarIcon : <Image source= {require('../Media/BottomTabIcon/music-sound-wave-line.png')} style ={{width:20, height:20}}/> },
    //         },
    //       Account: { 
    //         screen: AccountStack,
    //         navigationOptions: {
    //             tabBarIcon :  ({ focused, tintColor }) => {
    //                 let iconName;
    //                 iconName = `account-outline`;
    //                 return <Icon name={iconName} size={25} color={tintColor} />;
    //             }
    //         //     tabBarIcon : <Image source= {require('../Media/BottomTabIcon/user.png')} style ={{width:20, height:20}}/> },
    //         }
    // },
    // {
    //     tabBarOptions: {
    //     showLabel: false,
    //     activeTintColor: 'tomato',
    //     inactiveTintColor: 'gray',
    //     pressColor: 'pink',
    //     }
    // }
    // );