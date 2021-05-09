import { combineReducers } from 'redux';
import flipBoardReducer from './flipBoardReducer';
import piecePositionReducer from './piecePositionReducer';
import historyReducer from './historyReducer';
import checkColorReducer from './checkColorReducer';
import updatedTurnReducer from './updateTurnReducer';
import moveCountReducer from './moveCountReducer';
import cpuMovesReducer from './cpuMovesReducer'

const rootReducer = combineReducers({
  orientation: flipBoardReducer.flipBoard,
  history: historyReducer.updateMoveList,
  fen: piecePositionReducer.updateFen,
  humanPlayer: checkColorReducer.checkColor,
  turn: updatedTurnReducer.updateTurn,
  moveCount: moveCountReducer.incrementCount,
  cpuMoves: cpuMovesReducer.updateCpuMove,
  humanMoves: piecePositionReducer.setHumanMoves
});

export default rootReducer;