import { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Popup from "reactjs-popup";
import { WordContext } from "../contexts/WordContext";
import generateWord from "../utils/generateWord";
import ChooseWordPopup from "./ChooseWordPopup";

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
  const [wordInputPopupOpen, setWordInputPopupOpen] = useState<boolean>(false);
  const numberOfPlayers = searchParams.get("players");

  function handleNewGame() {
    if (numberOfPlayers === "1") {
      setWordToGuess(generateWord());
      setPopupOpen(false);
    } else if (numberOfPlayers === "2") {
      setWordInputPopupOpen(true);
    }
  }

  return (
    <div>
      <Popup
        open={popupOpen}
        closeOnDocumentClick={false}
        closeOnEscape={false}
      >
        <h3>You {win ? "won" : "lost"}!</h3>
        <p>The word was {wordToGuess.word}</p>
        {wordToGuess.definition && <p>"{wordToGuess.definition}"</p>}
        <button onClick={handleNewGame}>Play again</button>
        <Link to={"/"}>To main page</Link>
      </Popup>
      <ChooseWordPopup
        popupOpen={wordInputPopupOpen}
        setPopupOpen={setWordInputPopupOpen}
      />
    </div>
  );
}

export default GameOverPopup;
