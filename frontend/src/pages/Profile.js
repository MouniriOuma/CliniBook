import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Ionicons } from '@expo/vector-icons';
import UserService from "../services/UserService";


const Profile = ({ navigation }) => {
 const { logout } = useLogout();
  const { user } = useAuthContext();

 const [userData, setUserData] = useState('');

 useEffect(() => {
  const fetchData = async () => {
    if (user) {
      const userService = UserService(user.token);
      try {
        const userData = await userService.getUserByEmail(user.email);
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };      
  fetchData();
}, [user]);

 const handleLogout = () => {
  logout()
}

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.profileHeader}>
          <View style={styles.profileIcon}>
            <Ionicons name="person-circle-outline" size={100} color="#007260" />
          </View>
          <Text style={styles.username}>{userData.name}</Text>
          <Text style={styles.username}>{userData.role}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  card: {
    
    marginTop: 60,
    borderColor: '#39B68D', 
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007260',
  },
  logoutButton: {
    backgroundColor: '#39B68D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;