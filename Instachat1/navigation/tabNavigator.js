import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import CreateStoryScreen from "../screens/CreateStory";
import FeedScreen from '../screens/Feed';
import React from "react";

const Tab=createBottomTabNavigator();
const BottomTabNavigator=()=>{
  return(
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon:(({focused,color,size})=>{
        let iconname;
        if(route.name==='CreatePostsScreen'){
          iconname=focused?'create':'create-outline'
        }else if(route.name==='PostsScreen'){
          iconname=focused?'book':'book-outline'
        }
        return <Ionicons name={iconname} size={size} color={color}/>
      })
    })} 
    tabBarOptions={{
      activeTintColor:'tomato',
      inactiveTintColor:'grey'
    }}    
    >
      <Tab.Screen name='CreatePostsScreen' component={CreateStoryScreen}/>
      <Tab.Screen name='PostsScreen' component={FeedScreen}/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator