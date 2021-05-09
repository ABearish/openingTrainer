import * as actionType from '../actions/actionTypes';

const historyReducer = {
  updateMoveList: (state = [], action) => {
    switch(action.type) {
      case actionType.updateHistory:
        return [...state].concat(action.results);
      case actionType.resetMoveList:
        return []
      default: 
      return state;
    }
  },
}
export default historyReducer;