export const calculateWinner = (squares) => {
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningPattern.length; i++) {
    const [pos1, pos2, pos3] = winningPattern[i];
    if (squares[pos1] && squares[pos1] === squares[pos2] && squares[pos1] === squares[pos3]) {
      return squares[pos1];
    }
  }

  return null;
}