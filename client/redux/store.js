import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initalState = {
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      // dropSquareStyle: {},
      // squareStyles: {},
      // pieceSquare: "",
      history: [],
      humanPlayer: 'w', 
      turn: 'w',
      moveCount: 0,
      orientation: 'white',
      humanMoves: ['c4', 'Nc3', 'Nf3', 'g3', 'cxd5', 'Bg2', 'O-O', 'd3', 'a3', 'b4'],
      cpuMoves: ['e5', 'Nf6', 'Nc6', 'd5', 'Nxd5', 'Nb6', 'Be7', 'O-O', 'Be6', 'a5'],
      // showPreview : false
};

const store = createStore(
      rootReducer, 
      initalState, 
      composeEnhancers(applyMiddleware(thunk)))

export default store;