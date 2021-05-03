import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Messages from '../screens/messages'
import Groups from '../screens/groups'
import SearchHeader from '../shared/searchHeader'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()

const screenTabs =()=>(
  <Tab.Navigator
  tabBarOptions={{indicatorStyle:{backgroundColor:'#1DA1F2'}}}
  >
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Groups" component={Groups} />
  </Tab.Navigator>
)

export default function TopTab() {
  return (
      <Stack.Navigator
      mode='modal'
      screenOptions={{
          header:()=><SearchHeader/>,
          cardStyle:{backgroundColor:'white'}
      }}
      >
        <Stack.Screen name='Chats' component={screenTabs} />
      </Stack.Navigator>
  );
}