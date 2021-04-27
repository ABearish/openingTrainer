import {combineReducers} from 'redux';
import boardMoveReducer from './boardMoveReducer';
const rootReducer = combineReducers({
  fen: boardMoveReducer.updateFen
});

export default rootReducer;