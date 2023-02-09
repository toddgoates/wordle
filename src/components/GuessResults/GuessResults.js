import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ numberOfRounds, guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, numberOfRounds).map((row, index) => (
        <Guess guess={guesses[index]} answer={answer} key={row} />
      ))}
    </div>
  );
}

export default GuessResults;
