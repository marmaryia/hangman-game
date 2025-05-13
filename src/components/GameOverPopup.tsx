import { Link, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";

function GameOverPopup({ win }: { win: boolean }) {
  const wordToGuess = useLocation().state;

  return (
    <Popup open={true} closeOnDocumentClick={false} closeOnEscape={false}>
      <h3>You {win ? "won" : "lost"}!</h3>
      <p>The word was {wordToGuess.word}</p>
      {wordToGuess.definition && <p>"{wordToGuess.definition}"</p>}
      <button>Play again</button>
      <Link to={"/"}>To main page</Link>
    </Popup>
  );
}

export default GameOverPopup;
