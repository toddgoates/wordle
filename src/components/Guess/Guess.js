import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  if (typeof guess != "undefined") {
    const letters = checkGuess(guess.word, answer);

    return (
      <p className="guess">
        {letters.map(({ letter, status }, index) => (
          <span className={`cell ${status}`} key={index}>
            {letter}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  );
}

export default Guess;
