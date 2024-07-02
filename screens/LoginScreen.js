import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://127.0.0.1:8000/api/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response.data);

      if (response.status === 200) {
        const token = response.data.token;
        login(token, email);
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fond_login_11.png')} style={styles.background}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Ecole Maison du Savoir</Text>
          <Text style={styles.subtitle}>Bienvenue sur l'application</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#264ECA' : '#3E65DE'
              },
              styles.button
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Se connecter</Text>
          </Pressable>
          <Text style={styles.forgotPassword}>Mot de passe oublié?</Text>
        </View>
      </ImageBackground>
      <Image source={require('../assets/fond_login_2.png')} style={styles.bottomRightDecor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2FE',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    color: '#000',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10,
    color: '#007bff',
  },
  bottomRightDecor: {
    position: 'absolute',
    bottom: 100, 
    right: 20,
    width: 600, 
    height: 600,
  },
});
