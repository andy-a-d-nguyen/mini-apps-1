import Square from './Square.js';
import {calculateWinner} from './helperFunctions.js';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }

    this.clearBoard = this.clearBoard.bind(this);
  }

  handleClick(i) {
    // make a copy of this.state.squares because we don't want to affect it directly
    const squares = this.state.squares.slice();
    // ignore click if there's a winner or a square is already filled or board is full
    const isFull = squares.every(square => square !== null);
    if (isFull) {
      alert('full');
      return;
    }
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // assign 'x' or 'o' to the squares that is clicked
    squares[i] = this.state.xIsNext ? 'x' : 'o';
    // update this.state.squares with copy of this.state.squares
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  renderSquare(i) {
    return (
      <Square
        value = {this.state.squares[i]}
        onClick = {() => this.handleClick(i)}
      />
    )
  }

  clearBoard(event) {
    this.setState({
      squares: Array(9).fill(null)
    })
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next Player: ${this.state.xIsNext? 'x' : 'o'}`
    }

    return (
      <div>
        <div className = 'status'>{status}</div>
        <div className = 'row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className = 'row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className = 'row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button onClick = {this.clearBoard}>Clear Board</button>
      </div>
    )
  }
}

export default Board