import * as actionType from './actionTypes';

export const addMoveToHistory = (move) => {
  return {
    type: actionType.updateHistory,
    results: move
  }
};
