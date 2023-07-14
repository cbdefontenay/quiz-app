import { Category } from "./types";
import { Overlock } from "next/font/google";

const overlock = Overlock({
  subsets: ["latin"],
  weight: "400",
});

const PopUpResults: React.FC<{
  result: { category: Category; percentages: Record<Category, number> };
}> = ({ result }) => {
  // Render the result popup component with the received result
  if (result.category === "") {
    return null;
  } else {
    const { category, percentages } = result;

    let houseText = "";

    if (category === "Slytherin") {
      houseText =
        "<p>'Slytherin is a house that has a dark green color, and a snake. In Slytherin you shall thrive and learn more about the Dark Arts with your friends. You are proud and you like purity, of blood and mind. Remember, even the Magical Hat said that Harry Potter should belong to Slytherin. Not only bad people were in Slytherin.There you will get a bright future.'</p>";
    } else if (category === "Gryffindor") {
      houseText =
        "<p>'Gryffindor is a house that has a red color, and a lion. In Gryffindor you shall thrive and learn more about the Warlock with your friends. You are proud and you like courage, of courage and fear. But even Harry Potter felt some fear, when facing Lord Voldemort. But your strengh is that you won't show it and always accept new challenges.'</p>";
    } else if (category === "Hufflepuff") {
      houseText =
        "<p>'Hufflepuff is a house that has a yellow color, and a badger. In Hufflepuff you shall thrive and learn more about the Potions with your friends. You are proud and you value loyalty, patience, and hard work. Even if Cedric Diggory died, it doesn't mean Hufflepuff is a bad House with unintelligent persons. You just need patience and a good friend to advise you... Maybe someone from Ravenclaw?'</p>";
    } else if (category === "Ravenclaw") {
      houseText =
        "<p>'Ravenclaw is a house that has a blue color, and a Raven. In Ravenclaw you shall thrive and learn more about the Defence with your friends. You are proud and you value intelligence, wisdom, and creativity. Remember, the most intelligent persons belong to the beautiful House of Ravenclaw. There you will get a bright future.'</p>";
    }

    return (
      <div
        className={`${overlock.className} w-full mt-14 mb-10 flex flex-col items-center justify-center text-xl`}
      >
        <h2 className='text-center mb-8 mt-2 text-yellow-400 text-2xl font-semibold'>
          You belong to the {category} House!
        </h2>

        <div className='bg-yellow-400 bg-opacity-40 rounded-lg p-8 mt-8 mb-10'>
          {Object.entries(percentages).map(([category, percentage]) => (
            <p
              key={category}
              className='text-white text-center text-xl font-semibold'
            >{`You are ${percentage.toFixed(0)}% ${category}`}</p>
          ))}
        </div>

        <div className='text-center px-4 md:px-20 lg:px-56 text-yellow-600 '>
          <p dangerouslySetInnerHTML={{ __html: houseText }} />
        </div>
      </div>
    );
  }
};

export default PopUpResults;
