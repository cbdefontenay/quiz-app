import QuizHome from "@/components/QuizHome";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full h-screen'>
      <NavBar />
      <QuizHome />
    </main>
  );
}
