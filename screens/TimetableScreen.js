import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native';
import axios from 'axios';
import Footer from '../components/Footer'; 

export default function TimetableScreen({ navigation }) {
  const [timetable, setTimetable] = useState('');

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const response = await axios.get('https://127.0.0.1:8000/api/timetable');
        setTimetable(response.data.timetable_url);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTimetable();
  }, []);

  return (
    <>
    <ImageBackground source={require('../assets/fond_login_11.png')} style={styles.background} pointerEvents="none">
      <View style={styles.container}>
        <Text style={styles.title}>Emploi du temps</Text>
        {timetable ? (
          <Image source={{ uri: timetable }} style={styles.image} resizeMode="contain" />
        ) : (
          <Text>Chargement de l'emploi du temps...</Text>
        )}
      </View>
      <Footer navigation={navigation} />
      <Image source={require('../assets/fond_bas.png')} style={styles.bottomImage} resizeMode="contain" pointerEvents="none" />
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  image: {
    width: '90%',
    height: '60%',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: 200,
  },
});
