import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GamePage from "./components/GamePage";

function App() {
  return (
    <>
      <h1>Hangman</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
