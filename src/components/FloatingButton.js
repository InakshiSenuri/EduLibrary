import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FloatingButton = ({ count, onPress }) => (
  <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
    <Text style={styles.buttonText}>{count}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    top: 5,
    right: 20,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default FloatingButton;
