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
              iconName = focused ? 'happy' : 'happy-outline'; // Ikon lucu untuk "Beranda"
            } else if (route.name === 'Pemesanan') {
              iconName = focused ? 'cart' : 'cart-outline'; // Ikon keranjang untuk "Pemesanan"
            } else if (route.name === 'Profil') {
              iconName = focused ? 'heart' : 'heart-outline'; // Ikon hati untuk "Profil"
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1E88E5', // Warna biru terang saat aktif
          tabBarInactiveTintColor: '#90CAF9', // Warna biru muda saat tidak aktif
          tabBarStyle: {
            backgroundColor: '#E3F2FD', // Warna latar biru muda untuk tab bar
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 5 },
            elevation: 5,
          },
          headerStyle: {
            backgroundColor: '#1E88E5', // Warna header biru terang
          },
          headerTintColor: '#FFFFFF', // Warna teks header putih
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Beranda" component={Beranda} />
        <Tab.Screen name="Pemesanan" component={Pemesanan} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
