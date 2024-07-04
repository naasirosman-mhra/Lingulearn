// screens/LessonScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const LessonScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Lesson Content Here</Text>
      <Button title="Start Quiz" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
};

export default LessonScreen;
