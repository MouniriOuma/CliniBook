import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "react-native";
import { useLogout } from "../hooks/useLogout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from "../services/UserService";


const Profile = ({ navigation }) => {
 const { logout } = useLogout();
  const { user } = useAuthContext();
  
 const handleLogout = () => {
  logout()
  navigation.replace('Login')
}

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.profileHeader}>
          <View style={styles.profileIcon}>
            <Ionicons name="person-circle-outline" size={100} color="#007260" />
          </View>
          <Text style={styles.username}>{creator}</Text>
          <Text style={styles.userEmail}>{creatorEmail}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;