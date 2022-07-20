const createInitialState = () => {
  let gameState = {
    buttons: {},
    highlighted: {},
    turn: 'player',
    gameOver: false,
    buttonState: {},
    lastMove: { row: null, col: null },
  };
  const columns = 11;
  const rows = 20;
  // creates initialState object
  for (let i = 1; i <= rows; i++) {
    const rowArr = [];
    const rowButtonState = [];
    for (let j = 0; j < columns; j++) {
      rowArr.push(null);
      rowButtonState.push({ h: false, v: false, d1: false, d2: false });
    }
    gameState.buttons[i] = rowArr;
    gameState.highlighted[i] = rowArr;
    gameState.buttonState[i] = rowButtonState;
  }
  return gameState;
};
export default createInitialState;
