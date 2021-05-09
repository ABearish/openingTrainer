import React from "react";
import "./Movelist.css";
import { useState } from "react";

const MoveList = ({ history }) => {
  const printHistory = (history) => {
    let moveList = [];
    for (let i = 0; i < history.length; i += 2) {
      moveList.push([history[i], history[i + 1] || ""]);
    }
    return moveList.map((move, i) => {
      return (
        <div key={i}>
          <span>
            <span className="move-list-number">{i + 1}.&emsp;</span>{" "}
            <span className="move-list-white">{move[0]}</span>
          </span>{" "}
          <span className="move-list-black">{move[1]} </span>
        </div>
      );
    });
  };
  return (
    <div className="move-list">
      <h3 className="move-list-title">Move List</h3>
      {printHistory(history)}
    </div>
  );
};

export default MoveList;
