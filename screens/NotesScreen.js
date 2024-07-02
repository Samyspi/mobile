import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../components/Footer';

export default function NotesScreen({ navigation }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const email = await AsyncStorage.getItem('email');
        console.log('Token:', token);
        console.log('Email:', email);
        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await axios.get(`https://127.0.0.1:8000/api/getNotes?email=${email}`);
        console.log('Response:', response.data);
        //setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error.response ? error.response.data : error.message);
      }
    };
    fetchNotes();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.noteItem}>
      <Text style={styles.noteTitle}>{item.examen.titre}</Text>
      <Text>{new Date(item.examen.date).toLocaleDateString()}</Text>
      <Text>{item.score}/20</Text>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Footer navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  noteItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
