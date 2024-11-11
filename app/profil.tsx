import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Profil() {
  return (
    <View style={styles.container}>
      {/* Foto dan Nama Profil */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://placeimg.com/100/100/people' }} // Ganti dengan URL foto pengguna atau foto default
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Nama Pengguna</Text>
        <Text style={styles.profileEmail}>emailpengguna@example.com</Text>
      </View>

      {/* Tombol Edit Profil */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profil</Text>
      </TouchableOpacity>

      {/* Opsi Lainnya */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Riwayat Pemesanan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Pengaturan Akun</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Hubungi Dukungan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  profileEmail: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  editButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  editButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#1E90FF',
  },
});
