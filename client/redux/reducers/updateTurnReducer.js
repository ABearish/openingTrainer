import * as actionType from '../actions/actionTypes';

const changeTurnReducer = {
  updateTurn: (state = '', action) => {
    switch(action.type) {
      case actionType.updateTurn:
        return action.results;
      default: 
      return state;
    }
  },
  resetTurn: (state = '', action) => {
    switch(action.type) {
      case actionType.resetTurn:
        return results;
      default: 
        return state;
    }
  }
}
export default changeTurnReducer;