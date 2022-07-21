import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Restart = () => {
  const { dispatch } = useContext(GameContext);

  return (
    <div className='w-[318px] h-[579px] bg-black/30 backdrop-blur relative bottom-[580px] z-10 flex items-center justify-center'>
      <button
        className='bg-teal-700 text-white tracking-wider font-bold rounded-full py-3 px-2 flex justify-center items-center shadow-sm hover:border-white hover:border hover:shadow-2xl'
        onClick={() => dispatch({ type: 'RESTART' })}
      >
        RESTART
      </button>
    </div>
  );
};
export default Restart;
