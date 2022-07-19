import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Restart = () => {
  const { dispatch } = useContext(GameContext);

  return (
    <button
      className='relative left-[126px] bottom-[315px] z-10 bg-orange-400 rounded-full py-3 px-2 flex justify-center items-center'
      onClick={() => dispatch({ type: 'RESTART' })}
    >
      RESTART
    </button>
  );
};
export default Restart;
