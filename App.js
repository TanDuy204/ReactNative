import React from 'react';
import {View, Text, } from 'react-native';
import Lab3 from './src/screens/lab3';
import Lab4 from './src/screens/lab4';
import Splash from './src/screens/auth/splash';
import SigniN from './src/screens/auth/signIn';
import SignUp from './src/screens/auth/signUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



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
  <Lab4></Lab4>
  );
};

export default App;