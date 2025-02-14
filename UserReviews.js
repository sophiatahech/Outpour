import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width

const UserReviews = () => {
  // Placeholder data for the reviews
  const reviews = [
    { id: '1', establishment: 'Bar 1', rating: 4 },
    { id: '2', establishment: 'Bar 2', rating: 3 },
    // Add more reviews as needed
  ];

  // Render each individual review item
  const ReviewItem = ({ review }) => {
    return (
      <View style={styles.reviewItem}>
        <View style={styles.reviewContent}>
          <Text style={styles.reviewText}>Eventually, sliders will be added here with back-end data. For now, you gave this establishment a five star review.</Text>
          <Text style={styles.establishmentName}>{review.establishment}</Text>
        </View>
        <TouchableOpacity style={styles.changeRatingButton}>
          <Text>Change Rating</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Render the list of reviews
  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// Styling for the component
const styles = StyleSheet.create({
    // ... other styles ...
    reviewItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      paddingBottom: 30,
      width: screenWidth - 40, // Subtracting the total horizontal padding
    },
    reviewContent: {
      flex: 1, // Take up all available space except for what's needed for the button
    },
    establishmentName: {
      fontSize: 14,
      color: 'blue', // Change color as needed
      marginBottom: 4, // Space between establishment name and review text
    },
    reviewText: {
      fontSize: 12, // Adjust font size as needed
      color: 'grey', // Change color as needed
      marginBottom: 10, // Space between review text and bottom of the box
    },
  changeRatingButton: {
    backgroundColor: 'lightgrey', // Change background color as needed
    borderRadius: 15,
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  // Add more styles if needed
});

export default UserReviews;
