import { useState } from "react";
import { IQuestionState, questions } from "./QuizQuestion";

const QuizGame = () => {
    const [quizState, setQuizState] = useState<IQuestionState>({
        isAnswered: false,
        currentQuestion: 0,
        isCorrect: null,
        selectedAnswer: null,
        isQuizOver: false,
        score: 0
    });

    const handleAnswer = (selectedAnswerIndex: number) => {
        if(quizState.isAnswered) return;
        const isAnsweredCorrect = 
        selectedAnswerIndex === questions[quizState.currentQuestion].Answer;
        setQuizState(prevQuizState => ({
            ...prevQuizState,
                isAnswered: true,
                isCorrect: isAnsweredCorrect,
                selectedAnswer: selectedAnswerIndex,
                score: isAnsweredCorrect ? prevQuizState.score + 1 : prevQuizState.score,
                isQuizOver: false
        }))
        setTimeout(() => {
            if(quizState.currentQuestion + 1 < questions.length){
                setQuizState( prevQuizState => ( {
                    ...prevQuizState, 
                    currentQuestion: prevQuizState.currentQuestion + 1,
                    selectedAnswer: null,
                    isCorrect: null,
                    isAnswered: false
                }));
            } else {
                setQuizState((prevQuizState) => ({
                    ...prevQuizState, isQuizOver: true
                }));
            }
         }, 1500);
    };

    return(
        <>
            {!quizState.isQuizOver ? (
             <div>
                <h2>{questions[quizState.currentQuestion].Questions}</h2>
                    { questions[quizState.currentQuestion].Options?.map((option, index) => 
                    (<button key={index} onClick={() => handleAnswer(index)}>{option}</button>
                    )
                )}
              
                </div>
            ): (
            <p>Your score: {quizState.score} / {questions.length}</p>

            )}
        </>
    );
};

export default QuizGame;