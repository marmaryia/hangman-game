import HangingShirt from "./HangingShirt";

function WordRepresentation({
  wordRep,
  word,
}: {
  wordRep: boolean[];
  word: string;
}) {
  return (
    <div className="word-rep-container">
      {wordRep.map((rep, i) => {
        return <HangingShirt letter={rep ? word[i] : ""} />;
      })}
    </div>
  );
}

export default WordRepresentation;
