import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//pages and components
import Login from './src/pages/login'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              {/* <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />                   */}
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}

