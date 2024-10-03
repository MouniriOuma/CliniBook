import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, ScrollView, TouchableOpacity, RefreshControl } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Muli_400Regular } from '@expo-google-fonts/muli';
import AppointmentService from "../services/AppointmentService";
import Header from "../components/Header";
import UserService from "../services/UserService";
import TimeSlotService from "../services/TimeSlotService";
import CenterService from "../services/CenterService";


const AppointmentValidation = () => {
  const { user } = useAuthContext();
  const [appointments, setAppointments] = useState(null);
  const [appointmentsValide, setAppointmentsValide] = useState(null);
  const [appointmentsPending, setAppointmentsPending] = useState(null);
  const [appointmentsUnvalide, setAppointmentsUnvalide] = useState(null);
  const [userId, setUserId] = useState('');

  const { navigate } = useNavigation();

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData().then(() => {
      setRefreshing(false);
  }).catch(error => {
      console.error('Error refreshing data:', error);
      setRefreshing(false);
  });
  }, []);
  

  useEffect(() => {
    if(user){
      fetchData();
    }
    
  }, [user.token, onRefresh]);


  const fetchData = async () => {
      if (user) {      
      try {
        const appointmentService = AppointmentService(user.token);
        const userService = UserService(user.token);
        const timeSlotService = TimeSlotService(user.token);
        const centerService = CenterService(user.token);
  
        // Fetch appointments
        const appointments = await appointmentService.getAppointments();
        setAppointments(appointments);
  
        // Fetch user data
        const userData = await userService.getUserByEmail(user.email);
        setUserId(userData._id);
  
        // Prepare arrays for storing appointment details
        const appointmentsValide = [];
        const appointmentsPending = [];
        const appointmentsUnvalide = [];
  
        // Fetch details for each appointment
        for (const appointment of appointments) {
          const timeSlot = await timeSlotService.getTimeSlot(appointment.timeSlot);
          const time = timeSlot.time;
          const date = timeSlot.date;
          const center = await centerService.getCenter(timeSlot.center);
          const centerName = center.name;
          const validated = appointment.validated;
          const id = appointment._id;
          const reservedByData = await userService.getUser(appointment.user);
          const reservedByName = reservedByData.name;
          const reservedByLastName = reservedByData.lastName;
  
          // Determine the status of the appointment and push it to the corresponding array
          if (validated === 'pending') {
            appointmentsPending.push({ id, time, date, centerName, validated, reservedByName, reservedByLastName });
          } else if (validated === 'unvalide') {
            appointmentsUnvalide.push({ id, time, date, centerName, validated, reservedByName, reservedByLastName });
          } else if (validated === 'valide') {
            appointmentsValide.push({ id, time, date, centerName, validated, reservedByName, reservedByLastName });
          }
        }
  
        // Update state with appointment details
        setAppointmentsValide(appointmentsValide);
        setAppointmentsUnvalide(appointmentsUnvalide);
        setAppointmentsPending(appointmentsPending);
        console.log(appointmentsPending)
  
      } catch (error) {
        console.error(error);
      }
    }
    };

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
  });

  const handleState = (id, state) => {
    const appointmentService = AppointmentService(user.token);
    const validated = state;
    const confirmedBy = userId;
    const data = {validated, confirmedBy}
    appointmentService.updateAppointment(id, data);
    navigate('Appointment validation')
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}-${month}-${year}`;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

        <Text style={styles.heading}>Appointments</Text>
        <Text style={styles.subTitle}>Pending appointments</Text>
        {appointmentsPending && (
          <>
        {appointmentsPending.map((pending, index) => (
          <View key={index} style={styles.appointmentCard}>
              <Text style={styles.appointmentName}>{pending.centerName}</Text>
              <Text>Date: <Text>{formatDate(pending.date)}</Text></Text>
              <Text>Time: <Text>{pending.time}</Text></Text>
              <Text>Reserved By: <Text>{pending.reservedByName}</Text> <Text>{pending.reservedByLastName}</Text></Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => handleState(pending.id, 'valide')}>
                <Text style={styles.bookButtonText}>Validate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.unvalideButton} onPress={() => handleState(pending.id, 'unvalide')}>
                <Text style={styles.bookButtonText}>Refuse</Text>
              </TouchableOpacity>
            </View>
          ))}
          </>
        )}
        {/* <Text style={styles.subTitle}>Unvalide appointments</Text>

        <Text style={styles.subTitle}>Valide appointments</Text> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor: '#e2e8ef',
  },
  logoContainer: {
    marginTop: -150
  },
  heading: {
    fontSize: 50,
    fontFamily: 'Poppins_200ExtraLight',
    marginBottom: 20,
    color: '#184557',
  },
  subTitle: {
    fontSize: 30,
    fontFamily: 'Poppins_200ExtraLight',
    marginBottom: 20,
    // marginTop: -100,
    color: '#184557',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#184557',
  },
  inputField: {
    height: 40,
    fontSize: 16,
    color: '#072d42',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#184557',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  signUpLink: {
    marginTop: 10,
  },
  signUpLinkText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7ba6b3',
  },
  error: {
    color: '#c0392b',
    marginBottom: 5,
  },
  appointmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    //marginBottom: 20,
    margin: 10,
    width: '95%',
  },
  appointmentName: {
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
  unvalideButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
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

export default AppointmentValidation;