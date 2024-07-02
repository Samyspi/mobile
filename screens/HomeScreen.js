import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import Footer from '../components/Footer';
import { AuthContext } from '../contexts/AuthContext';

export default function HomeScreen({ navigation }) {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/fond_haut.png')} style={styles.topDecor} pointerEvents="none" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Accueil</Text>
        <Pressable style={styles.card} onPress={() => navigation.navigate('Timetable')}>
          <Image source={require('../assets/edt.png')} style={styles.cardImage} pointerEvents="none" />
          <Text style={styles.cardText}>Emploi du temps</Text>
        </Pressable>
        <Pressable style={styles.card} onPress={() => navigation.navigate('Notes')}>
          <Image source={require('../assets/note.jpg')} style={styles.cardImage} pointerEvents="none" />
          <Text style={styles.cardText}>Notes</Text>
        </Pressable>
        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Déconnexion</Text>
        </Pressable>
      </View>
      <Image source={require('../assets/fond_bas.png')} style={styles.bottomDecor} pointerEvents="none" />
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  topDecor: {
    width: '100%',
    resizeMode: 'contain',
  },
  bottomDecor: {
    width: '100%',
    resizeMode: 'contain',
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
  },
  logoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
