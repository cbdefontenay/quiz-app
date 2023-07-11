import { useRouter } from "next/navigation";

interface HomeButtonProps {
  text: string;
}

const HomeButton = ({ text }: HomeButtonProps) => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <button
      className='mt-4 border border-white bg-white text-black font-bold focus:outline-none py-2 px-4 rounded-xl hover:bg-transparent hover:text-white shadow-md shadow-gray-400'
      type='button'
      onClick={goHome}
    >
      {text}
    </button>
  );
};

export default HomeButton;
