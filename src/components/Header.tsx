import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="header-text">Hangman</h1>
      <h2 className="header-text">The same game with a positive spin</h2>
      <Link to="/" className="header-link">
        <img
          src="public/washing-machine.png"
          alt="washing machine icon"
          className="washing-machine-img"
        />
      </Link>
    </header>
  );
}

export default Header;
