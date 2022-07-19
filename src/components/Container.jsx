import { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';

const Container = ({ children }) => {
  const { gameState, dispatch } = useContext(GameContext);

  useEffect(() => {
    console.log(
      '---------------------turn---------------------',
      gameState.turn
    );
    if (gameState.turn === 'cpu') {
      dispatch({ type: 'CPU_NEXT_MOVE' });
    }
  }, [dispatch, gameState.turn]);

  return (
    <div className='flex flex-row flex-wrap min-w-80 w-80 border-t border-l border-black'>
      {children}
    </div>
  );
};
export default Container;
