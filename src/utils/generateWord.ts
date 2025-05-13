import { data } from "../assets/dictionary.ts";

export default function generateWord() {
  const allWords = Object.keys(data);
  const randomIndex = Math.floor(Math.random() * allWords.length);

  return {
    word: allWords[randomIndex],
    definition: data[allWords[randomIndex]],
  };
}
