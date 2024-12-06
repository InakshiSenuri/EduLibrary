import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Home', { username: email });
    } else {
      Alert.alert('Error', 'Please fill in both fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Register')}
      >
        Don't have an account? Register
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
  link: { color: 'blue', marginTop: 10, textAlign: 'center' },
});
