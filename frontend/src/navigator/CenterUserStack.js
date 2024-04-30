import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//pages
import CenterInfo from '../pages/CenterInfo';
import Booking from '../pages/Booking';
import CentersUser from '../pages/CentersUser';
import AllSpecialities from '../pages/AllSpecialities';
import CentersListFiltered from '../pages/CentersListFiltered';


const Stack = createStackNavigator();


const CenterUserStack = () => {
    return (
        <Stack.Navigator initialRouteName='CentersUser' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CentersUser" component={CentersUser} />
            <Stack.Screen name="CenterInfo" component={CenterInfo} />
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="AllSpecialities" component={AllSpecialities} />
            <Stack.Screen name="CentersListFiltered" component={CentersListFiltered} />
      </Stack.Navigator>
    );
  };

export default CenterUserStack;