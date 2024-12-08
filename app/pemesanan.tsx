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
    backgroundColor: '#E6F7FF',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginVertical: 20,
    textAlign: 'center',
    textShadowColor: '#87CEFA',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  packageCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#1E90FF',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    elevation: 7,
    borderWidth: 1,
    borderColor: '#87CEFA',
  },
  packageName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 5,
  },
  packagePrice: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: '#64B5F6',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  orderButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
