import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import FloatingButton from '../components/FloatingButton';
import BookCard from '../components/BookCard';

const API_Key = 'AIzaSyAm6s_OnngciJWVeg1TXbu7wKnUw4ojuRI';
export default function HomeScreen({ route, navigation }) {
  const { username } = route.params || {};
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:computer&maxResults=20&key=${API_Key}`
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const toggleSelectBook = (bookId) => {
    setSelectedBooks((prevSelected) =>
      prevSelected.includes(bookId)
        ? prevSelected.filter((id) => id !== bookId)
        : [...prevSelected, bookId]
    );
  };

  const handleFloatingButtonPress = () => {
    const selectedBookDetails = books.filter((book) =>
      selectedBooks.includes(book.id)
    );
    console.log('Selected Books:', selectedBookDetails);
    // Navigate or display a summary modal here if needed.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username || 'Guest'}!</Text>
      <Text style={styles.subtitle}>Here are some books you might like:</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BookCard
              book={item}
              onSelect={toggleSelectBook}
              isSelected={selectedBooks.includes(item.id)}
            />
          )}
          contentContainerStyle={styles.list}
        />
      )}

      <Button color="#007bff" title="Logout" onPress={() => navigation.navigate('Login')} />

      <FloatingButton
        count={selectedBooks.length}
        onPress={handleFloatingButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  list: { paddingBottom: 100 }, // To avoid overlapping with floating button
});
