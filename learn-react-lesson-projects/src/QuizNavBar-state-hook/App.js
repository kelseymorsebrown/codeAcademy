import React from 'react';
import QuizNavBar from './QuizNavBar';
import { questions } from './dataModel';
import './styles.css';

export default function App() {
  return (
    <main id="quizApp">
      <QuizNavBar questions={questions} />
    </main>
  );
}
