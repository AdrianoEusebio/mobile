import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RoutesScreen from './Routes';
import DesafioScreen from './Paginas/Desafios';
import AgendaScreen from './Paginas/Agenda';
import ConfigScreen from './Paginas/Configurações';


const Drawer = createDrawerNavigator();

function DrawerScreen(){
  return(
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      headerTintColor: 'black'
    }}>

    <Drawer.Screen name= '   Hallel App' component={RoutesScreen}
    //predefinições
      options={{
        //barra do drawer navigation
        drawerItemStyle:{backgroundColor: 'white'},

        //header da tela
        headerStyle:{backgroundColor: '#FFB800',
          height: 110,
          borderBottomColor:"black",
          },

        //header do titulo
        headerTitleContainerStyle:{backgroundColor:"white",
          width:125,
          height:63,
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10, 
          borderTopRightRadius:10, 
          borderTopLeftRadius:10,
          borderColor:"black",
          borderLeftColor:'black'},

          //Cor do texto
          headerTintColor:"black",
      }}/>





    <Drawer.Screen name='   Desafio' component={DesafioScreen} />
    <Drawer.Screen name="   Agenda" component={AgendaScreen} />
    <Drawer.Screen name="   Confifgurações" component={ConfigScreen} />
  </Drawer.Navigator>
  )
}

export default DrawerScreen

   