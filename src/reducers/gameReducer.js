import findRandomEmptyButton from '../utils/handleCPUTurn';

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'PLAYER_NEXT_MOVE':
      // handles the state change when player moves
      // changes turn to cpu
      // changes text of clicked button to X
      return {
        ...state,
        turn: 'cpu',
        buttons: {
          ...state.buttons,
          [action.row]: state.buttons[action.row].map((button, index) =>
            action.column === index ? 'X' : button
          ),
        },
      };
    case 'CPU_NEXT_MOVE':
      // handles the state change when cpu moves
      const { row, col, gameOver } = findRandomEmptyButton(state.buttons);

      return {
        ...state,
        turn: 'player',
        gameOver,
        buttons: {
          ...state.buttons,
          [row]: state.buttons[row].map((button, index) =>
            col === index ? 'O' : button
          ),
        },
      };
    default:
      return state;
  }
};
export default gameReducer;
