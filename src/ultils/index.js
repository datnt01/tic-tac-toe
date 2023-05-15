export function calculateWinner(cells) {
  const winLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winLine.length; i++) {
    const [fist,second,third] = winLine[i];
    if (cells[fist] && cells[fist] === cells[second] && cells[second] === cells[third]) {
        return cells[fist];
      }
  }
}
