import { createContext, useReducer } from 'react';
import gameReducer from '../reducers/gameReducer';
import createInitialState from '../utils/createInitialState';

export const GameContext = createContext();

const GameWrapper = ({ children }) => {
  const [gameState, dispatch] = useReducer(gameReducer, createInitialState());

  return (
    <GameContext.Provider value={{ gameState, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameWrapper;
