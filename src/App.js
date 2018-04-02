import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicks:0,
      clicks1:0,
      show:true,
      players: [
        {
          name: 'Player 1',
          score: 0,
        },
        {
          name: 'Player 2',
          score: 0,
        }
      ],
      server: [],
    };
  }


  IncrementItem = () =>
  {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () =>
  {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  IncrementItem11 = () =>
  {
    this.setState({ clicks1: this.state.clicks1 + 1 });
  }
  DecreaseItem11 = () =>
  {
    this.setState({ clicks1: this.state.clicks1 - 1 });
  }

  Rserve()
  {
    const playerIndex = this.state.server[this.state.server.length - 1] || 0;
    const score = this.state.players[playerIndex].score;
    return score % 2 == 0;
  }

  render()
  {
    let names;
    if (this.Rserve())
    {
      names = ['', this.state.players[1].name,
        this.state.players[0].name, ''];
    } else {
      names = [this.state.players[0].name, '',
        '', this.state.players[1].name];
    }

    const boxStyle = (text) =>
    {
      return { background: text ? 'lightblue' : 'dark' }
    }

    return (
      <div>
      <div>
     <div className="button1">
     <button onClick={this.IncrementItem}> Add a point to player 1</button>
     <button onClick={this.DecreaseItem}>Deduct a point from player 1</button>

     { this.state.show ? <h2>{ this.state.clicks }</h2> : '' } </div>

     <div className="button2">
     <button onClick={this.IncrementItem11}> Add a point to player 2</button>
     <button onClick={this.DecreaseItem11}>Deduct a point from player 2</button>

     { this.state.show ? <h2>{ this.state.clicks1 }</h2> : '' }</div> </div>

        <div className="scorecard">
          <div className="score">{this.state.players[0].score}</div>
          <div>
            <div className="courtside">
              <div className="box" style={boxStyle(names[0])}>{names[0]}</div>
              <div className="box" style={boxStyle(names[1])}>{names[1]}</div>
            </div>
            <div className="courtside">
              <div className="box" style={boxStyle(names[2])}>{names[2]}</div>
              <div className="box" style={boxStyle(names[3])}>{names[3]}</div>
            </div>
          </div>
          <div className="score">{this.state.players[1].score}</div>
        </div>
      </div>
    );
  }
}

export default App;
