import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Beranda() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Selamat Datang di Dila MUA</Text>
        <Text style={styles.subText}>Temukan layanan makeup terbaik di sini!</Text>
      </View>

      
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image source={require('../assets/images/pengantin.jpg')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Paket Pernikahan</Text>
          <Text style={styles.cardDescription}>Dapatkan penawaran spesial untuk paket pernikahan!</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/images/wisuda.jpeg')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Paket Wisuda</Text>
          <Text style={styles.cardDescription}>Tampil menawan di hari kelulusanmu!</Text>
        </View>
      </View>

      
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FF', 
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'linear-gradient(to right, #1E90FF, #87CEFA)', 
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subText: {
    fontSize: 16,
    color: '#D1E7FF',
    marginTop: 5,
  },
  cardsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  cardDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  orderButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 30,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  orderButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
