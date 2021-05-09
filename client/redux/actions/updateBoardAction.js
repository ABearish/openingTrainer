import * as actionType from './actionTypes';

// Board Behavior
export const addMoveToHistory = (move) => {
  return {
    type: actionType.updateHistory,
    results: move
  }
}

export const flipAction = (orientation) => {
  let newOrientation = orientation === 'white' ? 'black' : 'white';
  return {
    type: actionType.flipBoard,
    results: newOrientation
  }
 };

 export const setNewPosition = (move) => {
  return {
    type: actionType.addFen,
    results: move
  }
 }

 export const updateTurn = (color) => {
  let newTurn = color === 'w' ? 'b' : 'w';
  return {
    type: actionType.updateTurn,
    results: newTurn
  }
}

// Move counts
export const incrementMoveCount = () => {
  return {
    type: actionType.incrementMove
  }
}

export const resetCount = () => {
  return {
    type: actionType.resetCount,
    results: 0
  }
}

// turns
 export const resetTurn = () => {
  return {
    type: actionType.resetTurn,
    results: 'w'
  }
}

// history
export const updateMoveList = (history) => {
  return {
    type: actionType.updateMoveList,
    results: history
  }
};
 
export const resetMoveList = () => {
  return {
    type: actionType.resetMoveList,
    results: []
  }
}

export const checkColor = (color) => {
  return {
    type: actionType.checkColor,
    results: color
  }
}

export const setHumanMoves = () => {
  return {
    type: actionType.setHumanMoves
  }
}

export const resetPosition = () => {
  return {
    type: actionType.resetBoard,
    results: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  }
}