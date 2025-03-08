
interface IQuiz{
    Questions: string;
    Options: string[];
    Answer: number

}
export interface IQuestionState{
    isAnswered: boolean,
    currentQuestion: number,
    isCorrect: boolean | null;
    isQuizOver: boolean,
    selectedAnswer: number | null;
    score: number,

}

 export const questions: IQuiz[] = [
    {
        Questions: "What is the capital of UK",
        Options: ["London","Leeds", "Liverpool", "Manchester"],
        Answer: 0 
    },
    {
        Questions: "Who is the most richest man in the world",
        Options: ["Dangote","Tinubu", "Bill Gates", "Elon Musk"],
        Answer: 3 
    },
    {
        Questions: "What is the most poulated country in th world",
        Options: ["Nigeria","China", "USA", "Russia"],
        Answer: 1
    },
];
