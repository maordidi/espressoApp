// import 'react-native-gesture-handler';
import React from 'react';
import { EditPage, MainPage } from './src/containers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen
          name="MainPage"
          component={MainPage}
        />
        <Stack.Screen
          name="EditPage"
          component={EditPage}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

