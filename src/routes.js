import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Inicio from './Paginas/Inicio'
import Perfil from './Paginas/Perfil'
import Desafios from './Paginas/Desafios'
import Liturgia from './Paginas/Liturgia'
import Mais from './Paginas/Mais'
import Login from './Screens/Login/Login'
import Cadastro from './Screens/Cadastro/Cadastro'
const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
             <Tab.Screen 
                name="Login"
                component={Login} 
            />
            
            <Tab.Screen 
                name="Cadastro" 
                component={Cadastro} 
            />
            
            <Tab.Screen
                name= "Inicio"
                component={Inicio}
            />

            <Tab.Screen
                name= "Desafios"
                component={Desafios}
            />

            <Tab.Screen
                name= "Mais"
                component={Mais}
            />

            <Tab.Screen
                name= "Liturgia"
                component={Liturgia}
            />

            <Tab.Screen
                name= "Perfil"
                component={Perfil}
            />
            
           
      
        </Tab.Navigator>
    );
}