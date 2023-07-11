import { quiz } from "../app/data";
import { Philosopher } from "next/font/google";
import GoBackButton from "./GoBackButton";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: "400",
});

const AllAnswers = () => {
  return (
    <div
      className={`${philosopher.className} bg-hogwart bg-cover bg-no-repeat bg-fixed inset-0 text-gray-200 flex flex-col justify-center items-center pt-32 px-2`}
    >
      <h1 className='text-3xl font-bold mb-8 text-center'>All Answers</h1>
      <div className='grid gap-4'>
        {quiz.questions.map((question, index) => (
          <div key={question.id} className='bg-gray-800 p-4 rounded-xl'>
            <h3 className='text-xl font-bold mb-2 text-center'>
              {question.question}
            </h3>
            <ul>
              <li
                key={index}
                className='ml-4 text-green-400 text-lg text-center'
              >
                {question.correctAnswer}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <GoBackButton className='my-8 border text-bold border-white bg-white text-black font-bold focus:outline-none py-2 px-4 rounded-xl hover:bg-transparent hover:text-white shadow-md shadow-gray-400'>
        Go Back to the Begining
      </GoBackButton>
    </div>
  );
};

export default AllAnswers;
