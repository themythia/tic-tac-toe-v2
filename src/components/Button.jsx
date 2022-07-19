import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Button = ({ row, column }) => {
  const { gameState } = useContext(GameContext);

  return (
    <button className='w-[29px] h-[29px] border-b border-r border-black flex justify-center items-center'>
      {row}
    </button>
  );
};
export default Button;
