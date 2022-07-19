import { createContext, useCallback, useEffect, useState } from 'react';

export const GameContext = createContext();

const GameWrapper = ({ children }) => {
  const [game, setGame] = useState({});

  const createState = useCallback(() => {
    let gameState = {};
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
      gameState[`row${i}`] = rowArr;
    }
    return gameState;
  }, []);

  useEffect(() => {
    setGame(createState());
  }, [createState]);

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameWrapper;
