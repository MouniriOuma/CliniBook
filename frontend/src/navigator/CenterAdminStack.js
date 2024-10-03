import { createStackNavigator } from '@react-navigation/stack';

//pages
import CentersAdmin from '../pages/CentersAdmin';
import AddCenter from '../pages/AddCenter';


const Stack = createStackNavigator();

const CenterAdminStack = () => {
    return (
        <Stack.Navigator initialRouteName='All Centers' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="All centers" component={CentersAdmin} />
            <Stack.Screen name="AddCenter" component={AddCenter} />
      </Stack.Navigator>
    );
  };

export default CenterAdminStack;