import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import Profile from '../pages/Profile';
import CenterUserStack from './CenterUserStack';
import MyAppointments from '../pages/MyAppointments';

const Tab = createBottomTabNavigator();

const UserTab = () => {
    return (
        <Tab.Navigator  
        initialRouteName='Profile'
        screenOptions={{ headerShown: false }}>

        <Tab.Screen name="Centers" component={CenterUserStack} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Appointments" component={MyAppointments} />
        

        </Tab.Navigator>
    );
};

export default UserTab;