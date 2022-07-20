import createInitialState from '../utils/createInitialState';
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
        lastMove: { row: action.row, col: action.column },
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
        lastMove: { row, col },
      };
    case 'RESTART':
      return createInitialState();
    case 'SET_SAME_ROW_BUTTON_STATE':
      // handles the state change when 3 buttons on the same row
      // are the same type
      return {
        ...state,
        buttonState: {
          ...state.buttonState,
          [action.row]: state.buttonState[action.row].map((obj, index) => {
            if (
              index === action.first ||
              index === action.second ||
              index === action.third
            ) {
              return {
                ...obj,
                v: true,
              };
            } else return obj;
          }),
        },
      };
    case 'SET_SAME_COL_BUTTON_STATE':
      // handles the state change when 3 buttons on the same column
      // are the same type
      return {
        ...state,
        buttonState: {
          ...state.buttonState,
          [action.first]: state.buttonState[action.first].map((obj, index) =>
            index === action.col ? { ...obj, h: true } : obj
          ),
          [action.second]: state.buttonState[action.second].map((obj, index) =>
            index === action.col ? { ...obj, h: true } : obj
          ),
          [action.third]: state.buttonState[action.second].map((obj, index) =>
            index === action.col ? { ...obj, h: true } : obj
          ),
        },
      };

    default:
      return state;
  }
};
export default gameReducer;
