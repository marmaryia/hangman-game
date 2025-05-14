function HangingShirt({ letter }: { letter: string }) {
  return (
    <div className="letter-container">
      {letter && <p className="letter">{letter}</p>}
    </div>
  );
}

export default HangingShirt;
