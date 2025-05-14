function LivesCounter({ lives }: { lives: number }) {
  return (
    <div className="lives-counter">
      {new Array(lives).fill("").map((_, i) => {
        return (
          <img
            src="clothes-peg.png"
            alt="hanging shirt"
            key={i}
            className="life-icon"
          />
        );
      })}
    </div>
  );
}

export default LivesCounter;
