import React from "react";
import QuizGame from "./components/QuizGame";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>🧠 Quiz App</h1>
      <QuizGame />
    </div>
  );
};

export default App;
