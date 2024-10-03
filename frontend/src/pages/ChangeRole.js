import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "react-native";
import { useLogout } from "../hooks/useLogout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from "../services/UserService";


const ChangeRole = () => {

  
  // const [role, setRole] = useState(null);
  
  // const [fontsLoaded] = useFonts({
    //   Poppins_200ExtraLight,
    //   Muli_400Regular,
    // });
    
    
  const { user } = useAuthContext();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (user){
      const userService = UserService(user.token);
      try {
        const userData = await userService.getUserByEmail(user.email);
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user infos :', error);
      }}
    }; 
    fetchUser();
  }, [user]);


  // if (!fontsLoaded || role === null) {
  //   return <Text>Loading...</Text>;
  // }

  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>change user role</Text>
    </View>
  );
}

export default ChangeRole;