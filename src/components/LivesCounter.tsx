function LivesCounter({ lives }: { lives: number }) {
  return (
    <div>
      {new Array(lives).fill("").map((_, i) => {
        return (
          <img
            src="shirt_10509526.png"
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
