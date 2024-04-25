import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContextProvider } from './src/context/AuthContext';
import UserService from './src/services/UserService';
import React, { useEffect } from 'react';
import axios from 'axios'; 

//pages and components
import AuthStack from './src/navigator/AuthStack';


const Stack = createNativeStackNavigator();

export default function App() {
  


  
  return (
    <SafeAreaView style={{ flex: 1}}>
    <AuthContextProvider>
      <NavigationContainer>
      <AuthStack />
      </NavigationContainer>
    </AuthContextProvider>
    </SafeAreaView>
  );
}

/* 

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Replace with your logic for checking login state
  const [userRole, setUserRole] = useState(null); // Replace with your logic for determining user role
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(true);

  return (
    <AuthContextProvider>
      <NavigationContainer>
        {isSignedIn ? (
          // Check for first-time login first
          isFirstTimeLogin ? (
            <OnboardingStack />
          ) : (
            // Then check for user role
            userRole === 'user' ? (
              <UserTab />
            ) : userRole === 'admin' ? (
              <AdminTab />
            ) : (
              // Handle unexpected user role values (optional)
              <Text>Unexpected user role</Text>
            )
          )
        ) : (
          <AuthStack /> // Login/Signup screens
        )}
        <Stack.Screen
          name="profile"
          component={profile}
          options={{
            headerShown: false, // Optional: hide header for profile screen
            //tabBarVisible: false, // Prevent profile from appearing in tab bar
          }}
        />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
 */