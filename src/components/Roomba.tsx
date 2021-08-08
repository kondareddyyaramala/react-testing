import React, { useState } from "react";
import { Direction, PointerIcon } from "./PointerIcon";
const styles = require("./Roomba.scss");

const Roomba = () => {
  const [direction, setDirection] = useState(Direction.RIGHT);
  const [iconPosition, setIconPosition] = useState([0, 0]);

  const turnRight = () => setDirection((p) => (p + 1) % 4);

  const moveForward = () => {
    let [rowIndex, columnIndex] = iconPosition;
    
    [Direction.RIGHT, Direction.DOWN].includes(direction)
      ? Direction.RIGHT === direction ? columnIndex++ : rowIndex++
      : Direction.LEFT === direction ? columnIndex-- : rowIndex--;

    // check if this is a valid position
    const isValidPosition = [rowIndex, columnIndex].every(
      (v) => v >= 0 && v <= 9
    );

    isValidPosition ? setIconPosition([rowIndex, columnIndex]) : turnRight();
  };

  return (
    <div className="Roomba">
      <div className="Action-buttons">
        <button onClick={turnRight}>Turn Right</button>
        <button onClick={moveForward}>Move Forward</button>
      </div>
      <div className="Grid">
        {Array(10)
          .fill(0)
          .map((_, rowIndex) => (
            <div key={rowIndex} className="Column">
              {Array(10)
                .fill(10)
                .map((_, columnIndex) => (
                  <div key={columnIndex} className="Cell">
                    {rowIndex === iconPosition[1] &&
                      columnIndex === iconPosition[0] && (
                        <PointerIcon direction={direction} />
                      )}
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Roomba;
