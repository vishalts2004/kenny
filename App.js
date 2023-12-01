import React, { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";
import CategorySelection from "./components/CategorySelection";

const users = [
  { username: "Kenny", password: "pass" },
  { username: "user2", password: "password2" },
 
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizPercentage, setQuizPercentage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleQuizCompletion = () => {
    const percentage = (score / questions.length) * 100;
    setQuizCompleted(true);
    setQuizPercentage(percentage);
  };

  const handleResetClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsQuizOver(false);
    setSelectedCategory(null);
    setQuizCompleted(false);
    setQuizPercentage(null);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  const categories = ["General Knowledge", "Maths", "Physics", "Computer"];

  const questions = [
    {
      category: "General Knowledge",
      question: "Which animal is known as the 'Ship of the Desert'?",
      answers: [
        { text: "Elephant" },
        { text: "Camel", isCorrect: true },
        { text: "Horse" },
      ],
    },
    {
      category: "General Knowledge",
      question: "How many days are there in a week?",
      answers: [
        { text: "5" },
        { text: "6" },
        { text: "7", isCorrect: true },
      ],
    },
    {
      category: "General Knowledge",
      question: "How many hours are there in a day?",
      answers: [
        { text: "12" },
        { text: "18" },
        { text: "24", isCorrect: true },
      ],
    },
    {
      category: "General Knowledge",
      question: "How many letters are there in the English alphabet?",
      answers: [
        { text: "24" },
        { text: "26", isCorrect: true },
        { text: "28" },
      ],
    },
    {
      category: "General Knowledge",
      question: "Rainbow consists of how many colours?",
      answers: [
        { text: "5" },
        { text: "6" },
        { text: "7", isCorrect: true },
      ],
    },
    
    
    {
      category: "Maths",
      question: "121 Divided by 11 is",
      answers: [
        { text: "11", isCorrect: true },
        { text: "10" },
        { text: "19" },
        { text: "18" },
      ],
    },
    {
      category: "Maths",
      question: "60 Times of 8 Equals to",
      answers: [
        { text: "480", isCorrect: true },
        { text: "300" },
        { text: "250" },
        { text: "400" },
      ],
    },
    {
      category: "Maths",
      question: "Find the Missing Term in Multiples of 6: 6, 12, 18, 24, _, 36, 42, _ 54, 60.",
      answers: [
        { text: "32, 45" },
        { text: "30, 48", isCorrect: true },
        { text: "24, 40" },
        { text: "25, 49" },
      ],
    },
    {
      category: "Maths",
      question: "What is the Next Prime Number after 7?",
      answers: [
        { text: "13", isCorrect: true },
        { text: "12" },
        { text: "14" },
        { text: "11" },
      ],
    },
    {
      category: "Maths",
      question: "The Product of 131 × 0 × 300 × 4",
      answers: [
        { text: "11" },
        { text: "0", isCorrect: true },
        { text: "46" },
        { text: "45" },
      ],
    },

    // Physics Questions
    {
      category: "Physics",
      question: "Which of the following causes the production of Radiocarbon in the atmosphere?",
      answers: [
        { text: "Due to the Collision between fast neutrons and nitrogen nuclei present in the atmosphere", isCorrect: true },
        { text: "Due to the action of ultraviolet light from the sun on atmospheric oxygen" },
        { text: "Due to the action of solar radiations particularly cosmic rays on carbon dioxide present in the atmosphere" },
        { text: "Due to the lightning discharge in the atmosphere" },
      ],
    },
    {
      category: "Physics",
      question: "What is more convenient rolling of stone on a sloping road than to lift it vertical upwards?",
      answers: [
        { text: "Rolling is more convenient and more work done as compared to the lifting" },
        { text: "The work done by the rolling stone is equal to the lifting" },
        { text: "The work done in both is the same but the rate of doing work is less in rolling" },
        { text: "The work done in rolling a stone is less than in lifting it", isCorrect: true },
      ],
    },
    {
      category: "Physics",
      question: "Which of the following phenomena is involved in the absorption of ink by blotting paper?",
      answers: [
        { text: "Viscosity of ink" },
        { text: "Capillary action", isCorrect: true },
        { text: "Diffusion of ink" },
        { text: "Siphon action" },
      ],
    },
    {
      category: "Physics",
      question: "What will happen when the siphon will fail to work?",
      answers: [
        { text: "The densities of the liquid are equal in the two vessels" },
        { text: "The level of the liquid in the two vessels is at the same height", isCorrect: true },
        { text: "Both its limbs are of unequal length" },
        { text: "The temperature of the liquids in the two vessels are the same" },
      ],
    },
    {
      category: "Physics",
      question: "Which of the following phenomena is related to the large transformers, when used for some time, become very hot and is cooled by circulating oil?",
      answers: [
        { text: "The heating effect of current alone" },
        { text: "Hysteresis loss alone" },
        { text: "Both the heating effect of current and hysteresis loss", isCorrect: true },
        { text: "Intense sunlight at noon" },
      ],
    },
    {
      category: "Computer",
      question: "Who is the father of Computer science?",
      answers: [
        { text: "Charles Babbage", isCorrect: true },
        { text: "Alan Turing" },
        { text: "Ada Lovelace" },
        { text: "John von Neumann" },
      ],
    },
    {
      category: "Computer",
      question: "In a computer, most processing takes place in _______?",
      answers: [
        { text: "RAM" },
        { text: "Hard Disk" },
        { text: "CPU", isCorrect: true },
        { text: "GPU" },
      ],
    },
    {
      category: "Computer",
      question: "In which type of computer, data is represented as discrete signals?",
      answers: [
        { text: "Analog Computer" },
        { text: "Hybrid Computer" },
        { text: "Digital Computer", isCorrect: true },
        { text: "Mainframe Computer" },
      ],
    },
    {
      category: "Computer",
      question: "Scientific Name of Computer?",
      answers: [
        { text: "Silicon sapiens" },
        { text: "Digitalis machina" },
        { text: "Silicon sapiens", isCorrect: true },
        { text: "Machina digitalis" },
      ],
    },
    {
      category: "Computer",
      question: "What is the name of the display feature that highlights an area of the screen which requires operator attention?",
      answers: [
        { text: "Focus Mode" },
        { text: "Highlight Mode" },
        { text: "Alert Mode" },
        { text: "Reverse Video", isCorrect: true },
      ],
    },
  ];

  return (
    <div className={`App ${isAuthenticated ? "authenticated" : ""}`}>
      {isAuthenticated ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          {selectedCategory ? (
            isQuizOver || quizCompleted ? (
              <ScoreView
                handleResetClick={handleResetClick}
                score={score}
                totalQuestions={questions.length}
                quizPercentage={quizPercentage}
              />
            ) : (
              <QuizView
                questions={questions.filter((q) => q.category === selectedCategory)}
                currentQuestion={currentQuestion}
                handleAnswerClick={handleAnswerClick}
                handleQuizCompletion={handleQuizCompletion}
              />
            )
          ) : (
            <CategorySelection
              categories={categories}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        </div>
      ) : (
        <div className="Login">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Login</button>
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
