import React from "react";
import "./QuizView.css";

const QuizView = ({ questions, currentQuestion, handleAnswerClick, handleQuizCompletion }) => {
  if (currentQuestion >= questions.length) {
    
    return (
      <div className="quiz-completion">
        <p>Congratulations! You've completed the quiz</p>
        <button onClick={handleQuizCompletion}>View Score</button>
      </div>
    );
  }

  return (
    <>
      <div className="question">
        <div className="question-number">
          <span>
            Question {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>

      <div className="answer">
        {questions[currentQuestion].answers.map(({ text, isCorrect }) => (
          <button key={text} onClick={() => handleAnswerClick(isCorrect)}>
            {text}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuizView;
