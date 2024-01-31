import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PageTitle from './PageTitle';

const settings = () => {
  return (
    <View style={styles.container}>
      {/* Header with Heading */}
      <View>
      <PageTitle title="Settings" showBackButton={false} backgroundColor="#BE4621" />
    </View>
    
    <View style={styles.container}>
      {/* Header with Back Button */}
      <TouchableOpacity onPress={() => console.log('Go back')}>
        <Text style={styles.backButton}>&lt;Back</Text>
      </TouchableOpacity>

      {/* Stacked Input Boxes */}
      <View style={styles.inputContainer}>
        {renderInput('Location')}
        {renderInput('Notifications')}
        {renderInput('Language')}
        {renderInput('Dark Mode')}
        {renderInput('Log Out')}
      </View>

      </View>
    
    </View>
  );
};

const renderInput = (label) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.inputText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  backButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 15,
  },
  labelText: {
    fontSize: 12,
    color: 'white',
    marginBottom: 5,
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
  },
  updateButton: {
    backgroundColor: '#CADBFC',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  updateButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default settings;