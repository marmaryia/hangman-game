import { useState, useEffect, useContext } from "react";
import { WordContext } from "../contexts/WordContext";

import { Key } from "../types";

function Keyboard({ handleKeyClick }: { handleKeyClick: Function }) {
  const { wordToGuess } = useContext(WordContext);
  const [keys, setKeys] = useState<Key[]>([
    { letter: "Q", state: "unused" },
    { letter: "W", state: "unused" },
    { letter: "E", state: "unused" },
    { letter: "R", state: "unused" },
    { letter: "T", state: "unused" },
    { letter: "Y", state: "unused" },
    { letter: "U", state: "unused" },
    { letter: "I", state: "unused" },
    { letter: "O", state: "unused" },
    { letter: "P", state: "unused" },
    { letter: "A", state: "unused" },
    { letter: "S", state: "unused" },
    { letter: "D", state: "unused" },
    { letter: "F", state: "unused" },
    { letter: "G", state: "unused" },
    { letter: "H", state: "unused" },
    { letter: "J", state: "unused" },
    { letter: "K", state: "unused" },
    { letter: "L", state: "unused" },
    { letter: "Z", state: "unused" },
    { letter: "X", state: "unused" },
    { letter: "C", state: "unused" },
    { letter: "V", state: "unused" },
    { letter: "B", state: "unused" },
    { letter: "N", state: "unused" },
    { letter: "M", state: "unused" },
  ]);

  function handleButtonPress(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    i: number
  ) {
    const isCorrect = handleKeyClick((e.target as HTMLInputElement).value);
    setKeys((current) => {
      const newKeys = [...current];
      newKeys[i] = {
        letter: current[i].letter,
        state: isCorrect ? "correct" : "incorrect",
      };
      return newKeys;
    });
  }

  useEffect(() => {
    setKeys((currentKeys) => {
      return currentKeys.map((key) => {
        return { ...key, state: "unused" };
      });
    });
  }, [wordToGuess]);

  return (
    <div className="keyboard">
      <div className="keyboard-row-one">
        {keys.slice(0, 10).map((key, i) => {
          return (
            <button
              value={key.letter}
              key={key.letter}
              disabled={key.state !== "unused"}
              className={"key " + key.state}
              onClick={(e) => {
                handleButtonPress(e, i);
              }}
            >
              {key.letter}
            </button>
          );
        })}
      </div>
      <div className="keyboard-row-two">
        {keys.slice(10, 19).map((key, i) => {
          return (
            <button
              value={key.letter}
              key={key.letter}
              disabled={key.state !== "unused"}
              className={"key " + key.state}
              onClick={(e) => {
                handleButtonPress(e, 10 + i);
              }}
            >
              {key.letter}
            </button>
          );
        })}
      </div>
      <div className="keyboard-row-three">
        {keys.slice(19).map((key, i) => {
          return (
            <button
              value={key.letter}
              key={key.letter}
              disabled={key.state !== "unused"}
              className={"key " + key.state}
              onClick={(e) => {
                handleButtonPress(e, 19 + i);
              }}
            >
              {key.letter}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Keyboard;
