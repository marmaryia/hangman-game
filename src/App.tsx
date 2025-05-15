import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GamePage from "./components/GamePage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
