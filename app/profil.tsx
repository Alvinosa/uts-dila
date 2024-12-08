import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Profil() {
  return (
    <View style={styles.container}>
      
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/rofiani.jpg')} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Rofiani</Text>
        <Text style={styles.profileEmail}>rofiani@gmail.com</Text>
      </View>

      
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profil</Text>
      </TouchableOpacity>

      
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
    backgroundColor: '#E3F2FD', 
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#2196F3', 
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
  profileName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0D47A1', 
  },
  profileEmail: {
    fontSize: 16,
    color: '#1E88E5', 
    marginTop: 5,
  },
  editButton: {
    backgroundColor: '#64B5F6', 
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
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
    backgroundColor: '#FFFFFF', 
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#64B5F6',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#0D47A1', 
    fontWeight: 'bold',
  },
});
