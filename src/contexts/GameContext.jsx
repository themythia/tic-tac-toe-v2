import { createContext, useEffect, useReducer } from 'react';
import gameReducer from '../reducers/gameReducer';

export const GameContext = createContext();

const GameWrapper = ({ children }) => {
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

  const [gameState, dispatch] = useReducer(gameReducer, createInitialState());

  console.log('***GAME STATE***', gameState);

  return (
    <GameContext.Provider value={{ gameState, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameWrapper;
