import React from 'react';
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import Messages from '../screens/messages'
import Groups from '../screens/groups'
import SearchHeader from '../shared/searchHeader'


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()


const screenTabs =()=>(
  <Tab.Navigator>
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Groups" component={Groups} />
  </Tab.Navigator>
)

export default function TopTab() {
  return (
      <Stack.Navigator
      screenOptions={{
          header:()=><SearchHeader/>,
          cardStyle:{backgroundColor:'white'}
      }}
      >
        <Stack.Screen name='Chats' component={screenTabs} />
      </Stack.Navigator>
  );
}