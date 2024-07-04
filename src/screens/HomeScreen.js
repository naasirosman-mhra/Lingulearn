// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to LinguaLearn</Text>
      <Button title="Start Lesson" onPress={() => navigation.navigate('Lesson')} />
    </View>
  );
};

export default HomeScreen;
