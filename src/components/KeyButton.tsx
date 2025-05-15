import { Key } from "../types";

function KeyButton({
  letterKey,
  i,
  handleButtonPress,
}: {
  letterKey: Key;
  i: number;
  handleButtonPress: Function;
}) {
  return (
    <button
      value={letterKey.letter}
      key={letterKey.letter}
      disabled={letterKey.state !== "unused"}
      className={"key " + letterKey.state}
      onClick={(e) => {
        handleButtonPress(e, i);
      }}
    >
      {letterKey.letter}
    </button>
  );
}

export default KeyButton;
