import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import quizzes from '../data/quizzes';

const QuizScreen = ({ route }) => {
  const { lessonId } = route.params;
  const quiz = quizzes.find(q => q.lessonId === lessonId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === quiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= quiz.questions.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz Completed!</Text>
        <Text style={styles.score}>Your score: {score} / {quiz.questions.length}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quiz.questions[currentQuestion].question}</Text>
      {quiz.questions[currentQuestion].options.map((option, index) => (
        <Button key={index} title={option} onPress={() => handleAnswer(option)} />
      ))}
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
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
  },
});

export default QuizScreen;
