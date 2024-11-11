import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Beranda() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Selamat Datang di Dila MUA</Text>
        <Text style={styles.subText}>Temukan layanan makeup terbaik di sini!</Text>
      </View>

      {/* Promo Cards */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://placeimg.com/640/480/fashion' }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Paket Pernikahan</Text>
          <Text style={styles.cardDescription}>Dapatkan penawaran spesial untuk paket pernikahan!</Text>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://placeimg.com/640/480/beauty' }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Paket Wisuda</Text>
          <Text style={styles.cardDescription}>Tampil menawan di hari kelulusanmu!</Text>
        </View>
      </View>

      {/* Order Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#1E90FF',
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  subText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
  },
  cardsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
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
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 30,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  orderButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
