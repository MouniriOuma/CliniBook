import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContextProvider } from './src/context/AuthContext';
import UserService from './src/services/UserService';
import React, { useEffect } from 'react';
import axios from 'axios'; 

//pages and components
import AuthStack from './src/navigator/AuthStack';


export default function App() {
  


  
  return (
    <SafeAreaView style={{ flex: 1}}>
    <AuthContextProvider>
      <NavigationContainer>
      <AuthStack />
      </NavigationContainer>
    </AuthContextProvider>
    </SafeAreaView>
  );
}