import React from "react";

function GuessInput({ submitGuess, guessCount, numberOfRounds, gameover }) {
  const [word, setWord] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (word.length !== 5) {
      window.alert("Please enter a word with 5 letters");
      return;
    }

    submitGuess(word);
    setWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={word}
        onChange={(event) => setWord(event.target.value.toUpperCase())}
        disabled={guessCount === numberOfRounds || gameover}
      />
    </form>
  );
}

export default GuessInput;
