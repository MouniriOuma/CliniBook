import React, { createContext, useReducer, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const getUserFromStorage = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          dispatch({ type: 'LOGIN', payload: JSON.parse(user) });
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };

    getUserFromStorage();
  }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
