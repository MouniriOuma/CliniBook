import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContextProvider } from './src/context/AuthContext';
import UserService from './src/services/UserService';
import React, { useEffect } from 'react';
import axios from 'axios'; 

//pages and components
import Login from './src/pages/login'
import SignUp from './src/pages/SignUp';
import OnboardingScreen from './src/pages/OnboardingScreen';
import Test from './src/pages/test';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer> */}
       <AuthContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SignUp'>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContextProvider> 
    </SafeAreaView>
  );
}

/* 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from '../context/AuthContext';

// ... your component imports (PageBoarding1, PageBoarding2, etc.)

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={SignInScreen}
        options={{ headerShown: false }} // Optional: hide header
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }} // Optional: hide header
      />
    </Stack.Navigator>
  );
};

const UserTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="center" component={center} />
      <Tab.Screen name="Page31" component={Page31} />
      <Tab.Screen name="Page32" component={Page32} />
      <Tab.Screen name="rdv" component={rdv} />
      <Tab.Screen name="Page4" component={Page4} />
    </Tab.Navigator>
  );
};

const AdminTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="userRole" component={userRole} />
      <Tab.Screen name="Page51" component={Page51} />
      <Tab.Screen name="Page52" component={Page52} />
      <Tab.Screen name="centerAdmin" component={centerAdmin} />
      <Tab.Screen name="Page6" component={Page6} />
      <Tab.Screen name="rdvADMIN" component={rdvADMIN} />
    </Tab.Navigator>
  );
};

const OnboardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Page1"
        component={PageBoarding1}
      />
      <Stack.Screen
        name="Page2"
        component={PageBoarding2}
      />
      <Stack.Screen
        name="Page3"
        component={PageBoarding3}
        // options={{ // Optional: customize final onboarding screen (e.g., navigate to main app) }}
      />
    </Stack.Navigator>
  );
};

/// you can use this code for the onboard
 firstLaunch != null && (
    <NavigationContainer>
      <Stack.Navigator>
        {firstLaunch && (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Onboarding"
            component={OnboardingScreen}
          />
        )}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

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