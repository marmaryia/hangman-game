import { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Popup from "reactjs-popup";
import { WordContext } from "../contexts/WordContext";
import generateWord from "../utils/generateWord";

function GameOverPopup({
  win,
  setGameOver,
  setLives,
}: {
  win: boolean;
  setGameOver: Function;
  setLives: Function;
}) {
  const { wordToGuess, setWordToGuess } = useContext(WordContext);
  const [searchParams, _] = useSearchParams();
  const [popupOpen, setPopupOpen] = useState(true);
  const numberOfPlayers = searchParams.get("players");
  function handleNewGame() {
    if (numberOfPlayers === "1") {
      setWordToGuess(generateWord());
      setPopupOpen(false);
    } else if (numberOfPlayers === "2") {
    }
    setGameOver(false);
    setLives(7);
  }

  return (
    <Popup open={popupOpen} closeOnDocumentClick={false} closeOnEscape={false}>
      <h3>You {win ? "won" : "lost"}!</h3>
      <p>The word was {wordToGuess.word}</p>
      {wordToGuess.definition && <p>"{wordToGuess.definition}"</p>}
      <button onClick={handleNewGame}>Play again</button>
      <Link to={"/"}>To main page</Link>
    </Popup>
  );
}

export default GameOverPopup;
