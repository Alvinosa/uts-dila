import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Beranda from './Beranda';  
import Pemesanan from './pemesanan'; 
import Profil from './profil'; 

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Beranda"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Beranda') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Pemesanan') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFD700', 
          tabBarInactiveTintColor: '#1E90FF', 
        })}
      >
        <Tab.Screen name="Beranda" component={Beranda} />
        <Tab.Screen name="Pemesanan" component={Pemesanan} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
