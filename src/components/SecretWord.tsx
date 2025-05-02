import { useState } from "react";
import ModeSwitch from "./ModeSwitch";

function SecretWord() {
  const [twoPlayer, setTwoPlayer] = useState(false);
  const [wordData, setWordData] = useState({});
  console.log(wordData);
  return (
    <section>
      <ModeSwitch
        checked={twoPlayer}
        setChecked={setTwoPlayer}
        setWordData={setWordData}
      />
    </section>
  );
}

export default SecretWord;
