import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { useAuthContext } from '../../src/hooks/useAuthContext';

//pages
import Login from '../pages/login'
import SignUp from '../pages/SignUp';
import Test from '../pages/test';
import UserTab from '../navigator/UserTab';
import Onboarding from 'react-native-onboarding-swiper';



const Stack = createStackNavigator();

  
 const AuthStack = () => {
 const { user } = useAuthContext()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
        <Stack.Screen name="UserTab" component={UserTab} />
        </>
        
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }}/>

        </>
      )}
    </Stack.Navigator>
  );
  };  

export default AuthStack;