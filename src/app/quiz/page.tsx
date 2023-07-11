"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quiz } from "../data";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | string>(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [selectedAnswerCorrect, setSelectedAnswerCorrect] = useState<number[]>(
    []
  );
  const [selectedAnswerIncorrect, setSelectedAnswerIncorrect] = useState<
    number[]
  >([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  const router = useRouter();

  const redirectToAllAnswers = () => {
    setShowAllAnswers(true);
    router.push("/quiz/all_answers");
  };

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer: string, index: number) => {
    setChecked(true);
    setSelectedAnswerIndex(index);

    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      setSelectedAnswerCorrect((prev) => [...prev, index]);
    } else {
      setSelectedAnswer(false);
      setSelectedAnswerIncorrect((prev) => [...prev, index]);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 20,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className='text-gray-200 flex flex-col justify-center items-center mt-32 mx-2'>
      <h1 className='text-3xl font-bold mb-8 text-center'>
        Harry Potter Quiz Game
      </h1>
      <h2 className='text-xl mt-4 mb-10'>
        Question: {activeQuestion + 1} <span>/{questions.length}</span>
      </h2>
      <div className=''>
        {!showResult ? (
          <div>
            <h3 className='mb-8 text-xl font-bold text-center'>
              {questions[activeQuestion].question}
            </h3>
            {answers.map((answer, index) => (
              <li
                key={index}
                onClick={() => onAnswerSelected(answer, index)}
                className={`${
                  selectedAnswerIndex === index
                    ? selectedAnswerCorrect.includes(index)
                      ? "bg-green-500 text-white list-none shadow-2xl rounded-xl"
                      : selectedAnswerIncorrect.includes(index)
                      ? "bg-red-500 text-white list-none shadow-2xl rounded-xl"
                      : "hover:bg-gray-200 hover:text-gray-800 list-none rounded-xl shadow-2xl"
                    : "hover:bg-gray-200 hover:text-gray-800 list-none rounded-xl shadow-2xl"
                }`}
              >
                <p className='cursor-pointer focus:outline-none border border-white mt-4 py-2 px-4 text-center w-full rounded-xl mb-2'>
                  {answer}
                </p>
              </li>
            ))}
            {checked ? (
              <button
                onClick={nextQuestion}
                type='button'
                className='mt-4 text-center flex items-center justify-center w-full cursor-pointer border border-gray-300 bg-white text-gray-800 rounded-xl py-2 px-2'
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled
                type='submit'
                className='mt-4 text-center flex items-center justify-center w-full cursor-pointer border border-gray-300 bg-white text-gray-800 rounded-xl py-2 px-2'
              >
                {activeQuestion === question.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        ) : (
          <div className='mt-8 text-xl'>
            <h3 className='mb-8 text-2xl text-red-400'>Result:</h3>
            <p className='mb-2'>
              Total Correct Answers: {result.correctAnswers}
            </p>
            <p className='mb-2'>Total Wrong Answers: {result.wrongAnswers}</p>

            <button
              className='mt-4 border border-white bg-white text-black font-bold focus:outline-none py-2 px-4 rounded-xl hover:bg-transparent hover:text-white shadow-md shadow-gray-400'
              type='button'
              onClick={redirectToAllAnswers}
            >
              View All Answers
            </button>

            <button
              className='mt-4 border border-white bg-white text-black font-bold focus:outline-none py-2 px-4 rounded-xl hover:bg-transparent hover:text-white shadow-md shadow-gray-400'
              type='button'
              onClick={() => setShowResult(false)}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
