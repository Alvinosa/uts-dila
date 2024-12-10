import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Beranda from './Beranda';
import Pemesanan from './pemesanan';
import Profil from './profil';
import Portofolio from './portofolio';

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
              iconName = focused ? 'happy' : 'happy-outline';
            } else if (route.name === 'Pemesanan') {
              iconName = focused ? 'cart' : 'cart-outline'; 
            } else if (route.name === 'Profil') {
              iconName = focused ? 'heart' : 'heart-outline'; 
            } else if (route.name === 'Portofolio') {
              iconName = focused ? 'images' : 'images-outline'; 
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1E88E5',
          tabBarInactiveTintColor: '#90CAF9',
          tabBarStyle: {
            backgroundColor: '#E3F2FD',
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 5 },
            elevation: 5,
          },
          headerStyle: {
            backgroundColor: '#1E88E5',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Beranda" component={Beranda} />
        <Tab.Screen name="Pemesanan" component={Pemesanan} />
        <Tab.Screen name="Profil" component={Profil} />
        <Tab.Screen name="Portofolio" component={Portofolio} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
