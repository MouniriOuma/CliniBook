import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import logo from '../../assets/logo.png'
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { useFonts } from "expo-font";
import { Muli_400Regular } from '@expo-google-fonts/muli';
import * as yup from 'yup';
import { useSignup } from '../hooks/useSignUp';


const SignUp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState({});

  const { signup, isLoading, error } = useSignup()

    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Muli_400Regular,
    });
    
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    // yup validation schema
    const schema = yup.object().shape({
        name: yup.string().required('Name is required'),
        lastName: yup.string().required('Last Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        phone: yup.string().matches(/^\+?[0-9]+$/, 'Invalid phone number').required('Phone is required'),
    });

    /* const handleSignUp = async () => {
        try {
          await schema.validate({ name, lastName, email, password, phone }, { abortEarly: false });
          await signup(name, lastName, email, password, phone)
          setErrors({});
        } catch (error) {
          console.error('Error signing up:', error);
          if (error instanceof yup.ValidationError) {
            // Extracting yup specific validation errors from the list of total errors
            const yupErrors = {};
            error.inner.forEach((innerError) => {
              yupErrors[innerError.path] = innerError.message;
            });
            // Saving extracted errors
            setErrors(yupErrors);
          }
        }
      }; */

      const handleSignUp = async () => {
        try {
          console.log('Starting signup process...');
      
          await schema.validate({ name, lastName, email, password, phone }, { abortEarly: false });
          
          console.log('Validation successful. Attempting signup...');
      
          await signup(name, lastName, email, password, phone);
      
          console.log('Signup successful!');
          
          setErrors({});
        } catch (error) {
          console.error('Error signing up:', error);
      
          if (error instanceof yup.ValidationError) {
            // Extracting yup specific validation errors from the list of total errors
            const yupErrors = {};
            error.inner.forEach((innerError) => {
              yupErrors[innerError.path] = innerError.message;
            });
      
            // Saving extracted errors
            setErrors(yupErrors);
          }
        }
      };
      

      const handleReset = () => {
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhone('');
        setErrors({});
      };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
          source={logo}
          style={styles.logo}
        />
      </View>
      <Text style={styles.heading}>Sign Up</Text>

      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.inputField}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}
      </View>

      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.inputField}
      />
      {errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={styles.inputField}
        />
        {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
        </View>

      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.inputField}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      </View>

      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputField}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        
      </View>


      <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={isLoading}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e8ef', 
  },
  logoContainer: {
    marginTop: -150
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 50,
    fontFamily: 'Poppins_200ExtraLight',
    marginTop: -140,
    marginBottom: 20,
    color: '#184557', 
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#184557', 
  },
  inputField: {
    height: 40,
    fontSize: 16,
    color: '#072d42', 
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#184557', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  resetButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#c2d7e3', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#184557', 
  },
  error: {
    color: '#c0392b',
    marginBottom: 5,
  },
});

export default SignUp;
