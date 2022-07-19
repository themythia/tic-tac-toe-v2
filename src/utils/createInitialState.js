const createInitialState = () => {
  let gameState = {
    buttons: {},
    turn: 'player',
    gameOver: false,
  };
  const columns = 11;
  const rows = 20;
  // creates initialState object
  // Object(initialState).keys = rows
  // initialState.row1.length = columns
  for (let i = 1; i <= rows; i++) {
    const rowArr = [];
    for (let j = 0; j < columns; j++) {
      rowArr.push(null);
    }
    gameState.buttons[i] = rowArr;
  }
  return gameState;
};
export default createInitialState;
