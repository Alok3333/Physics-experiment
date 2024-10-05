import React, { useState, useEffect } from "react";

const gridSize = 4; // 4x4 grid
const maxTiles = gridSize * gridSize;

const generateTiles = () => {
  const tiles = [];
  for (let i = 0; i < maxTiles; i++) {
    tiles.push(Math.floor(Math.random() * 3) + 1); // Numbers 1, 2, or 3
  }
  return tiles;
};

const QuickTap = () => {
  const [tiles, setTiles] = useState(generateTiles());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleTileClick = (index) => {
    if (gameOver) return;

    const newTiles = [...tiles];
    const tileValue = newTiles[index];

    if (tileValue > 1) {
      newTiles[index] = tileValue - 1; // Decrease the value
    } else {
      newTiles[index] = null; // Remove the tile
      setScore(score + 1); // Increase score
    }

    // Check if the grid is full of tiles
    if (newTiles.filter(Boolean).length >= maxTiles) {
      setGameOver(true);
    }

    setTiles(newTiles);
  };

  const handleRestart = () => {
    setTiles(generateTiles());
    setScore(0);
    setGameOver(false);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h1 style={{ color: "#333" }}>Tile Click Game</h1>
      <h2 style={{ color: "#555" }}>Score: {score}</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 100px)`,
          gap: "10px",
          margin: "20px auto",
        }}
      >
        {tiles.map((tile, index) =>
          tile !== null ? (
            <div
              key={index}
              onClick={() => handleTileClick(index)}
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#007bff",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                cursor: "pointer",
                borderRadius: "5px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#007bff")
              }
            >
              {tile}
            </div>
          ) : null
        )}
      </div>

      {gameOver && (
        <div style={{ margin: "20px", color: "red", fontSize: "20px" }}>
          Game Over! Your score: {score}
          <div>
            <button
              onClick={handleRestart}
              style={{
                marginTop: "10px",
                padding: "10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Restart Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickTap;
