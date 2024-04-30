import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useAuthContext } from "../hooks/useAuthContext";
import { useFonts } from "expo-font";
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Muli_400Regular } from '@expo-google-fonts/muli';
import Specialities from "../data/Specialities";
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const SpecialitiesCards = () => {

  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Muli_400Regular,
  });

  const [items, setItems] = React.useState(Specialities);


  const handleShowMore = () => {
    navigation.navigate("AllSpecialities");
  };

  const handleShowCenters = (filter) => {
    navigation.navigate("CentersListFiltered", {filter});
  };

  return (
    <View>
      <Text style={styles.header}>Our specialities</Text>
        <FlatGrid
        itemDimension={95}
        data={items.slice(0, 3)}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleShowCenters(item.name)}>
          <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
          </TouchableOpacity>
          
        )}
      />
        
      <TouchableOpacity onPress={handleShowMore} style={{ alignSelf: 'flex-end' }}>
        <Text style={styles.text}>Show More</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    fontFamily: 'Poppins_200ExtraLight',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 5,
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
    color: '#fff',
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
  text: {
    fontFamily: 'Muli_400Regular',
    fontSize: 15,
    color: '#184557',
    paddingRight: 25,
    margin: -10,

  }
});

export default SpecialitiesCards;