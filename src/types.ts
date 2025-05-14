export type WordToGuessType = {
  word: string | null;
  definition: string | null;
};

export type WordRep = [] | boolean[];

export type Key = { letter: string; state: "unused" | "correct" | "incorrect" };
