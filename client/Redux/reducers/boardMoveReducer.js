import * as actionType from '../Actions/actionTypes';

const boardMoveReducer = {
  updateFen: (state = "", action) => {
    switch(action.type) {
      case actionType.updateBoard:
        return action.results;
      case actionType.resetBoard:
        return action.results;
      default:
        return state;
    }
  }
}

export default boardMoveReducer;