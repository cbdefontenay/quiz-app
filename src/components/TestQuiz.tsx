"use client";

import { useState } from "react";
import { Question, Answer, Category } from "./types";
import PopUpResults from "@/components/PopUpResults";
import { Merienda, Overlock } from "next/font/google";

type Props = {
  questions: Question[];
};

const merienda = Merienda({
  subsets: ["latin"],
  weight: "400",
});

const overlock = Overlock({
  subsets: ["latin"],
  weight: "400",
});

const TestQuiz: React.FC<Props> = ({ questions }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleAnswer = (questionIndex: number, choice: string) => {
    // Retrieve the selected answer from the choices array of the corresponding question
    const question = questions[questionIndex];
    const answer = question.choices.find((c) => c.choice === choice);

    // If an answer is found, add it to the answers state
    if (answer) {
      const newAnswer: Answer = {
        category: answer.category,
        choice,
      };
      setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
    }
  };

  const calculateResult = () => {
    const result: Record<Category, number> = {};

    // Count the choices for each category
    answers.forEach((answer) => {
      const { category } = answer;
      if (result[category]) {
        result[category]++;
      } else {
        result[category] = 1;
      }
    });

    // Find the category with the highest score
    let maxScore = 0;
    let maxCategory: Category = "";

    Object.entries(result).forEach(([category, score]) => {
      if (score > maxScore) {
        maxScore = score;
        maxCategory = category as Category;
      }
    });

    return maxCategory;
  };

  const handleSubmit = () => {
    const result = calculateResult();
    setShowResult(true);
  };

  return (
    <>
      <div className='h-full w-full'>
        <h1
          className={`${merienda.className} flex justify-center items-center text-center text-3xl font-bold mb-4 text-yellow-600 mt-12`}
        >
          Which House of Hogwarts is yours?
        </h1>
        <div className='h-full'>
          {questions.map((question, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center w-full h-full'
            >
              <h3
                className={`${merienda.className} mb-14 mt-20 text-yellow-600 font-bold text-2xl md:mx-36 text-center`}
              >
                {question.text}
              </h3>
              {question.choices.map((choice, choiceIndex) => (
                <button
                  className={`${overlock.className} ml-4 mb-8 border border-white rounded-xl py-2 px-4 focus:bg-yellow-600 focus:text-gray-800 text-xl`}
                  key={choiceIndex}
                  onClick={() => handleAnswer(index, choice.choice)}
                >
                  {choice.choice}
                </button>
              ))}
            </div>
          ))}
          <div className='w-full flex justify-center items-center'>
            <button
              className='mt-20 border border-gray-300 rounded-xl shadow-xl py-2 px-4'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          {showResult && <PopUpResults result={calculateResult()} />}
        </div>
      </div>
    </>
  );
};

export default TestQuiz;
