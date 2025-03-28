// /src/components/GameBoard.jsx
import React, { useState, useEffect } from "react";

const GameBoard = ({ setScore, targetBox, setTargetBox }) => {
  const gridSize = 5; // 5x5 grid
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const newTargetBox = Math.floor(Math.random() * gridSize * gridSize);
    setTargetBox(newTargetBox);
    setBoxes(Array(gridSize * gridSize).fill(false)); // false means empty
  }, [gridSize, setTargetBox]);

  const handleBoxClick = (index) => {
    if (index === targetBox) {
      setScore((prevScore) => prevScore + 10); // Full points for the correct box
    } else {
      const distance = Math.abs(index - targetBox);
      if (distance <= 2) {
        setScore((prevScore) => prevScore + 4); // Close to the box
      } else if (distance <= 4) {
        setScore((prevScore) => prevScore + 2); // Slightly farther
      }
    }
  };

  return (
    <div className="game-board">
      {boxes.map((_, index) => (
        <div
          key={index}
          className="game-box"
          onClick={() => handleBoxClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default GameBoard;