import {connect} from 'react-redux';
import * as actionCreator from '../actions/updateBoardAction';
import Board from '../../components/Board';

const mapStateToProps = (store) => ({
  orientation: store.orientation,
  fen: store.fen,
  history: store.history,
  player: store.humanPlayer,
  turn: store.turn,
  moveCount: store.moveCount,
  cpuMoves: store.cpuMoves,
  humanMoves: store.humanMoves
})

const mapDispatchToProps = (dispatch) => {
  return {
    onFlipBoard: (boardOrientation) => dispatch(actionCreator.flipAction(boardOrientation)),
    updateMove: (newFen) => dispatch(actionCreator.setNewPosition(newFen)),
    addToHistory: (move) => dispatch(actionCreator.addMoveToHistory(move)),
    updateTurn: (color) => dispatch(actionCreator.updateTurn(color)),
    incrementCount: () => dispatch(actionCreator.incrementMoveCount()),
    resetCount: () => dispatch(actionCreator.resetCount()),
    resetBoard: () => dispatch(actionCreator.resetPosition()),
    resetTurn: () => dispatch(actionCreator.resetTurn()),
    resetHistory: () => dispatch(actionCreator.resetMoveList())
  }
}

const updateBoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default updateBoardContainer;