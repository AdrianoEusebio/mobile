import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Teste2 from "./Paginas/Inicio/Teste2";
import InicioScreen from "./Paginas/Inicio";


const Tab = createBottomTabNavigator();

export default function RoutesScreen(){
    return(
        <Tab.Navigator 
        screenOptions={{
            
        }}>
            <Tab.Screen name=' Inicio' 

            component={InicioScreen} 
            options={{
                headerShown: false
            }}/>

            <Tab.Screen name='Zap'
            component={Teste2}
            options={{
                headerShown: false}}/>

          </Tab.Navigator>
      )
  }
