// screens/QuizScreen.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Quiz from '../components/Quiz';

const quizzes = [
  { question: 'What is "hello" in Spanish?', options: ['Hola', 'Bonjour', 'Hello'], answer: 'Hola' },
  { question: 'What is "one" in Spanish?', options: ['Uno', 'Dos', 'Tres'], answer: 'Uno' },
];

const QuizScreen = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === quizzes[currentQuiz].answer) {
      setScore(score + 1);
    }
    setCurrentQuiz((currentQuiz + 1) % quizzes.length);
  };

  return (
    <View>
      {currentQuiz < quizzes.length ? (
        <Quiz question={quizzes[currentQuiz].question} options={quizzes[currentQuiz].options} onAnswer={handleAnswer} />
      ) : (
        <Text>Your score: {score}</Text>
      )}
    </View>
  );
};

export default QuizScreen;
