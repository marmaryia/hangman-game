import { Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import WordRepresentation from "./WordRepresentation";
import Keyboard from "./Keyboard";
import LivesCounter from "./LivesCounter";

type WordRep = [] | boolean[];

function GamePage() {
  const wordToGuess = useLocation().state;
  const [wordRep, setWordRep] = useState<WordRep>([]);
  const [lives, setLives] = useState<number>(7);

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
    if (!isCorrectLetter) {
      setLives(lives > 0 ? lives - 1 : 0);
    }
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
      <LivesCounter lives={lives} />
      <WordRepresentation word={wordToGuess.word} wordRep={wordRep} />
      <Keyboard handleKeyClick={handleKeyClick} />
    </section>
  );
}

export default GamePage;
