import Board from './components/Board.js'

const App = () => {
  return (
    <div className = 'game'>
      <div>
        <Board />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))