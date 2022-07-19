import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Button = ({ row, column }) => {
  const { gameState, dispatch } = useContext(GameContext);

  const { turn, gameOver, buttons } = gameState;

  const handleClick = () => {
    if (turn === 'player' && !gameOver) {
      dispatch({ type: 'PLAYER_NEXT_MOVE', row, column });
    }
  };

  return (
    <button
      className={`w-[29px] h-[29px] border-b border-r border-black flex justify-center items-center font-bold ${
        buttons[row][column] === 'X' ? 'text-blue-900' : 'text-red-900'
      }`}
      onClick={handleClick}
    >
      {buttons[row][column]}
    </button>
  );
};
export default Button;
