import { quiz } from "../app/data";

const AllAnswers = () => {
  return (
    <div className='text-gray-200 flex flex-col justify-center items-center mt-32 mx-2'>
      <h1 className='text-3xl font-bold mb-8 text-center'>All Answers</h1>
      <div className='grid gap-4'>
        {quiz.questions.map((question, index) => (
          <div key={question.id} className='bg-gray-800 p-4 rounded-xl'>
            <h3 className='text-xl font-bold mb-2'>{question.question}</h3>
            <ul>
              <li key={index} className='ml-4'>
                {question.correctAnswer}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAnswers;
