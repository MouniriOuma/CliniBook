import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "react-native";
import { useLogout } from "../hooks/useLogout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from "../services/UserService";


const Test = ({ navigation }) => {
 const { logout } = useLogout();
  const { user } = useAuthContext();
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    const fetchUsers = async () => {
      if(user){
      const userService = UserService(user.token);
      try {
        const users = await userService.getUsers();
        console.log(users);
        setUserData(users);
      } catch (error) {
        console.error(error);
      }}
    }; 
    fetchUsers();
  }, [user.token]);

  


 const handleClick = () => {
  logout()
  navigation.replace('Login')
}

  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>test1!</Text>
      <Button title="Logout" onPress={handleClick}/>
      <Text>Email: {user.email}</Text>
      <Text>Token: {user.token}</Text>
      <Text>All Users:</Text>
    </View>
  );
}

export default Test;