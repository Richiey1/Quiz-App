
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
        Options: ["London", "Leeds", "Liverpool", "Manchester"],
        Answer: 0 
    },
    {
        Questions: "Who is the richest man in the world",
        Options: ["Dangote", "Tinubu", "Bill Gates", "Elon Musk"],
        Answer: 3 
    },
    {
        Questions: "What is the most populated country in the world",
        Options: ["Nigeria", "China", "USA", "Russia"],
        Answer: 1
    },
    {
        Questions: "Which planet is known as the Red Planet?",
        Options: ["Earth", "Mars", "Venus", "Jupiter"],
        Answer: 1
    },
    {
        Questions: "What year did World War II end?",
        Options: ["1918", "1939", "1945", "1965"],
        Answer: 2
    },
    {
        Questions: "What is the chemical symbol for gold?",
        Options: ["Ag", "Au", "Fe", "Hg"],
        Answer: 1
    },
    {
        Questions: "Who wrote 'Hamlet'?",
        Options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Leo Tolstoy"],
        Answer: 1
    },
    {
        Questions: "Which is the largest ocean on Earth?",
        Options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        Answer: 3
    },
    {
        Questions: "What is the capital of Japan?",
        Options: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
        Answer: 3
    },
    {
        Questions: "How many continents are there on Earth?",
        Options: ["5", "6", "7", "8"],
        Answer: 2
    },
];