import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from '../services/UserService';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
/* 
  const signup = async (name, lastName, email, password, phone) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await UserService.signup({
        name,
        lastName,
        email,
        password,
        phone
      });

      if (!response.ok) {
        const json = await response.data;
        setIsLoading(false);
        setError(json.error);
        return;
      }

      const json = await response.data;

      // Save the user to AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(json));

      // Update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      // Update loading state
      setIsLoading(false);
    } catch (error) {
      console.error('Error signing up:', error);
      setIsLoading(false);
      setError('An error occurred during signup.');
    }
  };

  return { signup, isLoading, error };
}; */

const signup = async (name, lastName, email, password, phone) => {
  setIsLoading(true);
  setError(null);

  try {
    console.log('Sending signup request...');
    console.log('User object before sending:', { name, lastName, email, password, phone });

    const user = { name, lastName, email, password, phone };
    const response = await UserService.signup(user);

    console.log('Signup request sent. Waiting for response...');

    if (!response.ok) {
      console.log('Signup request failed. Response:', response);

      const json = await response.data;
      setIsLoading(false);
      setError(json.error);
      return;
    }

    const json = await response.data;

    console.log('Signup successful. Response:', json);

    // Save the user to AsyncStorage
    await AsyncStorage.setItem('user', JSON.stringify(json));

    // Update the auth context
    dispatch({ type: 'LOGIN', payload: json });

    // Update loading state
    setIsLoading(false);
  } catch (error) {
    console.error('Error signing up:', error);
    setIsLoading(false);
    setError('An error occurred during signup.');
  }
};

return { signup, isLoading, error };
};

