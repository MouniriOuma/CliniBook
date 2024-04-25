import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { useFonts } from "expo-font";
import { Muli_400Regular } from '@expo-google-fonts/muli';
import logo from '../../assets/logo.png'
import * as yup from 'yup';
import { useLogin } from '../hooks/useLogin';

const Login = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Muli_400Regular,
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const { login, isLoading, error } = useLogin()

  const schema = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const clearInputFields = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    try {
       // Log the inputs
      console.log('Email:', email);
      console.log('Password:', password);

      await schema.validate({ email, password }, { abortEarly: false });
      await login(email, password);
      navigation.reset({ index: 0, routes: [{ name: 'Test' }] });

      setErrors({});
      // Perform login logic
      clearInputFields();
      console.log('Form fields cleared successfully');
    } catch (error) {
      console.error('Error logging in:', error);
      if (error instanceof yup.ValidationError) {
        const yupErrors = {};
        error.inner.forEach((innerError) => {
          yupErrors[innerError.path] = innerError.message;
        });
        setErrors(yupErrors);
      }
    }
  };

  const goToSignup = () => {
    navigation.navigate('SignUp');
  };


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
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpLink} onPress={goToSignup}>
        <Text>you don't have an account?<Text style={styles.signUpLinkText}> Sign Up</Text> </Text>
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
    marginBottom: 20,
    marginTop: -100,
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
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  signUpLink: {
    marginTop: 10,
  },
  signUpLinkText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7ba6b3',
  },
  error: {
    color: '#c0392b',
    marginBottom: 5,
  }
});


export default Login;
