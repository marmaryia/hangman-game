function HangingShirt({ letter }: { letter: string }) {
  return (
    <div className="letter-container">
      {/* <img src="shirt.png" alt="shirt icon" className="shirt-img" /> */}
      {letter && <p className="letter">{letter}</p>}
    </div>
  );
}

export default HangingShirt;
