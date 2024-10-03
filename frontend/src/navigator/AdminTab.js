import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

//pages
import Profile from '../pages/Profile';
import ChangeRole from '../pages/ChangeRole';
import AppointmentValidation from '../pages/AppointmentValidation';
import CenterAdminStack from './CenterAdminStack';


const Tab = createBottomTabNavigator();


const AdminTab = () => {
  return (
    <Tab.Navigator  
    initialRouteName='Profile'
    screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#184557',
      tabBarStyle: { display: 'flex' }
    }}
    >

      <Tab.Screen 
      name="user Role" 
      component={ChangeRole} 
      options={{tabBarIcon: ({ color, size }) => (<Ionicons name="swap-horizontal" size={size} color={color} />)}} 
      />

      <Tab.Screen 
      name="Appointment validation" 
      component={AppointmentValidation} 
      options={{tabBarIcon: ({ color, size }) => (<Ionicons name="checkmark-circle" size={size} color={color} />)}} 
      />
      <Tab.Screen 
      name="Center" 
      component={CenterAdminStack} 
      options={{tabBarIcon: ({ color, size }) => (<Ionicons name="medkit" size={size} color={color} />)}} 
      />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{tabBarIcon: ({ color, size }) => (<Ionicons name="person" size={size} color={color} />)}} 
      />
      
    </Tab.Navigator>
  );
};

export default AdminTab;