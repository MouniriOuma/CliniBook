import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "react-native";
import { useLogout } from "../hooks/useLogout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CenterService from "../services/CenterService";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Muli_400Regular } from '@expo-google-fonts/muli';
import { useRoute } from '@react-navigation/native';


const CenterInfo = () => {
  
  const route = useRoute();

  const { user } = useAuthContext();

  const center = route.params?.center || 'No data passed';

  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Muli_400Regular,
  });
  

  if (!fontsLoaded || center === null) {
    return <Text>Loading...</Text>;
  }

  const handleBooking = () => {
    // navigation.navigate('CenterInfo', {center})
    navigation.navigate('Booking', center)
  }

  return (
      <View style={styles.container}>
        <Text style={styles.header}>{center.name}</Text>
        <View style={styles.card}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>City:</Text>
            <Text style={styles.detailValue}>{center.city}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Address:</Text>
            <Text style={styles.detailValue}>{center.address}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Contact:</Text>
            <Text style={styles.detailValue}>{center.contact}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Specializations:</Text>
            {center.specializations.map((specialization, index) => (
              <Text key={index} style={styles.detailValue}>{specialization}</Text>
            ))}
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Location:</Text>
            <Text style={styles.detailValue}>{center.city}, {center.address}</Text>
            <View style={styles.buttonMargin} />
            {/* <TouchableOpacity onPress={handleLocationPress} style={styles.viewOnMapButton}>
              <Text style={styles.viewOnMapButtonText}>View on Map</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={handleBooking} style={styles.viewOnMapButton}>
              <Text style={styles.viewOnMapButtonText}>Book an appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* {isCreator && (
          <View>
            <View style={styles.buttonMargin} />
            <TouchableOpacity onPress={handleDeleteCenter} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete Center</Text>
            </TouchableOpacity>
          </View>
        )} */}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    detailItem: {
      marginBottom: 10,
    },
    detailLabel: {
      fontWeight: 'bold',
      color: '#007260',
    },
    detailValue: {
      color: '#333',
    },
    buttonMargin: {
      marginVertical: 10,
    },
    viewOnMapButton: {
      backgroundColor: '#007260',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignItems: 'center',
    },
    viewOnMapButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    deleteButton: {
      backgroundColor: '#C02E4A',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignItems: 'center',
    },
    deleteButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    }
  });

export default CenterInfo;