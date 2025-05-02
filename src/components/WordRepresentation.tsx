import { useState } from "react";

function WordRepresentation({
  wordRep,
  word,
}: {
  wordRep: boolean[];
  word: string;
}) {
  return (
    <div>
      <p>
        {wordRep
          .map((rep, i) => {
            return rep ? word[i] : "_";
          })
          .join(" ")}
      </p>
    </div>
  );
}

export default WordRepresentation;
