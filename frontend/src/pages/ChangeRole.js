import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "react-native";
import { useLogout } from "../hooks/useLogout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from "../services/UserService";


const ChangeRole = ({ navigation }) => {

  
  // const { user } = useAuthContext();
  // const [role, setRole] = useState(null);

  // const [fontsLoaded] = useFonts({
  //   Poppins_200ExtraLight,
  //   Muli_400Regular,
  // });
  
  
  // useEffect(() => {
  //   const fetchRole = async () => {
  //     const centerService = UserService(user.token);
  //     try {
  //       //rename the function based on what i did in userService
  //       const role = await centerService.getRole();
  //       console.log(role);
  //       setRole(role);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }; 
  //   fetchRole();
  // }, [user.token]);

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