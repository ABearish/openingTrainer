import * as actionType from '../actions/actionTypes';

const piecePositionReducer = {
  updateFen: (state = '', action) => {    
    switch(action.type) {
      case actionType.addFen:
        return action.results;
      case actionType.resetBoard:
        return action.results 
      default:
        return state;
    }
  },  
  setHumanMoves: (state = [], action) => {
    switch(action.type) {
      case actionType.setHumanMoves:
        return action.results
      default:
        return state
    }
  }
}
export default piecePositionReducer;