import React from "react";
import "./ScoreView.css";

const ScoreView = ({ handleResetClick, score }) => {
  return (
    <div className="ScoreView">
      <h1>Your Score</h1>
      <p>You scored {score} out of 5.</p>
      <button onClick={handleResetClick}>Take Another Quiz</button>
    </div>
  );
};

export default ScoreView;
