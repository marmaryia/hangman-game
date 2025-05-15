import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import generateWord from "../utils/generateWord";
import { WordContext } from "../contexts/WordContext.tsx";
import ChooseWordPopup from "./ChooseWordPopup.tsx";

function Home() {
  const { wordToGuess, setWordToGuess } = useContext(WordContext);
  const [playerMode, setPlayerMode] = useState<null | 1 | 2>(null);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  function handleSinglePlayer() {
    setWordToGuess(generateWord());
    setPlayerMode(1);
  }

  function handleTwoPlayers() {
    setPopupOpen(true);
    setPlayerMode(2);
  }

  useEffect(() => {
    if (wordToGuess.word && playerMode) {
      navigate(`/game?players=${playerMode}`);
    }
  }, [wordToGuess]);

  return (
    <section className="landing-page-body">
      <h1>Welcome!</h1>
      <h2>
        Would you like to compete against the computer or play with a buddy?
      </h2>
      <div className="mode-container">
        <div className="mode-box">
          <button onClick={handleSinglePlayer}>Single player</button>
          <p className="mode-explanation">Guess a randomly generated word</p>
        </div>
        <div className="mode-box">
          <button onClick={handleTwoPlayers}>Two players</button>
          <p className="mode-explanation">Guess a word chosen by a friend</p>
          <ChooseWordPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        </div>
      </div>
    </section>
  );
}

export default Home;
