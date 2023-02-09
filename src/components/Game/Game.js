import React from "react";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

function Game() {
  const [answer, setAnswer] = React.useState("");
  const [guessCount, setGuessCount] = React.useState(0);
  const [guesses, setGuesses] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);

  function submitGuess(newWord) {
    const nextGuesses = [...guesses];
    nextGuesses.push({
      id: crypto.randomUUID(),
      word: newWord,
    });
    setGuesses(nextGuesses);

    const nextGuessCount = guessCount + 1;
    setGuessCount(nextGuessCount);

    if (newWord === answer) {
      setHasWon(true);
    }

    if (nextGuessCount === 6) {
      setHasLost(true);
    }
  }

  function startOver() {
    const newWord = sample(WORDS);
    setAnswer(newWord);
    setGuessCount(0);
    setGuesses([]);
    setHasWon(false);
    setHasLost(false);
    console.log(newWord);
  }

  React.useEffect(() => {
    const newWord = sample(WORDS);
    setAnswer(newWord);
    console.log(newWord);
  }, []);

  return (
    <>
      <GuessResults
        numberOfRounds={NUM_OF_GUESSES_ALLOWED}
        guesses={guesses}
        answer={answer}
      />
      {hasWon && (
        <Banner type="happy">
          <>
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>
                {guessCount} {guessCount > 1 ? "guesses" : "guess"}
              </strong>
              .
            </p>
            <button onClick={startOver}>New Game?</button>
          </>
        </Banner>
      )}

      {hasLost && (
        <Banner type="sad">
          <>
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
            <button onClick={startOver}>New Game?</button>
          </>
        </Banner>
      )}
      <GuessInput
        submitGuess={submitGuess}
        guessCount={guessCount}
        numberOfRounds={NUM_OF_GUESSES_ALLOWED}
        gameover={hasWon || hasLost}
      />
    </>
  );
}

export default Game;
