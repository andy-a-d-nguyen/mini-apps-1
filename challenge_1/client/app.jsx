import Board from './components/Board.js'

const App = () => {
  return (
    <div className = 'game'>
      <div className = 'board'>
        <Board />
      </div>
      <div className = 'info'>
        <div></div>
        <ol></ol>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))