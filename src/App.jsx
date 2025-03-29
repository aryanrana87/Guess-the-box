import React, { useState } from "react";
import "./App.css";

const generateRandomBox = () => Math.floor(Math.random() * 25);

const App = () => {
    const [chosenBox, setChosenBox] = useState(generateRandomBox());
    const [selectedBox, setSelectedBox] = useState(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const handleBoxClick = (index) => {
        if (gameOver) return;

        setSelectedBox(index);

        if (index === chosenBox) {
            setScore((prevScore) => prevScore + 10);
            setGameOver(true);
        } else if (Math.abs(index - chosenBox) === 1 || Math.abs(index - chosenBox) === 5) {
            setScore((prevScore) => prevScore + 5);
        } else {
            setGameOver(true);
        }
    };

    const resetGame = () => {
        setChosenBox(generateRandomBox());
        setSelectedBox(null);
        setGameOver(false);
    };

    return (
        <div className="game-container">
            <h1>Guess the Box</h1>
            <p>Score: {score}</p>
            <div className="grid">
                {[...Array(25)].map((_, index) => (
                    <div
                        key={index}
                        className={`box ${
                            index === selectedBox
                                ? index === chosenBox
                                    ? "correct"
                                    : "wrong"
                                : gameOver && index === chosenBox
                                ? "correct"
                                : ""
                        }`}
                        onClick={() => handleBoxClick(index)}
                    />
                ))}
            </div>
            {gameOver && <p>🎯 Correct Box Shown! Click Reset to Start Again.</p>}
            <button className="reset-button" onClick={resetGame}>
                Reset
            </button>
        </div>
    );
};

export default App;