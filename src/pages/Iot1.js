import React, { useState, useEffect } from "react";
import HangmanCanvas from "./HangmanCanvas";
// import "./HangmanGame.css"; // Import the additional CSS file

const words = ["REACT", "JAVASCRIPT", "DEVELOPER", "HANGMAN", "COMPONENT", "FEEDBACK"];

const Iot1 = () => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    resetGame();
  }, []);

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  };

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setMistakes(mistakes + 1);
      }
    }
  };

  const isGameWon = () => {
    return word.split("").every((letter) => guessedLetters.includes(letter));
  };

  const isGameLost = () => {
    return mistakes >= 6;
  };

  const resetGame = () => {
    setWord(chooseRandomWord());
    setGuessedLetters([]);
    setMistakes(0);
  };

  return (
    <div className="hangman-container">
      <h1 style={{color: "#40513B"}}>Hangman Game</h1>
      <h5 style={{color: "#40513B"}}>
        Hangman is a word-guessing game. Start a new game, guess letters to
        reveal the word, and avoid drawing the hangman by making incorrect
        guesses. Win by guessing the word before the hangman is complete. Have
        fun!
      </h5>
      <HangmanCanvas mistakes={mistakes} />
      <div className="word-display">
        {word.split("").map((letter, index) => (
          <span key={index} className="letter">
            {guessedLetters.includes(letter) ? letter : "*"}
          </span>
        ))}
      </div>
      <div className="keyboard">
        {Array.from(Array(26)).map((_, index) => (
          <button
            key={index}
            onClick={() => handleGuess(String.fromCharCode(65 + index))}
            disabled={guessedLetters.includes(String.fromCharCode(65 + index))}
          >
            {String.fromCharCode(65 + index)}
          </button>
        ))}
      </div>
      {isGameWon() && <p className="result-message">You won!</p>}
      {isGameLost() && (
        <p className="result-message">You lost! The word was: {word}</p>
      )}
      <button className="new-game-button" onClick={resetGame}>
        New Game
      </button>

      <style>
        {`
            .hangman-canvas {
                display: flex;
                justify-content: center;
                margin: 20px;
            }

            .hangman-canvas > div {
                width: 20px;
                height: 20px;
                background-color: #FF0000;
                margin: 0 5px;
                border-radius: 50%;
            }

            .word-display {
                margin: 20px;
                font-size: 24px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }

            .letter {
                margin: 0 5px;
                font-size: 24px;
                display: inline-block;
                border-bottom: 2px solid #40513B;
                padding-bottom: 5px;
                transition: all 0.3s ease;
                color: #40513B;
            }

            .letter.guessed {
                color: rgb(106, 192, 238);
                border-bottom: 2px solid rgb(22, 96, 118);
            }

            .result-message {
                font-size: 24px;
                font-weight: bold;
                margin: 20px 0;
                color: #40513B;
            }

            .keyboard {
                margin: 20px;
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 10px;
            }

            .keyboard button {
                font-size: 18px;
                padding: 10px 15px;
                background-color: #609966;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .keyboard button:disabled {
                background-color: #ccc;
                cursor: not-allowed;
            }

            .keyboard button:hover {
                background-color: #9DC08B;
            }

            p {
                font-size: 24px;
                font-weight: bold;
                color: #002c4f;
                margin-top: 20px;
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-20px);
                }
                60% {
                    transform: translateY(-10px);
                }
            }

            .bounce {
                animation: bounce 1s infinite;
            }

            .hangman-container {
                text-align: center;
                padding: 20px;
                margin: 10%;
                background-color: #EDF1D6;
                border-radius: 10px;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
            }

            h1 {
                color: #333;
            }

            .new-game-button {
                font-size: 18px;
                padding: 10px 15px;
                background-color: #40513B;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
                transition: all 0.3s ease;
            }

            .new-game-button:hover {
                background-color: #609966;
            }

        `}
      </style>
    </div>
  );
};

export default Iot1;
