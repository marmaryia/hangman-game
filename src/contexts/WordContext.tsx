import { createContext, useState } from "react";
import { ReactNode } from "react";

type WordToGuessType = { word: string | null; definition: string | null };

type WordContextType = {
  wordToGuess: WordToGuessType;
  setWordToGuess: React.Dispatch<React.SetStateAction<WordToGuessType>>;
};

const defaultContext = {
  wordToGuess: { word: null, definition: null },
  setWordToGuess: () => {},
};
export const WordContext = createContext<WordContextType>(defaultContext);

export function WordProvider({ children }: { children: ReactNode }) {
  const [wordToGuess, setWordToGuess] = useState<WordToGuessType>({
    word: null,
    definition: null,
  });

  return (
    <WordContext.Provider value={{ wordToGuess, setWordToGuess }}>
      {children}
    </WordContext.Provider>
  );
}
