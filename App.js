
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ConfigScreen from './src/Paginas/Configurações';
import AgendaScreen from './src/Paginas/Agenda';
import DesafioScreen from './src/Paginas/Desafios';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Configurações" component={ConfigScreen} />
        <Drawer.Screen name="Desafios" component={DesafioScreen} />
        <Drawer.Screen name="Agenda" component={AgendaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
   