import React, {useState, createContext} from 'react';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import chatBot from './Pages/ChatBot';
import LandingPage from './Pages/LandingPage';
import BookAService from './Pages/BookAService';
export const UserContext = createContext(); // Define context here

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null); // Store user data

  return (
    <UserContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{animationEnabled: true, animation: 'slide_from_right', headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BookAService"
            component={BookAService}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="chatBot"
            component={chatBot}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{animation: 'none', headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{animation: 'none', headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{animation: 'none', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
