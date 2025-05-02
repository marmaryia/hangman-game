import { useEffect, useState } from "react";
import ModeSwitch from "./ModeSwitch";
import WordRepresentation from "./WordRepresentation";
import Keyboard from "./Keyboard";

type WordData = { word: string | undefined; definition: string | undefined };
type WordRep = [] | boolean[];

function SecretWord() {
  const [twoPlayer, setTwoPlayer] = useState(false);
  const [wordData, setWordData] = useState<WordData>({
    word: undefined,
    definition: undefined,
  });
  const [wordRep, setWordRep] = useState<WordRep>([]);

  useEffect(() => {
    setWordRep(new Array(wordData.word ? wordData.word.length : 0).fill(false));
  }, [wordData]);

  function handleKeyClick(letter: string) {
    console.log(letter);
    if (wordData.word?.includes(letter)) {
      wordData.word.split("").forEach((wordLetter, i) => {
        if (wordLetter === letter) {
          setWordRep((current) => {
            const newRep = [...current];
            current[i] = true;
            return newRep;
          });
        }
      });
    }
  }
  console.log(wordData, wordRep);
  return (
    <section>
      <ModeSwitch
        checked={twoPlayer}
        setChecked={setTwoPlayer}
        setWordData={setWordData}
      />
      {wordData.word ? (
        <WordRepresentation wordRep={wordRep} word={wordData.word} />
      ) : null}
      <Keyboard handleKeyClick={handleKeyClick} />
    </section>
  );
}

export default SecretWord;
