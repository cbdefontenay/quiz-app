import { Philosopher } from "next/font/google";
import Link from "next/link";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: "400",
});

const QuizHome = () => {
  return (
    <>
      <div
        className={`relative w-screen h-screen overflow-hidden ${philosopher.className}`}
      >
        <div className='absolute w-screen h-full object-cover'>
          <video
            className='absolute w-full h-full inset-0 z-[-1] object-cover'
            autoPlay
            loop
            muted
          >
            <source src='/death.mp4' type='video/mp4' />
          </video>
        </div>

        <div className='lg:mx-72 mt-48 md:mt-64 text-3xl font-bold mx-2 text-center z-2 bg-blue-200 bg-opacity-50 px-2 py-4 rounded-md'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-blue-700 text-center pb-4 text-2xl md:text-3xl'>
              Welcome to the Harry Potter unofficial Quiz
            </h1>
            <h2 className='text-blue-700 text-justify text-lg md:text-xl mt-4 mb-2'>
              Here we will see if you know the most famous characters of the
              series.
            </h2>
            <h2 className='text-blue-700 text-justify text-lg md:text-xl'>
              Click on the button below to start the quiz and see if you can
              guess the most known and difficult facts of the series.
            </h2>
            <Link href='/quiz'>
              <button
                type='button'
                className='bg-gray-200 text-blue-700 mt-10 rounded-xl px-4 py-2 focus:outline-none shadow-2xl cursor-pointer'
              >
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizHome;
