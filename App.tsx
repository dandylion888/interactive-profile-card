// Lesson 5 Task: Interactive Profile Card with useState
// Changes made: Added TextInput, simplified layout - removed course and long bio
// Date of change: May 18, 2026

import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={s.screen}>
      <Image 
        source={{ uri: 'https://picsum.photos/id/100/150/150' }} 
        style={s.photo} 
      />
      
      <TextInput 
        placeholder="Type your name here..."
        value={name}
        onChangeText={(text) => setName(text)}
        style={s.input}
      />
      
      <Text style={s.displayName}>
       Hello, {name || "Guest"}!
      </Text>
      
      {/* Removed course and long bio as requested */}
    </View>
  );
}

const s = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  photo: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#9b59b6',
  },
  input: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  displayName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    color: '#9b59b6',
  },
});