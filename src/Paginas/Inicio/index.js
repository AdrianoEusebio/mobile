import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Teste from './Teste';
import Teste2 from './Teste2';

const Tab = createBottomTabNavigator();

const InicioScreen = () => {
  return (
    <View>
      <Tab.Screen name="Menu"/>
    </View>
  )
}

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name=' Teste' component={Teste}/>
            <Tab.Screen name='Teste2r' component={Teste2}/>
        </Tab.Navigator>
    )
}

