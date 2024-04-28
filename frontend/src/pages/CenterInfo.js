import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "react-native";
import { useLogout } from "../hooks/useLogout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CenterService from "../services/CenterService";


const CenterInfo = ({ id }) => {
  
  const { user } = useAuthContext();
  const [center, setCenter] = useState(null);

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Muli_400Regular,
  });
  
  //bring id from the precedent page
  
  useEffect(() => {
    const fetchCenter = async () => {
      const centerService = CenterService(user.token);
      try {
        const center = await centerService.getCenter(id);
        console.log(center);
        setCenter(center);
      } catch (error) {
        console.error(error);
      }
    }; 
    fetchCenter();
  }, [user.token, id]);

  if (!fontsLoaded || center === null) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>center informations and button to book appointment</Text>
    </View>
  );
}

export default CenterInfo;