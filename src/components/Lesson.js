
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Lesson from '../components/Lesson';

const lessons = [
  { title: 'Lesson 1', content: 'Basic phrases in Spanish' },
  { title: 'Lesson 2', content: 'Numbers and colors' },
];

const LessonScreen = ({ navigation }) => {
  const [currentLesson, setCurrentLesson] = useState(0);

  return (
    <View>
      <Lesson title={lessons[currentLesson].title} content={lessons[currentLesson].content} />
      <Button title="Next Lesson" onPress={() => setCurrentLesson((currentLesson + 1) % lessons.length)} />
      <Button title="Start Quiz" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
};

export default LessonScreen;
