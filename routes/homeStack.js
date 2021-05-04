import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native'
import Main from '../screens/main'
import SignIn from '../screens/signIn'
import SignUp from '../screens/signUp'
import PageStack from './pagesStack'
import SingleChat from '../screens/chat'

const Stack = createStackNavigator()

export default function HomeStack() {
  return(
    <NavigationContainer theme={{...DefaultTheme,colors:{...DefaultTheme.colors,background:'white'}}}>
      <Stack.Navigator
      initialRouteName='Main'
      mode='modal'
        screenOptions={{
          headerStyle: {
            elevation:0,
          },
          headerTintColor: 'black',
            headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30
          }
        }}
      >
        <Stack.Screen name='Main' options={{headerShown:false,}} component={Main}/>
        <Stack.Screen name='Sign In' component={SignIn}/>
        <Stack.Screen name='Sign Up' component={SignUp}/>
        <Stack.Screen name='Single Chat' component={SingleChat} options={{headerShown:false}}/>
        <Stack.Screen name='PageStack' options={{headerShown:false}} component={PageStack}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}