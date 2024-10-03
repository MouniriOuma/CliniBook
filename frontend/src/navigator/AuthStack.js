import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext, useEffect, useState } from 'react';
import { useAuthContext } from '../../src/hooks/useAuthContext';

//pages
import Login from '../pages/login'
import SignUp from '../pages/SignUp';
import OnboardingScreen from '../pages/OnboardingScreen';

//Tabs
import UserTab from '../navigator/UserTab';
import AdminTab from './AdminTab';

//fetching data
import UserService from '../services/UserService';


const Stack = createStackNavigator();

  
 const AuthStack = () => {
 const { user } = useAuthContext()

 const [userRole, setUserRole] = useState('');

 useEffect(() => {
  const fetchData = async () => {
    if (user ) {
      const userService = UserService(user.token);
      try {
        const userData = await userService.getUserByEmail(user.email);
        setUserRole(userData.role);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };      
  fetchData();
}, [user]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
  {user ? (
    userRole === 'admin' ? (
      <>
        <Stack.Screen name="AdminTab" component={AdminTab} />
      </>
    ) : (
      <>
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
        <Stack.Screen name="UserTab" component={UserTab} />
      </>
    )
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