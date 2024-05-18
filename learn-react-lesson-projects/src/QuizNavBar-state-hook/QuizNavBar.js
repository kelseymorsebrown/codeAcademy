import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers
  const goBack = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);

  const goToNext = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  // determine if on the first question or not
  const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span id="questionNumber">Question #{questionIndex + 1}</span>
      <div id="navButtons">
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick={goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
    </nav>
  );
}
