import { Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import WordRepresentation from "./WordRepresentation";
import Keyboard from "./Keyboard";

type WordRep = [] | boolean[];

function GamePage() {
  const wordToGuess = useLocation().state;
  const [wordRep, setWordRep] = useState<WordRep>([]);

  function handleKeyClick(letter: string) {
    let isCorrectLetter = false;

    wordToGuess.word.split("").forEach((wordLetter: string, i: number) => {
      if (wordLetter === letter) {
        setWordRep((current) => {
          const newRep = [...current];
          newRep[i] = true;

          return newRep;
        });
        isCorrectLetter = true;
      }
    });

    return isCorrectLetter;
  }

  useEffect(() => {
    setWordRep(new Array(wordToGuess.word.length).fill(false));
  }, [wordToGuess]);

  if (!wordToGuess) {
    return <Navigate to={"/"} />;
  }
  return (
    <section>
      <WordRepresentation word={wordToGuess.word} wordRep={wordRep} />
      <Keyboard handleKeyClick={handleKeyClick} />
    </section>
  );
}

export default GamePage;
