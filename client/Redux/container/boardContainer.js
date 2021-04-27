import {connect} from 'react-redux';
import * as actionCreator from '../Actions/boardActions'
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
});

const mapDispatchToProps = dispatch => {
  return {
    updateBoard: (newFen) => dispatch(actionCreator.updateBoard(newFen)),
    increamentCount: () => dispatch(actionCreator.increamentMoveCount()),
    resetCount: () => dispatch(actionCreator.resetCount()),
    changeTurn: (color) =>  dispatch(actionCreator.changeTurn(color)),
    resetBoard: () => dispatch(actionCreator.resetBoard()),
  }
}
const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;