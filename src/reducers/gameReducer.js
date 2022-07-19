const gameReducer = (state, action) => {
  switch (action.type) {
    case 'PLAYER_NEXT_MOVE':
      console.log('action:', action);
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
    default:
      return state;
  }
};
export default gameReducer;
