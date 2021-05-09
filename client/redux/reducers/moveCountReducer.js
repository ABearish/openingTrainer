import * as actionType from '../actions/actionTypes';

const moveCountReducer = {
  incrementCount: (state = 0, action) => {
    switch(action.type) {
      case actionType.incrementMove:
        return state + 1;
      case actionType.resetCount:
        return 0
      default: 
      return state;
    }
  },
}
export default moveCountReducer;