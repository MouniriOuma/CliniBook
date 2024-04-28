import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuthContext } from '../hooks/useAuthContext';

const Header = () => {
  const [creator, setCreator] = useState('');
  const [creatorEmail, setCreatorEmail] = useState('');
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      // Extract username from email
      const username = user.email.split('@')[0];
      const userEmail = user.email;
      setCreator(username);
      setCreatorEmail(userEmail);
    }
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
    borderRadius: 20, // Half of width and height for a circle
    backgroundColor: '#184557',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  greeting: {
    marginLeft: 10,
  },
});

export default Header;
