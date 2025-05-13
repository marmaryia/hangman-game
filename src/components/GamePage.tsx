import { Navigate, useLocation } from "react-router-dom";

function GamePage() {
  const wordToGuess = useLocation().state;

  if (!wordToGuess) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <p>{wordToGuess.word}</p>
    </div>
  );
}

export default GamePage;
