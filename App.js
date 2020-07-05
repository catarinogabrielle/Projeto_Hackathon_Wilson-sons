import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Ajuda from './src/pages/Ajuda';
import Home from './src/pages/Home';
import Cursos from './src/pages/Home/pages/Cursos';
import QRCode from './src/pages/Home/pages/QRCode';
import Simulados from './src/pages/Home/pages/Simulados';
import Materiais from './src/pages/Home/pages/Materiais';
import Cursopag2 from './src/pages/Home/pages/Cursos/pages/cursopag2';
import Cursopag3 from './src/pages/Home/pages/Cursos/pages/cursopag3';
import Quiz from './src/pages/Home/pages/Simulados/Quiz/quiz';
import Quiz2 from './src/pages/Home/pages/Simulados/Quiz/quiz2';
import Quiz3 from './src/pages/Home/pages/Simulados/Quiz/quiz3';
import Quiz4 from './src/pages/Home/pages/Simulados/Quiz/quiz4';
import Quiz5 from './src/pages/Home/pages/Simulados/Quiz/quiz5';
import Code from './src/pages/Home/pages/QRCode/code';
import Code2 from './src/pages/Home/pages/QRCode/code2';
import Code3 from './src/pages/Home/pages/QRCode/code3';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="Cursos" 
        component={Cursos}
        options={{
          title: 'CURSOS',
          headerStyle: {
            backgroundColor: '#1E306E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
        />

        <Stack.Screen 
        name="Qrcode" 
        component={QRCode}
        options={{
          title: 'QRCode',
          headerStyle: {
            backgroundColor: '#1E306E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
        />

        <Stack.Screen 
        name="Simulados" 
        component={Simulados}
        options={{
          title: 'Rank',
          headerStyle: {
            backgroundColor: '#1E306E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
        />

        <Stack.Screen 
        name="Materiais" 
        component={Materiais}
        options={{
          title: 'MATERIAIS',
          headerStyle: {
            backgroundColor: '#1E306E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
        />  

        <Stack.Screen 
        name="Cursopag2" 
        component={Cursopag2}
        options={{
          title: 'CURSO',
          headerStyle: {
            backgroundColor: '#1E306E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
        />    

        <Stack.Screen 
        name="Cursopag3" 
        component={Cursopag3}
        options={{
          title: 'Seguraça a bordo',
          headerStyle: {
            backgroundColor: '#1E306E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
        />
        <Stack.Screen 
        name="Ajuda" 
        component={Ajuda}
        options={{
          title: 'Precisa de ajuda?',
          headerStyle: {
            backgroundColor: '#1E306E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
        />
        <Stack.Screen 
        name="Quiz" 
        component={Quiz}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Quiz2" 
        component={Quiz2}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Quiz3" 
        component={Quiz3}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Quiz4" 
        component={Quiz4}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Quiz5" 
        component={Quiz5}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Code" 
        component={Code}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Code2" 
        component={Code2}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Code3" 
        component={Code3}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
