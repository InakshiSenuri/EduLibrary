import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

const BookCard = ({ book, onSelect, isSelected }) => (
  <TouchableOpacity style={styles.card}>
    <Image
      style={styles.thumbnail}
      source={{
        uri: book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Image',
      }}
    />
    <View style={styles.info}>
      <Text style={styles.title}>{book.volumeInfo.title}</Text>
      <Text style={styles.author}>by {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</Text>
      
    </View>
    
      <View style={{height: 100}}>
      <Button
        title={isSelected ? 'Selected' : 'Select'}
        onPress={() => onSelect(book.id)}
        color={isSelected ? '#28a745' : '#000'}
        
        style={styles.button}
      />
      </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    padding: 10,
    elevation: 1,
  },
  thumbnail: { width: 60, height: 90, marginRight: 10 },
  info: { flex: 1 },
  title: { fontWeight: 'bold', marginBottom: 5 },
  author: { color: '#555' },
  button: { marginTop: 10, textAlign: 'center', width: '100%',height: '50%', borderColor: 'black', borderWidth: 1,},
});

export default BookCard;
