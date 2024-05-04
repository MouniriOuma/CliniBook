import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFonts } from "expo-font";
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Muli_400Regular } from '@expo-google-fonts/muli';
import AppointmentService from "../services/AppointmentService";
import Header from "../components/Header";
import UserService from "../services/UserService";
import TimeSlotService from "../services/TimeSlotService";
import CenterService from "../services/CenterService";


const MyAppointments = () => {
  
  const { user } = useAuthContext();
  const [appointments, setAppointments] = useState(null);
  const [myAppointments, setMyAppointments] = useState(null);
  const [userId, setUserId] = useState('')
  const [time, setTime] = useState('');
  const [centerName, setCenterName] = useState('');
  const [dateOfAppointment, setDateOfAppointment] = useState('');
  const [state, setState] = useState('')

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Muli_400Regular,
  });
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentService = AppointmentService(user.token);
        const userService = UserService(user.token);
        const timeSlotService = TimeSlotService(user.token);
        const centerService = CenterService(user.token);
  
        // Fetch appointments
        const appointments = await appointmentService.getAppointments();
        setAppointments(appointments);
        console.log(appointments)
  
        // Fetch user data
        const userData = await userService.getUserByEmail(user.email);
        setUserId(userData._id);
  
        // Prepare array for storing appointment details
        const myAppointments = [];
  
        // Fetch details for each appointment
        for (const appointment of appointments) {
          if (userId === appointment.user) {
            const timeSlot = await timeSlotService.getTimeSlot(appointment.timeSlot);
            const time = timeSlot.time;
            const date = timeSlot.date;
            const center = await centerService.getCenter(timeSlot.center);
            const centerName = center.name;
            const validated = appointment.validated
            myAppointments.push({ time, date, centerName, validated });
          }
        }
        
        console.log(myAppointments)
        // Update state with appointment details
        setMyAppointments(myAppointments);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [user.token]);
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}-${month}-${year}`;
  };


  if (!fontsLoaded || appointments === null) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.containerappointment}>
      <Text style={styles.header}>My appointments</Text>
      {myAppointments.map((appointment, index) => {
          return (                
              <View key={index} style={styles.appointmentCard}>
                <Text style={styles.appointmentName}>{appointment.centerName}</Text>
                <Text>{formatDate(appointment.date)}</Text>
                <Text>{appointment.time}</Text>
                <Text>{appointment.validated}</Text>
                
              </View>
          );
      })}
    </View>
    
  );
}


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
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MyAppointments;