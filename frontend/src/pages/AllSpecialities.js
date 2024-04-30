import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font";
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Muli_400Regular } from '@expo-google-fonts/muli';
import Specialities from "../data/Specialities";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../components/Header";


const AllSpecialities = () => {

  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Muli_400Regular,
  });

  const [items, setItems] = React.useState(Specialities);

  const handleShowCenters = (filter) => {
    navigation.navigate("CentersListFiltered", {filter});
  };

  return (
    
      <LinearGradient
      colors={['#c0c6cd', 'white']} // Colors for the gradient
      style={styles.container} // Apply styles to the container
      >
      <View>
      {/* <Header/> */}
      <Text style={styles.header}>Our specialities</Text>
        <FlatGrid
        itemDimension={95}
        data={items}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleShowCenters(item.name)}>
          <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
          </TouchableOpacity>
          
        )}
      />
    
      
      
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    fontFamily: 'Poppins_200ExtraLight',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 35,
    color: '#184557',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  itemName: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  icon: {
    marginBottom: 5,
  },
});

export default AllSpecialities;