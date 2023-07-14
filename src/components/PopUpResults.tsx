import { Category } from "@/types";

const PopUpResults: React.FC<{ result: Category }> = ({ result }) => {
  // Render the result popup component with the received result
  return (
    <div className='result-popup'>
      <h2>You belong to the {result} House!</h2>
    </div>
  );
};

export default PopUpResults;
