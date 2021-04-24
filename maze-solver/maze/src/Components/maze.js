import React, { useState } from "react";
import "./maze.css";

const BOARD_SIZE = 11;
const rowSize = 10;
const colSize = 10;

const Maze = () => {
  const [board, setBoard] = useState(
    new Array(rowSize).fill(0).map((row) => new Array(colSize).fill(0))
  );

  const initArray = new Array(rowSize)
    .fill(0)
    .map((rand) => new Array(colSize).fill(0));

  const [boardIndeces, setBoardIndeces] = useState(initArray);

  return (
    <>
      <div className="body">
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="test">
            {row.map((cell, cellIdx) => (
              <div
                key={cellIdx}
                className={
                  boardIndeces[rowIdx][cellIdx] === 0
                    ? "inactive_class"
                    : "cell_Clicked"
                }
              ></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Maze;
