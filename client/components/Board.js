import React from 'react';
import Chessground from "react-chessground";
import "react-chessground/dist/styles/chessground.css";
import Chess from "chess.js";
import { changeTurn } from '../Redux/Actions/boardActions';
const Board = (props) => {
  console.log('PROPS', props.fen);
  
  const handleMove = () => {
    return false;
  }

  const handleOnMove = (fromMove, toMove) => {
    const game = new Chess(props.fen);
    let move = game.move({
      from: fromMove,
      to: toMove,
      promotion: 'q'
    });
    if (move === null) {
      props.updateBoard(props.fen);
      return;
    };
    console.log(move);
    props.updateBoard(game.fen());
  }
  return (
    <Chessground
    onMove={handleOnMove}
    fen={props.fen}
    turnColor={changeTurn}
    />
  )
}

export default Board;