import { useState } from "react";
import { IQuestionState, questions } from "../components/QuizQuestion";

const useQuiz = () => {
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

  const restartQuiz = () => {
    setHasStarted(false);
    setQuizState({
      isAnswered: false,
      currentQuestion: 0,
      isCorrect: null,
      selectedAnswer: null,
      isQuizOver: false,
      score: 0,
    });
    setUserAnswers(new Array(questions.length).fill(null));
  };

  return { hasStarted, startQuiz, quizState, questions, handleAnswer, handleNext, handlePrevious, handleFinish, restartQuiz, };
};

export default useQuiz;