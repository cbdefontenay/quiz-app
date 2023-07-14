import React from "react";
import TestQuiz from "@/components/TestQuiz";
import { questions } from "../../data/questions";

const TestPage = () => {
  return (
    <>
      <div className='container mx-auto p-4 text-white'>
        <TestQuiz questions={questions} />
      </div>
    </>
  );
};

export default TestPage;
