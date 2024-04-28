import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { useAuthContext } from '../../src/hooks/useAuthContext';

//pages
import Login from '../pages/login'
import SignUp from '../pages/SignUp';
import Test from '../pages/test';
import UserTab from '../navigator/UserTab';
import OnboardingScreen from '../pages/OnboardingScreen';




const Stack = createStackNavigator();

  
 const AuthStack = () => {
 const { user } = useAuthContext()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
        {/* add condition for user type (user, admin) 
        <Stack.Screen name="AdminTab" component={AdminTab} />
        */}
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="UserTab" component={UserTab} />

        </>
        
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />

        </>
      )}
    </Stack.Navigator>
  );
  };  

export default AuthStack;