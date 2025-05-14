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
    <section>
      <h2>
        Welcome! Would you like to compete against the computer or play with a
        buddy?
      </h2>
      <div>
        <div>
          <button onClick={handleSinglePlayer}>Single player</button>
          <p>Guess a randomly generated word</p>
        </div>
        <div>
          <button onClick={handleTwoPlayers}>Two players</button>
          <p>Guess a word carefully chosen by a friend</p>
          <ChooseWordPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        </div>
      </div>
    </section>
  );
}

export default Home;
