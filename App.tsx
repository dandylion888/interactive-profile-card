import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const getDynamicMessage = () => {
    if (count === 0) return "Press + to start!";
    if (count < 5) return "Keep going!";
    if (count < 10) return "You're on fire!";
    if (count < 20) return "Unstoppable!";
    return "LEGENDARY!";
  };

  return (
    <View style={s.container}>
      <Image 
        source={{ uri: 'https://picsum.photos/id/100/150/150' }} 
        style={s.photo} 
      />
      
      <TextInput 
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={s.input}
      />
      
      <Text style={s.greeting}>
        {name ? `Hello ${name}!` : "Hello Guest!"}
      </Text>
      
      <Text style={s.count}>{count}</Text>
      
      <Text style={s.message}>{getDynamicMessage()}</Text>
      
      <View style={s.buttons}>
        <TouchableOpacity style={[s.btn, s.btnMinus]} onPress={decrement}>
          <Text style={s.btnText}>-</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[s.btn, s.btnReset]} onPress={reset}>
          <Text style={s.btnText}>Reset</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[s.btn, s.btnPlus]} onPress={increment}>
          <Text style={s.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  input: {
    height: 45,
    width: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#9b59b6',
  },
  count: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#9b59b6',
    marginBottom: 30,
  },
  buttons: {
    flexDirection: 'row',
    gap: 15,
  },
  btn: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 30,
    minWidth: 70,
    alignItems: 'center',
  },
  btnMinus: { backgroundColor: '#d78eee' },
  btnReset: { backgroundColor: '#879091' },
  btnPlus: { backgroundColor: '#946ce2' },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});