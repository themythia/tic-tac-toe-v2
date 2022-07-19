import { useContext, useRef } from 'react';
import { GameContext } from '../contexts/GameContext';

const Button = ({ row, column }) => {
  const { gameState, dispatch } = useContext(GameContext);
  const buttonRef = useRef(null);
  const { turn, gameOver, buttons } = gameState;

  const handleClick = () => {
    if (turn === 'player' && !gameOver) {
      dispatch({ type: 'PLAYER_NEXT_MOVE', row, column });
      buttonRef.current.disabled = true;
    }
  };

  return (
    <button
      className={`w-[29px] h-[29px] border-b border-r border-black flex justify-center items-center font-bold ${
        buttons[row][column] === 'X' ? 'text-blue-900' : 'text-red-900'
      }`}
      onClick={handleClick}
      disabled={buttons[row][column]}
      ref={buttonRef}
    >
      {buttons[row][column]}
    </button>
  );
};
export default Button;
