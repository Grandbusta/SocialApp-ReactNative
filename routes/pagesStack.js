import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import Feeds from '../screens/feeds'
import Notifications from '../screens/notifications'
import PersonalProfile from '../screens/personalProfile'
import TopTab from './topTab'
import People from '../screens/people'

const Tab = createBottomTabNavigator();

export default function PageStack() {
  return (
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused,color})=>{
            let iconName
            if(route.name==='Feeds'){
              iconName=focused?'home-sharp':'home-outline'
            }else if(route.name==='Notifications'){
              iconName=focused?'notifications-sharp':'notifications-outline'
            }else if(route.name==='Personal Profile'){
              iconName=focused?'person':'person-outline'
            }else if(route.name==='Messaging'){
              iconName=focused?'mail':'mail-outline'
            }else if(route.name==='People'){
              iconName=focused?'people-sharp':'people-outline'
            }
            return <Ionicons size={26} name={iconName} color={color}/>
          },
        })}
        tabBarOptions={{
          activeTintColor:'#1DA1F2',
          showLabel:true
        }}
      >
        <Tab.Screen name="Feeds" component={Feeds}/>
        <Tab.Screen name="People" component={People} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Messaging" component={TopTab}/>
        <Tab.Screen name="Personal Profile" component={PersonalProfile} options={{tabBarLabel:'Profile'}}/>
      </Tab.Navigator>
  );
}