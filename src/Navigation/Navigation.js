import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home1 from '../Page/Home1'
import Home2 from '../Page/Home2'
import Home3 from '../Page/Home3'
import Home4 from '../Page/Home4'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home1" component={Home1} />
        <Tab.Screen name="Home2" component={Home2} />
        <Tab.Screen name="Home3" component={Home3} />
        <Tab.Screen name="Home4" component={Home4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}