import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import Profile from '../pages/Profile';
import CenterStack from './CenterStack';
import MyAppointments from '../pages/MyAppointments';

const Tab = createBottomTabNavigator();

const UserTab = () => {
    return (
        <Tab.Navigator  
        initialRouteName='Profile'
        screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Centers" component={CenterStack} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Appointments" component={MyAppointments} />
          
  
        </Tab.Navigator>
    );
  };

export default UserTab;