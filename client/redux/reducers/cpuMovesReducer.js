import * as actionType from '../actions/actionTypes';
import { updateCpuMove } from '../actions/updateBoardAction';

const cpuMovesReducer = {
  updateCpuMove: (state = [], action) => {
    switch(action.type) {
      case actionType.moveCPU :
        return state;
      default:
        return state;
    }
  }
}

export default cpuMovesReducer