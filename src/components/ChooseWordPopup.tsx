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

  return (
    <Popup
      modal
      position={"center center"}
      closeOnDocumentClick={true}
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
          minLength={3}
          maxLength={13}
          onChange={(e) => {
            setUserChosenWord(e.target.value.toUpperCase());
          }}
        />{" "}
        <br />
        <button type="submit">Confirm</button>
      </form>
    </Popup>
  );
}

export default ChooseWordPopup;
