import { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';

const Container = ({ children }) => {
  const { gameState, dispatch } = useContext(GameContext);

  useEffect(() => {
    if (gameState.turn === 'cpu') {
      dispatch({ type: 'CPU_NEXT_MOVE' });
    }
  }, [dispatch, gameState.turn]);

  return (
    <div className='w-screen min-h-screen h-full flex justify-center items-center'>
      <div className='flex flex-row flex-wrap min-w-80 w-80 h-[581px] border-t border-l border-black overflow-hidden'>
        {children}
      </div>
    </div>
  );
};
export default Container;
