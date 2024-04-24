import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from '../services/UserService';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await UserService.loginUser({
        email,
        password
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
      console.error('Error logging in:', error);
      setIsLoading(false);
      setError('An error occurred during login.');
    }
  };

  return { login, isLoading, error };
};
