import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import CentersAdmin from '../pages/CentersAdmin';
import AddCenter from '../pages/AddCenter';


const Tab = createBottomTabNavigator();

const CenterAdminStack = () => {
    return (
        <Stack.Navigator initialRouteName='All Centers' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="All centers" component={CentersAdmin} />
            <Stack.Screen name="AddCenter" component={AddCenter} />
      </Stack.Navigator>
    );
  };

export default CenterAdminStack;