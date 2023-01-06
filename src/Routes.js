import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InicioScreen from "./Paginas/Inicio";
import LiturgiaScreen from "./Paginas/Liturgia";


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

            <Tab.Screen name='Liturgia'
            component={LiturgiaScreen}
            options={{
                headerShown: false}}/>

          </Tab.Navigator>
      )
  }
