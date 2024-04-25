import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import Profile from '../pages/Profile';
import Test from '../pages/test';
import Onboarding from 'react-native-onboarding-swiper';
import HomeUser from '../pages/HomeUser';
import Centers from '../pages/Centers';
import CenterInfo from '../pages/CenterInfo';
import Booking from '../pages/Booking';


const Tab = createBottomTabNavigator();

const CenterStack = () => {
    return (
        <Stack.Navigator initialRouteName='Centers' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Centers" component={Centers} />
            <Stack.Screen name="CenterInfo" component={CenterInfo} />
            <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>
    );
  };

export default CenterStack;