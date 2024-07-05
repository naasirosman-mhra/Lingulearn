import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressScreen = () => {
  // For demo purposes, we can use static progress data
  const progressData = {
    completedLessons: 2,
    totalLessons: 2,
    completedQuizzes: 2,
    totalQuizzes: 2,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Tracking</Text>
      <Text>Lessons Completed: {progressData.completedLessons} / {progressData.totalLessons}</Text>
      <Text>Quizzes Completed: {progressData.completedQuizzes} / {progressData.totalQuizzes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProgressScreen;
