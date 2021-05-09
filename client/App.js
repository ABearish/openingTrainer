import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UpdateBoardContainer from "./redux/container/updateBoardContainer";
import Home from "./components/Home";
import NavBar from './components/NavBar';
const App = () => {
  return (
    <BrowserRouter> 
    <NavBar />          
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={UpdateBoardContainer} path="/board" />
        </Switch>      
    </BrowserRouter>
  );
};

export default App;

/*  handleCpuMoves() {
    const oldFen = this.game.fen();
    if (this.state.human !== this.game.turn()) {
      console.log(this.game.move(this.state.previewMoves[this.state.currentCpuMoves]))
      this.game.move(this.state.previewMoves[this.state.currentCpuMoves++])
      this.setState(() => ({
        fen: this.game.fen(),
        history: this.game.history()
      }))
    }
  }

  onDrop({sourceSquare, targetSquare}) {

    let move = this.game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q'
    });
    if (move === null) return;
    this.setState(() => ({
      fen: this.game.fen(),
      history: this.game.history()
    }));    
  } */
