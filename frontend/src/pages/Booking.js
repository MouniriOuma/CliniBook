import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput, StatusBar, Button , SafeAreaView, TouchableOpacity} from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import UserService from "../services/UserService";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Muli_400Regular } from '@expo-google-fonts/muli';
import { useRoute } from '@react-navigation/native';
import {
  IAppointment,
  IAvailableDates,
  TimeSlotPicker,
} from '@dgreasi/react-native-time-slot-picker';
import TimeSlotService from "../services/TimeSlotService";
import AppointmentService from '../services/AppointmentService'


const Booking = () => {
  const navigation = useNavigation();
  const { user } = useAuthContext();
  const [userToken, setUserToken] = useState(null);



  
  // Extract centerId from route.params
  const route = useRoute();
  const center = route.params?.centerId || 'No data passed';
  
  const [time, setTime] = useState('');
  const [reservedBy, setReservedBy] = useState('');
  const [dateOfAppointment, setDateOfAppointment] = useState(null);
  
  const [selectedDate, setSelectedDate] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const userService = UserService(user.token);
        setUserToken(user.token)
        try {
          const userData = await userService.getUserByEmail(user.email);
          setReservedBy(userData._id);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
    
    fetchData();
  }, [user]);
 
  //date
  const [date, setDate] = useState('');
  // Function to extract only the date format : DD-MM-YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}-${month}-${year}`;
  };




  //sending data
  const handleBooking = async() => {

    //bring data 
    setDate(formatDate(dateOfAppointment?.appointmentDate));
    setTime(dateOfAppointment?.appointmentTime);

    if (center && date && time && reservedBy && user){
    try {

      //set the timeslot object and create one
      const timeSlotDetails = {center, date, time, reservedBy};
      
      const timeSlotService = TimeSlotService(userToken);
      const response = await timeSlotService.createTimeSlot(timeSlotDetails);

      //set the appointment object an create one
      const timeSlot = response._id;
      const user = reservedBy;
      const appointment = {user, timeSlot};
      const appointmentService = AppointmentService(userToken);
      const responseA = await appointmentService.createAppointment(appointment);

      navigation.navigate('Appointments')
      } catch (error) {
      console.error('Error creation :', error);}
  }}
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Booking</Text>
      {user && (
        <>
      <View style={styles.DatePicker}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <TimeSlotPicker
        setDateOfAppointment={setDateOfAppointment}
        mainColor="#184557"
        timeSlotWidth={90}
        // scheduledAppointment={bookedData}
      />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>book</Text>
      </TouchableOpacity>
    </>
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e8ef', 
  },
  heading: {
    fontSize: 50,
    fontFamily: 'Poppins_200ExtraLight',
    marginBottom: 20,
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
    color: '#FFFFFF', 
  },
  error: {
    color: '#c0392b',
    marginBottom: 5,
  },
  DatePicker: {
    width: '100',
    height: 400,
    borderRadius: 10 
  }
});

export default Booking;