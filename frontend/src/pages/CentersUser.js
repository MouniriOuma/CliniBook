import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity  } from "react-native";
import MyCarousel from "../components/AdsCarousel";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Muli_400Regular } from '@expo-google-fonts/muli';
import CentersView from '../components/CentersView'
import { LinearGradient } from 'expo-linear-gradient';
import SpecialitiesCards from '../components/SpecialitiesCards';
import CentersFiltered  from "../components/CentersFiltered";
import { useAuthContext } from "../hooks/useAuthContext";
import UserService from "../services/UserService";


const CentersUser = () => {

  const { user } = useAuthContext();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userService = UserService(user.token);
      try {
        const userData = await userService.getUserByEmail(user.email);
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user infos :', error);
      }
    }; 
    fetchUser();
  }, [user]);


  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Muli_400Regular,
  });

  return (
  <View style={styles.container}>
     
      <ScrollView>
        <LinearGradient
              colors={['#c0c6cd', 'white']} 
              style={styles.container} 
            >
          <View style={styles.header}>
            <Header />
          </View>

          <View style={styles.carouselContainer}>
            <MyCarousel />
          </View>
        </LinearGradient>
      
        

        <View>
          {/* <CentersView /> */}
          {/* <CentersFiltered filter={userData.city} /> */}
          <SpecialitiesCards />
        </View>
      </ScrollView>
     
      
    {/* </ScrollView> */}
    
   
    
  </View>
);
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff' 
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