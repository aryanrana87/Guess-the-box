import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [targetBox, setTargetBox] = useState(null);

  return (
    <div className="app">
      <Scoreboard score={score} />
      <GameBoard setScore={setScore} targetBox={targetBox} setTargetBox={setTargetBox} />
    </div>
  );
}

export default App;