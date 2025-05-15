import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="header-text">Hangman</h1>
      <h2 className="header-text">The same game with a positive spin</h2>
      <Link to="/" className="header-link">
        <img
          className="washing-machine-img"
          src="washing-machine.png"
          alt="washing machine icon"
        />
      </Link>
    </header>
  );
}

export default Header;
