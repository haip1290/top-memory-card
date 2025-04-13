import { useState } from "react";
import "../styles/App.css";
import Board from "./Board";

function App() {
  const [score, setScore] = useState(0);
  return (
    <main className="app-container">
      <header>
        <div>
          <h1>HSR Memory Game</h1>
          <p className="instruction">
            Choose a different card everytime until collecting them all
          </p>
        </div>
        <p className="score">Score: {score}</p>
      </header>
      {score < 10 ? (
        <Board setScore={setScore} />
      ) : (
        <div className="winning-message">
          <p>You won!</p>
          <button onClick={() => setScore(0)}>Replay</button>
        </div>
      )}
    </main>
  );
}

export default App;
