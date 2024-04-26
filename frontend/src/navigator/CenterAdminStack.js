import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import Profile from '../pages/Profile';
import Test from '../pages/test';
import Onboarding from 'react-native-onboarding-swiper';
import HomeUser from '../pages/HomeUser';
import CenterInfo from '../pages/CenterInfo';
import Booking from '../pages/Booking';
import CentersAdmin from '../pages/CentersAdmin';
import AddCenter from '../pages/AddCenter';


const Tab = createBottomTabNavigator();

const CenterAdminStack = () => {
    return (
        <Stack.Navigator initialRouteName='Centers' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Centers" component={CentersAdmin} />
            <Stack.Screen name="AddCenter" component={AddCenter} />
      </Stack.Navigator>
    );
  };

export default CenterAdminStack;