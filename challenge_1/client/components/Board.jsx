import Square from './Square.js'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    // make a copy of this.state.squares because we don't want to affect it directly
    const squares = this.state.squares.slice()
    // assign 'X' to the squares that is clicked
    squares[i] = 'X';
    // update this.state.squares with copy of this.state.squares
    this.setState({squares: squares})
  }

  renderSquare(i) {
    return (
      <Square
        value = {this.state.squares[i]}
        onClick = {() => this.handleClick(i)}
      />
    )
  }

  render() {
    const status = 'Next Player: X'

    return (
      <div>
        <div className = 'status'>{status}</div>
        <div className = 'row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className = 'row'>
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className = 'row'>
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    )
  }
}

export default Board