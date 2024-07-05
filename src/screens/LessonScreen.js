import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import lessons from '../data/lessons';

const LessonScreen = ({ navigation }) => {
  const [currentLesson, setCurrentLesson] = useState(0);

  const nextLesson = () => {
    setCurrentLesson((currentLesson + 1) % lessons.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lessons[currentLesson].title}</Text>
      <Text style={styles.content}>{lessons[currentLesson].content}</Text>
      <Button title="Next Lesson" onPress={nextLesson} />
      <Button title="Start Quiz" onPress={() => navigation.navigate('Quiz', { lessonId: lessons[currentLesson].id })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default LessonScreen;
