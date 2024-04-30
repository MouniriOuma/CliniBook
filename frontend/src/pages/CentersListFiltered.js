import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "react-native";
import { useLogout } from "../hooks/useLogout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from "../services/UserService";
import CentersFiltered from "../components/CentersFiltered";
import { useRoute } from '@react-navigation/native';


const CentersListFiltered = () => {
    const route = useRoute();

    // Access the passed data from route.params
    const filter = route.params?.filter || 'No data passed';

  return (
    <View>
        <CentersFiltered filter={filter}/>
    </View>
    
  );
}

export default CentersListFiltered;