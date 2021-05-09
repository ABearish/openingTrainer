import * as actionType from '../actions/actionTypes';

const checkColorReducer = {
  checkColor: (state = '', action) => {
    switch(action.type) {
      case actionType.checkColor:
        return action.results;
      default: 
      return state;
    }
  }
}
export default checkColorReducer;