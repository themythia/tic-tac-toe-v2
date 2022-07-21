import { useContext, useEffect, useRef, useState } from 'react';
import { GameContext } from '../contexts/GameContext';

const Button = ({ row, column }) => {
  const { gameState, dispatch } = useContext(GameContext);
  const buttonRef = useRef(null);
  const { turn, gameOver, buttons, buttonState } = gameState;
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (
      buttonState[row][column].h ||
      buttonState[row][column].v ||
      buttonState[row][column].d1 ||
      buttonState[row][column].d2
    ) {
      setHighlight(true);
    }
  }, [buttonState, column, row]);

  const handleClick = () => {
    if (turn === 'player' && !gameOver) {
      dispatch({ type: 'PLAYER_NEXT_MOVE', row, column });
      buttonRef.current.disabled = true;
    }
  };

  return (
    <button
      className={`w-[29px] h-[29px] border-b border-r border-black flex justify-center items-center font-bold ${
        buttons[row][column] === 'X' && !highlight
          ? 'text-blue-900'
          : buttons[row][column] === 'O' && !highlight
          ? 'text-red-900'
          : highlight && 'text-white'
      } hover:bg-slate-400 duration-200 active:bg-slate-700 ${
        highlight && buttons[row][column] === 'X'
          ? 'bg-blue-900'
          : highlight && buttons[row][column] === 'O'
          ? 'bg-red-900'
          : 'bg-white'
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
