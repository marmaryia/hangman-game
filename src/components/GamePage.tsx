import { WordContext } from "../contexts/WordContext";
import { useContext } from "react";

function GamePage() {
  const { wordToGuess } = useContext(WordContext);
  console.log(wordToGuess);
  return (
    <div>
      <p>{wordToGuess.word}</p>
    </div>
  );
}

export default GamePage;
