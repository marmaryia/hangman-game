import { Stack, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { data } from "../assets/dictionary.ts";
import { useEffect, useState } from "react";

function ModeSwitch({
  checked,
  setChecked,
  setWordData,
}: {
  checked: boolean;
  setChecked: Function;
  setWordData: Function;
}) {
  const [selectedWord, setSelectedWord] = useState("");

  useEffect(() => {
    if (!checked) {
      const allWords = Object.keys(data);
      const randomIndex = Math.floor(Math.random() * allWords.length);
      const word = allWords[randomIndex];
      const definition = data[word];
      setWordData({ word: word, definition: definition });
    } else {
    }
  }, [checked]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  function handleWordInput() {
    setWordData({ word: selectedWord, definition: undefined });
    setSelectedWord("");
  }

  return (
    <div>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Typography>Single-player</Typography>
        <Switch color="default" checked={checked} onChange={handleChange} />
        <Typography>Two players</Typography>
      </Stack>
      {checked && (
        <form action={handleWordInput}>
          <label htmlFor="selectedWord">Type a word</label> <br />
          <input
            type="password"
            id="selectedWord"
            value={selectedWord}
            onChange={(e) => setSelectedWord(e.target.value)}
          />
           
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
}

export default ModeSwitch;
