import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Pemesanan() {
  const packages = [
    { id: 1, name: 'Paket Makeup Pernikahan', price: 'Rp 3.000.000' },
    { id: 2, name: 'Paket Makeup Wisuda', price: 'Rp 1.000.000' },
    { id: 3, name: 'Paket Makeup Pesta', price: 'Rp 750.000' },
    { id: 4, name: 'Paket Makeup Photoshoot', price: 'Rp 500.000' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Pilih Paket Makeup</Text>

      {packages.map((item) => (
        <View key={item.id} style={styles.packageCard}>
          <Text style={styles.packageName}>{item.name}</Text>
          <Text style={styles.packagePrice}>{item.price}</Text>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginVertical: 20,
    textAlign: 'center',
  },
  packageCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  packageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  packagePrice: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  orderButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  orderButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
