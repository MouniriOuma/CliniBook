import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from '../services/UserService';
import AuthService from '../services/AuthService';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const user = { email, password };
      const response = await AuthService.loginUser(user);

      if (response.status !== 200) {
        console.log('Login request failed. Response:', response);
        const json = await response.data;
        setIsLoading(false);
        setError(json.error);
        return;
      }

      const json = await response.data;
      console.log('Login successful. Response:', json);
      // Save the user to AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(json));

      // Update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      // Update loading state
      setIsLoading(false);
    } catch (error) {
      console.error('Error logging in:', error);
      setIsLoading(false);
      setError('An error occurred during login.');
    }
  };

  return { login, isLoading, error };
};
