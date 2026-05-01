// Activity: Create your own Profile Card Screen
// Changes made: Created a complete profile card with photo, name, course, and bio
// Date of change: May 1, 2026

import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={s.container}>
      {/* Profile Card */}
      <View style={s.card}>
        {/* Profile Photo */}
        <Image 
          source={{ uri: 'https://i.pinimg.com/1200x/3d/46/22/3d462232761702f0ee27cac219152924.jpg' }}
          style={s.photo} 
        />
        
        {/* Name */}
        <Text style={s.name}>Flynn Vera B. Cabillan</Text>
        
        {/* Course */}
        <Text style={s.course}>Bachelor of Multimedia Arts</Text>
        
        {/* Short Bio */}
        <Text style={s.bio}>
          Driven MMA student exploring creative direction, 
          3D modeling, graphic design, and photography. Currently learning 
          mobile development in CS126.
        </Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    maxWidth: 350,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#7a6ddb',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  course: {
    fontSize: 16,
    color: '#7a6ddb',
    marginBottom: 15,
    fontWeight: '600',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10,
  },
});