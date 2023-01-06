import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import RoutesScreen from './Routes';
import DesafioScreen from './Paginas/Desafios';
import AgendaScreen from './Paginas/Agenda';
import ConfigScreen from './Paginas/Configurações';

const Drawer = createDrawerNavigator();

 function DrawerScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name= "Menu" component={RoutesScreen}/>
        <Drawer.Screen name='Desafio' component={DesafioScreen} />
        <Drawer.Screen name="Agenda" component={AgendaScreen} />
        <Drawer.Screen name="Confifgurações" component={ConfigScreen} />
      </Drawer.Navigator>
    </NavigationContainer>  
  );
}

export default DrawerScreen

   