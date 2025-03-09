import { useState } from "react";
import { IQuestionState, questions } from "./QuizQuestion";

const QuizGame = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [quizState, setQuizState] = useState<IQuestionState>({
    isAnswered: false,
    currentQuestion: 0,
    isCorrect: null,
    selectedAnswer: null,
    isQuizOver: false,
    score: 0,
  });

  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );

  const startQuiz = () => {
    setHasStarted(true);
  };
  const restartQuiz = () => {
    setHasStarted(false);
    setQuizState({
        isAnswered: false,
        currentQuestion: 0,
        isCorrect: null,
        selectedAnswer: null,
        isQuizOver: false,
        score:0,
    });
  }

  const handleAnswer = (selectedAnswerIndex: number) => {
    if (quizState.isAnswered) return;

    const isAnsweredCorrect =
      selectedAnswerIndex === questions[quizState.currentQuestion].Answer;

    const updatedAnswers = [...userAnswers];
    updatedAnswers[quizState.currentQuestion] = selectedAnswerIndex;
    setUserAnswers(updatedAnswers);

    setQuizState((prevQuizState) => ({
      ...prevQuizState,
      isAnswered: true,
      isCorrect: isAnsweredCorrect,
      selectedAnswer: selectedAnswerIndex,
      score: isAnsweredCorrect ? prevQuizState.score + 1 : prevQuizState.score,
    }));
  };

  const handleNext = () => {
    if (quizState.currentQuestion + 1 < questions.length) {
      setQuizState((prevQuizState) => ({
        ...prevQuizState,
        currentQuestion: prevQuizState.currentQuestion + 1,
        selectedAnswer: userAnswers[prevQuizState.currentQuestion + 1],
        isAnswered: userAnswers[prevQuizState.currentQuestion + 1] !== null,
        isCorrect:
          userAnswers[prevQuizState.currentQuestion + 1] ===
          questions[prevQuizState.currentQuestion + 1].Answer,
      }));
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState((prevQuizState) => ({
        ...prevQuizState,
        currentQuestion: prevQuizState.currentQuestion - 1,
        selectedAnswer: userAnswers[prevQuizState.currentQuestion - 1],
        isAnswered: userAnswers[prevQuizState.currentQuestion - 1] !== null,
        isCorrect:
          userAnswers[prevQuizState.currentQuestion - 1] ===
          questions[prevQuizState.currentQuestion - 1].Answer,
      }));
    }
  };

  const handleFinish = () => {
    setQuizState((prevQuizState) => ({ ...prevQuizState, isQuizOver: true }));
  };

  return (
    <div className="quiz-container">
      {!hasStarted ? (
      
        <div className="start-container">
          <h1>Welcome to the Quiz Game 🎉</h1>
          <button className="start-button" onClick={startQuiz}>
            Start Quiz 🚀
          </button>
        </div>
      ) : !quizState.isQuizOver ? (

        <div>
          <h2>{questions[quizState.currentQuestion].Questions}</h2>
          <div className="options-container">
            {questions[quizState.currentQuestion].Options?.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={quizState.isAnswered}
                  className={
                    quizState.selectedAnswer === index ? quizState.isCorrect ? "correct-answer" : "wrong-answer" : "" }
                 > {option}
                </button>
              )
            )}
          </div>

          <div className="nav-buttons">
            <button
              onClick={handlePrevious}
              disabled={quizState.currentQuestion === 0}
             >
              Previous
            </button>
            {quizState.currentQuestion + 1 < questions.length && (
              <button onClick={handleNext} disabled={!quizState.isAnswered}>
                Next
              </button>
            )}
            <button onClick={handleFinish}>Finish</button>
          </div>
        </div>
         ) : (
        
        <div className="score-container">
          <h2>🎉 Remarks! 🎉</h2>
          <p>
            Your score: {quizState.score} / {questions.length}
          </p>
          <p className="well-done">
            {quizState.score === questions.length
              ? "🌟 Perfect Score! You're a genius! 🚀"
              : quizState.score > questions.length / 2
              ? "💪 Great Job! Keep practicing, you're getting better! 🎯"
              : "😊 Keep learning and improving! 📚"}
          </p>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz 🔄
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
