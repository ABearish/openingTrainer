import * as actionTypes from "./actionTypes";
// Resets Board
export const resetBoard = () => {
  return {
    type: actionTypes.resetBoard,
    results: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  };
};
// Updates board with current move
export const updateBoard = (move) => {
  return {
    type: actionTypes.updateBoard,
    results: move,
  };
};

export const changeTurn = (color) => {
  let newTurn = color === "w" ? "b" : "w";
  return {
    type: actionTypes.updateTurn,
    results: newTurn,
  };
};

export const resetTurn = () => {
  return {
    type: actionTypes.resetTurn,
    results: "w",
  };
};

export const increamentMoveCount = () => {
  return {
    type: actionTypes.increamentMoveCount,
  };
};

export const resetCount = () => {
  return {
    type: actionTypes.resetCount,
    results: 0,
  };
};
