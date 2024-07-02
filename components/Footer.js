import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';

export default function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      <Pressable onPress={() => navigation.navigate('Notes')} style={styles.button}>
        <Image source={require('../assets/devoir-icon.png')} style={styles.icon} resizeMode="contain" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Timetable')} style={styles.button}>
        <Image source={require('../assets/timetable-icon.png')} style={styles.icon} resizeMode="contain" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Image source={require('../assets/home-icon.png')} style={styles.icon} resizeMode="contain" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#264ECA',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
