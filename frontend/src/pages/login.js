import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { useFonts } from "expo-font";
import { Muli_400Regular } from '@expo-google-fonts/muli';
import logo from '../../assets/logo.png'

const Login = () => {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Muli_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={logo}
          style={styles.logo}
        />
      </View>
      <Text style={[styles.heading, styles.primaryColor]}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Username"
          placeholderTextColor="#C8D3D8"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          placeholderTextColor="#C8D3D8"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotLink}>
        <Text>you don't have an account?<Text style={styles.forgotLinkText}> Sign up</Text> </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c6474', // New primary color (darker accent)
  },
  logoContainer: {
    marginTop: -100
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 50,
    fontFamily: 'Poppins_200ExtraLight',
    marginBottom: 20,
    marginTop: -60,
    color: '#FFFFFF', // Text color adjusted for contrast
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#7ba6b3', // Lighter accent color
  },
  inputField: {
    height: 40,
    fontSize: 16,
    color: '#FFFFFF', // Text color adjusted for contrast
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#184557', // Darkest accent color
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text for button
  },
  forgotLink: {
    marginTop: 10,
  },
  forgotLinkText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7ba6b3', // Lighter accent color for link
  },
});


export default Login;
