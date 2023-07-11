import { Philosopher } from "next/font/google";
import Link from "next/link";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: "400",
});

const QuizHome = () => {
  return (
    <div
      className={`relative w-screen h-screen overflow-hidden ${philosopher.className}`}
    >
      <video
        className='absolute w-full h-full object-cover'
        autoPlay
        loop
        muted
      >
        <source src='/death.mp4' type='video/mp4' />
      </video>

      <div className='absolute w-full h-full px-4 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center'>
        <div className='max-w-lg mx-auto text-center'>
          <h1 className='text-gray-200 text-3xl md:text-4xl font-bold mb-10'>
            Welcome to the Harry Potter unofficial Quiz
          </h1>
          <h2 className='text-gray-200 text-lg md:text-xl mb-4'>
            Here we will see if you know the most famous characters of the
            series.
          </h2>
          <h2 className='text-gray-200 text-lg md:text-xl mb-10'>
            Click on the button below to start the quiz and see if you can guess
            the most known and difficult facts of the series.
          </h2>
          <Link href='/quiz'>
            <button
              type='button'
              className='font-bold text-xl bg-gray-200 text-blue-700 rounded-xl px-4 py-2 focus:outline-none shadow-2xl cursor-pointer'
            >
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizHome;
