import React, { useState } from "react";
import Chessboard from "chessboardjsx";
import Chess from "chess.js";
import OpeningInfo from "./OpeningInfo";
import "./Board.css";
import MoveListContainer from "../redux/container/moveListContainer";
import Status from "./Status";

const Board = (props) => {
  const [status, updateStatus] = useState("");
  const [incorrect, incrementIncorrect] = useState(0);

  const updateBoard = (fen, history, turn) => {
    props.updateMove(fen);
    props.addToHistory(history);
    props.updateTurn(turn);
    props.incrementCount();
  };

  const resetBoard = () => {
    props.resetCount();
    props.resetHistory();
    props.resetTurn();
    props.resetBoard();
    updateStatus("");
    incrementIncorrect(0);
  };

  const handleOnDrop = ({ sourceSquare, targetSquare }) => {  
    const game = new Chess(props.fen);
    const turn = game.turn();
    
    let move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    // if move is illegal
    if (move === null || props.moveCount === props.humanMoves.length) return;
    // if move is incorrect or move list ends
    if (move.san !== props.humanMoves[props.moveCount]) {
      updateStatus(`${move.san} is incorrect`);
      incrementIncorrect(incorrect + 1);
      console.log("incorrect:", incorrect);
      return;
    }

    // update compute move
    let computerMove = props.cpuMoves[props.moveCount];
    game.move(computerMove);
    updateBoard(game.fen(), game.history(), turn);
    updateStatus(
      `${props.moveCount + 1} / ${props.humanMoves.length} Correct!`
    );
    if (props.moveCount + 1 === props.humanMoves.length) {
      const diff = props.humanMoves.length - incorrect;
      const score = (diff / props.humanMoves.length) * 100;
      updateStatus(`Your score is ${score}%`);
    }
  };

  return (
    <div className="layout">
      <div className="openingInfo layout-info">
        <OpeningInfo />
      </div>

      <div className="layout-move-list">
        <MoveListContainer />
      </div>

      <div className="board layout-board">
        <Chessboard
          width={632}
          position={props.fen}
          onDrop={handleOnDrop}
          orientation={props.orientation}
          transitionDuration={1000}
        />
      </div>

      <div className="btn">
        <button
          onClick={() => {
            props.onFlipBoard(props.orientation);
          }}
        >
          Flip
        </button>
        <button
          className="btn"
          onClick={() => {
            resetBoard();
          }}
        >
          Reset
        </button>
        <button>Preview</button>
      </div>

      <div className="layout-status">
        <Status currentStatus={status} />
      </div>
    </div>
  );
};

export default Board;
