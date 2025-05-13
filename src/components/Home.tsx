import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

import { data } from "../assets/dictionary.ts";
import generateWord from "../utils/generateWord";

function Home() {
  const [wordToGuess, setWordToGuess] = useState<{
    word: null | string;
    definition: null | string;
  }>({ word: null, definition: null });
  const [playerMode, setPlayerMode] = useState<null | 1 | 2>(null);
  const [userChosenWord, setUserChosenWord] = useState("");

  const navigate = useNavigate();

  function handleSinglePlayer() {
    setWordToGuess(generateWord());
    setPlayerMode(1);
  }

  function handleTwoPlayers(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWordToGuess({
      word: userChosenWord,
      definition: data[userChosenWord] ? data[userChosenWord] : null,
    });
    setPlayerMode(2);
  }

  useEffect(() => {
    if (wordToGuess.word && playerMode) {
      navigate(`/game?players=${playerMode}`, { state: wordToGuess });
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
          <Popup
            trigger={<button>Two players</button>}
            modal
            position={"center center"}
            closeOnDocumentClick={true}
          >
            <form action="submit" onSubmit={handleTwoPlayers}>
              <label htmlFor="wordToGuess">
                One of the players chooses a word (3 to 13 characters):
              </label>
              <br />
              <input
                type="password"
                name="wordToGuess"
                id="wordToGuess"
                minLength={3}
                maxLength={13}
                onChange={(e) => {
                  setUserChosenWord(e.target.value.toUpperCase());
                }}
              />
              <button type="submit">Confirm</button>
            </form>
          </Popup>

          <p>Guess a word carefully chosen by a friend</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
