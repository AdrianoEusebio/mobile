import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Configuracoes from './Screens/Configuracoes';

const Tab = createBottomTabNavigator();

export default function RoutesTest(){
    return(
        <Tab.Navigator>
             <Tab.Screen 
                name="Configuracoes"
                component={Configuracoes} 
            />
      
        </Tab.Navigator>
    );
}