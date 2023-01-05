
<<<<<<< HEAD
//import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import RoutesTest from './src/routesTest';
=======
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ConfigScreen from './src/Paginas/Configurações';
import AgendaScreen from './src/Paginas/Agenda';
import DesafioScreen from './src/Paginas/Desafios';

const Drawer = createDrawerNavigator();
>>>>>>> 056a229e2e1539979d0a571155605bbdbd442060

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <RoutesTest/>
=======
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Configurações" component={ConfigScreen} />
        <Drawer.Screen name="Desafios" component={DesafioScreen} />
        <Drawer.Screen name="Agenda" component={AgendaScreen} />
      </Drawer.Navigator>
>>>>>>> 056a229e2e1539979d0a571155605bbdbd442060
    </NavigationContainer>
  );
}
   