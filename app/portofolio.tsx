import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Portofolio() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Portofolio Dila MUA</Text>
        <Text style={styles.subText}>Lihat hasil makeup terbaik kami!</Text>
      </View>

      <View style={styles.gallery}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/portofolio1.jpg')} style={styles.image} />
          <Text style={styles.caption}>Makeup Pernikahan</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/portofolio2.jpg')} style={styles.image} />
          <Text style={styles.caption}>Makeup Wisuda</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/111.jpeg')} style={styles.image} />
          <Text style={styles.caption}>Makeup Pesta</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/portofolio4.jpg')} style={styles.image} />
          <Text style={styles.caption}>Makeup Casual</Text>
        </View>
      </View>

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
    backgroundColor: '#87CEFA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subText: {
    fontSize: 16,
    color: '#F0F8FF',
    marginTop: 5,
  },
  gallery: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
  },
  caption: {
    fontSize: 14,
    color: '#1E90FF',
    fontWeight: 'bold',
  },
});
