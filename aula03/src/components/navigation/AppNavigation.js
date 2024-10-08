import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'

const AppNavigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name=  "Home"component= {HomeScreen} />
        <Stack.Screen name= "Details" component= {DetailScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation