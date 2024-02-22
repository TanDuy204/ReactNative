import React from 'react';
import {View, Text, } from 'react-native';
import Lab3 from './src/screens/lab3';

import Splash from './src/screens/auth/splash';
import SigniN from './src/screens/auth/signIn';
import SignUp from './src/screens/auth/signUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab5 from './src/screens/Lab5';
import Lab6 from './src/screens/lab6';
import Lab5_3 from './src/screens/Lab5_3';
import Lab7 from './src/screens/Lab7';
import Crud from './src/screens/Lab8/CRUD.js';




// const Stack = createNativeStackNavigator()
const App = () => {
  return (
  // <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen name='Home' component={Splash}/>
  //     <Stack.Screen name='SignIn' component={SigniN}/>
  //     <Stack.Screen name='SignUp' component={SignUp}/>
  //   </Stack.Navigator>
  // </NavigationContainer>
  <Crud/>
  );
};

export default App;