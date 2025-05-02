import { useState } from "react";
type Key = { letter: string; state: "unused" | "correct" | "incorrect" };

function Keyboard({ handleKeyClick }: { handleKeyClick: Function }) {
  const [keys, setKeys] = useState<Key[]>([
    { letter: "Q", state: "unused" },
    { letter: "W", state: "unused" },
    { letter: "E", state: "unused" },
    { letter: "R", state: "unused" },
    { letter: "T", state: "unused" },
    { letter: "Y", state: "unused" },
    { letter: "U", state: "unused" },
    { letter: "I", state: "unused" },
    { letter: "O", state: "unused" },
    { letter: "P", state: "unused" },
    { letter: "A", state: "unused" },
    { letter: "S", state: "unused" },
    { letter: "D", state: "unused" },
    { letter: "F", state: "unused" },
    { letter: "G", state: "unused" },
    { letter: "H", state: "unused" },
    { letter: "J", state: "unused" },
    { letter: "K", state: "unused" },
    { letter: "L", state: "unused" },
    { letter: "Z", state: "unused" },
    { letter: "X", state: "unused" },
    { letter: "C", state: "unused" },
    { letter: "V", state: "unused" },
    { letter: "B", state: "unused" },
    { letter: "N", state: "unused" },
    { letter: "M", state: "unused" },
  ]);

  return (
    <div>
      {keys.map((key) => {
        return (
          <button
            value={key.letter}
            key={key.letter}
            onClick={(e) => {
              handleKeyClick((e.target as HTMLInputElement).value);
            }}
          >
            {key.letter}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
