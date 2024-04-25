import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "react-native";
import { useLogout } from "../hooks/useLogout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from "../services/UserService";


const Booking = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Booking page</Text>
    </View>
  );
}

export default Booking;