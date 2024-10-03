import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity  } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFonts } from "expo-font";
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Muli_400Regular } from '@expo-google-fonts/muli';
import CenterService from "../services/CenterService";




const CentersView = () => {

  const { user } = useAuthContext();
  const [centers, setCenters] = useState(null);

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Muli_400Regular,
  });
  
  
  useEffect(() => {
    const fetchCenters = async () => {
      if(user){
      const centerService = CenterService(user.token);
      try {
        const centers = await centerService.getCenters();
        console.log(centers);
        setCenters(centers);
      } catch (error) {
        console.error(error);
      }}
    }; 
    fetchCenters();
  }, [user.token]);

  if (!fontsLoaded || centers === null) {
    return <Text>Loading...</Text>;
  }


    return (
      <View style={styles.containerCenter}>
        <Text style={styles.header}>Our centers</Text>
        {centers.map((center, index) => (
          <View key={index} style={styles.centerCard}>
            <Text style={styles.centerName}>{center.name}</Text>
            <Text>{center.contact}</Text>
            <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking', center)}>
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  };
  

  
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#e2e8ef',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    header: {
      fontSize: 50,
      fontFamily: 'Poppins_200ExtraLight',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingHorizontal: 20,
      margin: 5,
      color: '#184557',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Poppins_200ExtraLight',
      marginBottom: 20,
      color: '#184557',
    },
    carouselContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 20,
      //marginBottom: 20,
      margin: 10,
      width: '95%',
    },
    centerName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    bookButton: {
      backgroundColor: '#184557',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
    },
    bookButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  
export default CentersView;