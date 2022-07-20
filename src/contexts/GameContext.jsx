import { createContext, useMemo, useReducer } from 'react';
import gameReducer from '../reducers/gameReducer';
import createInitialState from '../utils/createInitialState';

export const GameContext = createContext();

const GameWrapper = ({ children }) => {
  // memoize initialState to prevent running createInitialState() multiple times
  const initialState = useMemo(() => createInitialState(), []);
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ gameState, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameWrapper;
