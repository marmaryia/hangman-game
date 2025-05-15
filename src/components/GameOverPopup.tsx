import { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Popup from "reactjs-popup";
import { WordContext } from "../contexts/WordContext";
import generateWord from "../utils/generateWord";
import ChooseWordPopup from "./ChooseWordPopup";

function GameOverPopup({ win }: { win: boolean }) {
  const { wordToGuess, setWordToGuess } = useContext(WordContext);
  const [searchParams] = useSearchParams();
  const [popupOpen, setPopupOpen] = useState(true);
  const [wordInputPopupOpen, setWordInputPopupOpen] = useState<boolean>(false);
  const numberOfPlayers = searchParams.get("players");

  function handleNewGame() {
    setPopupOpen(false);
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
        modal
        closeOnDocumentClick={false}
        closeOnEscape={false}
        position={"center center"}
        className="game-over-popup"
      >
        <h3>You {win ? "won" : "lost"}!</h3>
        <p className="go-popup-text">The word was {wordToGuess.word}</p>
        {wordToGuess.definition && (
          <p className="go-popup-text">"{wordToGuess.definition}"</p>
        )}
        <div className="go-popup-buttons-container">
          <button onClick={handleNewGame}>Play again</button>
          <Link className="link-to-home" to={"/"}>
            To main page
          </Link>
        </div>
      </Popup>
      <ChooseWordPopup
        popupOpen={wordInputPopupOpen}
        setPopupOpen={setWordInputPopupOpen}
      />
    </div>
  );
}

export default GameOverPopup;
