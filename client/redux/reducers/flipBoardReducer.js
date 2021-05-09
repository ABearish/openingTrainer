import * as actionType from '../actions/actionTypes';

const flipBoardReducer = {
  flipBoard: (state = '', action) => {
    switch(action.type) {
      case actionType.flipBoard:
        return action.results;
      default: 
      return state;
    }
  }
}
export default flipBoardReducer;