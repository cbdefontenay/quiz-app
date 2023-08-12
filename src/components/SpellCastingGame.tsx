"use client";

import React, { useState } from "react";

const spells = [
  "Expelliarmus",
  "Legiliment",
  "Serpent Sortia",
  "Expulso",
  "Crucio",
  "Avada Kedavra",
];
const getRandomSpell = () => spells[Math.floor(Math.random() * spells.length)];

const sorcerer = [
  "Voldemort",
  "Severus Snape",
  "Draco Malfoy",
  "Lucius Malfoy",
  "Petter Pettigrew",
  "bellatrix Lestrange",
];
const getRandomSorcerer = () =>
  sorcerer[Math.floor(Math.random() * sorcerer.length)];

const SpellCastingGame: React.FC = () => {
  const [gameState, setGameState] = useState<
    "start" | "playing" | "win" | "lose"
  >("start");
  const [userSpell, setUserSpell] = useState("");
  const [victories, setVictories] = useState(0);
  const [defeats, setDefeats] = useState(0);

  const startGame = () => {
    setGameState("playing");
    setUserSpell("");
  };

  const handleSpellCasting = (selectedSpell: string) => {
    setUserSpell(selectedSpell);
    const userWins = getSpellOutcome(selectedSpell, getRandomSpell());

    if (userWins) {
      setVictories(victories + 1);
      setGameState("win");
    } else {
      setDefeats(defeats + 1);
      setGameState("lose");
    }
  };

  const getSpellOutcome = (userSpell: string, opponentSpell: string) => {
    if (
      (userSpell === "Expelliarmus" && opponentSpell === "Avada Kedavra") ||
      (userSpell === "Legiliment" && opponentSpell === "Serpent Sortia") ||
      (userSpell === "Crucio" && opponentSpell === "Expulso")
    ) {
      return true;
    } else if (
      (userSpell === "Expulso" && opponentSpell === "Serpent Sortia") ||
      (userSpell === "Legiliment" && opponentSpell === "Expelliarmus") ||
      (userSpell === "Avada Kedavra" && opponentSpell === "Crucio")
    ) {
      return false;
    } else if (
      (userSpell === "Serpent Sortia" && opponentSpell === "Expulso") ||
      (userSpell === "Avada Kedavra" && opponentSpell === "Legiliment") ||
      (userSpell === "Expelliarmus" && opponentSpell === "Crucio")
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className='flex flex-col items-center justify-center h-full bg-black text-white p-4'>
      <p className='text-2xl mb-8 text-center text-yellow-400'>
        Welcome to the Spell Casting Game!
      </p>
      <p>Victories: {victories}</p>
      <p>Defeats: {defeats}</p>
      <button
        onClick={startGame}
        className='mt-4 mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        {gameState === "start" ? "Start Game" : "Play Again"}
      </button>
      {(gameState === "playing" ||
        gameState === "win" ||
        gameState === "lose") && (
        <div>
          {gameState === "playing" && (
            <div>
              <p className='text-lg md:text-xl mb-2 mt-10'>
                {getRandomSorcerer()} is casting: {getRandomSpell()}
              </p>
              <p className='text-md md:text-lg mb-8 mt-4'>Choose your spell:</p>
              <div className='grid grid-cols-2 gap-2'>
                {spells.map((spell) => (
                  <button
                    key={spell}
                    onClick={() => handleSpellCasting(spell)}
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded'
                  >
                    {spell}
                  </button>
                ))}
              </div>
            </div>
          )}
          {(gameState === "win" || gameState === "lose") && (
            <div>
              <p className='text-xl'>
                {gameState === "win" ? (
                  <span>
                    Congratulations! You defeated the opponent with {userSpell}!
                  </span>
                ) : (
                  <span>
                    Oh no! Your {userSpell} spell failed to crush your ennemy.
                    Try again!
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SpellCastingGame;
