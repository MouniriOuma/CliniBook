import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity  } from "react-native";
import { Button } from "react-native";
import MyCarousel from "../components/AddsCarousel";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Muli_400Regular } from '@expo-google-fonts/muli';
import CentersView from '../components/CentersView'

import { LinearGradient } from 'expo-linear-gradient';


const CentersUser = ({ navigation }) => {

  return (
  <View style={styles.container}>
     <LinearGradient
      colors={['#c0c6cd', 'white']} // Colors for the gradient
      style={styles.container} // Apply styles to the container
    >
       {/* <ScrollView> */}
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.carouselContainer}>
        <MyCarousel />
      </View>
      <View>
        <CentersView />
      </View>
    {/* </ScrollView> */}
    </LinearGradient>
   
    
  </View>
);
} 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default CentersUser;