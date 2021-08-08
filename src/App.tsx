import React, { useEffect, useState } from "react";

const styles = require("./App.scss");

type Direction = "up" | "down" | "left" | "right";
const directions: Array<Direction> = ["right", "down", "left", "up"];

function App() {
  const [directionIndex, setDirectionIndex] = useState(0);
  const [roobmaPosition, setRoombaPosition] = useState([0, 0]);

  const onTurnRight = () => {
    console.log("New INdex",  directionIndex + 1 % 4);
    setDirectionIndex(v => (directionIndex + 1 % 4));
  };

  const onMoveForward = () => {
    let [rowIndex, columnIndex] = roobmaPosition;

    console.log("Direction ", directions[directionIndex]);
    if (directions[directionIndex] === "right") {
      columnIndex++;
    } else if (directions[directionIndex] === "down") {
      rowIndex++;
    } else if (directions[directionIndex] === "up") {
      rowIndex--;
    } else {
      columnIndex--;
    }

    // check if the new indexes are valid
    const isPositionValid = [rowIndex, columnIndex].every(
      (v) => v >= 0 && v <= 9
    );

    // if position is valid, them update the state
    if (isPositionValid) {
      console.log("Position" , [rowIndex, columnIndex]);
      setRoombaPosition([rowIndex, columnIndex]);
    } else {
      setDirectionIndex((v) => {
        console.log("New INdex",  directionIndex + 1 % 4);
        return (directionIndex + 1 % 4);
      });
    }
  };

  const getRoomba =  () => {
    const direction = directions[directionIndex];
    if(direction === 'left') {
      return <>&#9756;</>
    } else if(direction === 'right'){
      return <>&#9758;</>
    } else if(direction === 'up'){
      return <>&#9757;</>
    } else {
      return <>&#9759;</>
    }
  }

  return (
    <div className="App">
      <div className="Buttons">
        <button onClick={onTurnRight}>Turn Right</button>
        <button onClick={onMoveForward}>Move forward</button>
      </div>
      <div className="Grid">
        {Array(10)
          .fill(0)
          .map((_v, columnIndex) => (
            <div key={columnIndex} className="Column">
              {Array(10)
                .fill(0)
                .map((_v, rowIndex) => (
                  <div key={rowIndex} className="Cell">
                    {rowIndex === roobmaPosition[0] && columnIndex === roobmaPosition[1] ? 
                    getRoomba() : ''}
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
export default App;
