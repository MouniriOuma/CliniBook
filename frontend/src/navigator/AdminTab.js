import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
      screenOptions={{ headerShown: false }}>

        <Tab.Screen name="userRole" component={ChangeRole} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Appointment validation" component={AppointmentValidation} />
        <Tab.Screen name="CenterUserStack" component={CenterAdminStack} />
        
      </Tab.Navigator>
    );
  };

export default AdminTab;