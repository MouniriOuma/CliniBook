import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFonts } from "expo-font";
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Muli_400Regular } from '@expo-google-fonts/muli';
import AppointmentService from "../services/AppointmentService";
import Header from "../components/Header";


const MyAppointments = ({ navigation }) => {
  
  const { user } = useAuthContext();
  const [appointments, setAppointments] = useState(null);

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Muli_400Regular,
  });
  
  
  useEffect(() => {
    const fetchAppointments = async () => {
      const appointmentService = AppointmentService(user.token);
      try {
        const appointments = await appointmentService.getAppointments();
        //
        //add here the logic to filter only the user's appointment
        //
        console.log(appointments);
        setAppointments(appointments);
      } catch (error) {
        console.error(error);
      }
    }; 
    fetchAppointments();
  }, [user.token]);

  if (!fontsLoaded || appointments === null) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <Text>appointments list</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#e2e8ef',
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
});

export default MyAppointments;