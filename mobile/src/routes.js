import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from  '@react-navigation/stack';

const AppStack = createStackNavigator(); /**Variavel, Dentro desse AppStack cadastrar as routas da aplicação */

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';


export default function Routes() {
    return (
        <NavigationContainer> 

            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
           </AppStack.Navigator>

        </NavigationContainer>
    );
}

