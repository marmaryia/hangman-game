import { useContext, useState } from "react";
import Popup from "reactjs-popup";
import { WordContext } from "../contexts/WordContext";
import { data } from "../assets/dictionary.ts";

function ChooseWordPopup({
  popupOpen,
  setPopupOpen,
}: {
  popupOpen: boolean;
  setPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setWordToGuess } = useContext(WordContext);
  const [userChosenWord, setUserChosenWord] = useState("");

  function handleWordSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWordToGuess({
      word: userChosenWord,
      definition: data[userChosenWord] ? data[userChosenWord] : null,
    });
    setUserChosenWord("");
    setPopupOpen(false);
  }

  function handleWordInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserChosenWord(e.target.value.toUpperCase());
  }

  return (
    <Popup
      modal
      position={"center center"}
      closeOnDocumentClick={false}
      closeOnEscape={false}
      open={popupOpen}
      onClose={() => setPopupOpen(false)}
    >
      <form action="submit" onSubmit={handleWordSubmit}>
        <label htmlFor="wordToGuess">
          <h3>Two-player mode!</h3>
          <p>One of the players chooses a word (3 to 13 characters):</p>
        </label>
        <br />
        <input
          type="password"
          name="wordToGuess"
          id="wordToGuess"
          onChange={handleWordInput}
        />
        <br />
        {userChosenWord.length > 0 && !/^[a-zA-Z]+$/.test(userChosenWord) && (
          <p className="word-input-warning">
            No spaces, numbers or special characters!
          </p>
        )}
        <div className="go-popup-buttons-container">
          <button
            type="submit"
            disabled={
              userChosenWord.length < 3 ||
              userChosenWord.length > 13 ||
              !/^[a-zA-Z]+$/.test(userChosenWord)
            }
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => {
              setPopupOpen(false);
              setWordToGuess({ word: null, definition: null });
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </Popup>
  );
}

export default ChooseWordPopup;
