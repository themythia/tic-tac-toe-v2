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
                h: true,
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
            index === action.col ? { ...obj, v: true } : obj
          ),
          [action.second]: state.buttonState[action.second].map((obj, index) =>
            index === action.col ? { ...obj, v: true } : obj
          ),
          [action.third]: state.buttonState[action.third].map((obj, index) =>
            index === action.col ? { ...obj, v: true } : obj
          ),
        },
      };
    case 'SET_DIAGONAL_BUTTON_STATE':
      // handles the state change when 3 buttons are diagonal
      return {
        ...state,
        buttonState: {
          ...state.buttonState,
          [action.first.row]: state.buttonState[action.first.row].map(
            (obj, index) =>
              index === action.first.col
                ? { ...obj, [action.diagonal]: true }
                : obj
          ),
          [action.second.row]: state.buttonState[action.second.row].map(
            (obj, index) =>
              index === action.second.col
                ? { ...obj, [action.diagonal]: true }
                : obj
          ),
          [action.third.row]: state.buttonState[action.third.row].map(
            (obj, index) =>
              index === action.third.col
                ? { ...obj, [action.diagonal]: true }
                : obj
          ),
        },
      };
    default:
      return state;
  }
};
export default gameReducer;
