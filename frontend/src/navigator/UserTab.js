import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

//pages
import Profile from '../pages/Profile';
import CenterUserStack from './CenterUserStack';
import MyAppointments from '../pages/MyAppointments';

const Tab = createBottomTabNavigator();

const UserTab = () => {
    return (
        <Tab.Navigator  
            initialRouteName='Profile'
            //screenOptions={{ headerShown: false }}
            //tabBarOptions={{ activeTintColor: '#184557' }}
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: '#184557',
                tabBarStyle: { display: 'flex' }
              }}
        >

            <Tab.Screen 
                name="Centers" 
                component={CenterUserStack} 
                options={{tabBarIcon: ({ color, size }) => (<Ionicons name="map" size={size} color={color} />)}} 
            />

            <Tab.Screen 
                name="Appointments" 
                component={MyAppointments} 
                options={{tabBarIcon: ({ color, size }) => (<Ionicons name="calendar" size={size} color={color} />)}} 
            />

            <Tab.Screen 
                name="Profile"
                component={Profile} 
                options={{tabBarIcon: ({ color, size }) => (<Ionicons name="person" size={size} color={color} />)}} 
            />
            

        </Tab.Navigator>
    );
};

export default UserTab;