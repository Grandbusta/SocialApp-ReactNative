import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Main from '../screens/main'
import SignIn from '../screens/signIn'
import SignUp from '../screens/signUp'
import PageStack from './pagesStack'

const Stack = createStackNavigator()

export default function HomeStack() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Main'
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
        <Stack.Screen name='PageStack' options={{headerShown:false}} component={PageStack}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}