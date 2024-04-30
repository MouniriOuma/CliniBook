import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuthContext } from '../hooks/useAuthContext';
import UserService from '../services/UserService';

const Header = () => {
  const [creator, setCreator] = useState('');
  const [creatorCity, setCreatorCity] = useState('');
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const userService = UserService(user.token);
        try {
          const userData = await userService.getUserByEmail(user.email);
          setCreator(userData.name);
          setCreatorCity(userData.city);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
  
    fetchData();
  }, [user]);
  

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
            <Ionicons name="person" size={24} color="#e2e8ef" />        
      </View>
      <View>
        <Text style={styles.username}>{creator}</Text>   
        <Text style={styles.greeting}>Good morning!</Text>
      </View>    
      <View style={styles.userCityContainer}>
      <Text style={styles.usercity}>{creatorCity}</Text>   
      </View>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'left',
    padding: 10,
  },
  userContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#184557',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  userCityContainer: {
    marginLeft: 200,
    marginTop: 5,
  },
  usercity: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  greeting: {
    marginLeft: 10,
  },
});

export default Header;
