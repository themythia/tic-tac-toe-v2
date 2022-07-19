import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import Button from './Button';
import Restart from './Restart';

const Buttons = () => {
  const { gameState } = useContext(GameContext);

  return (
    <>
      {[...Array(220)].map((_, index) => (
        <Button
          key={index}
          column={index % 11}
          row={Math.floor(index / 11) + 1}
        />
      ))}
      {gameState.gameOver && <Restart />}
    </>
  );
};
export default Buttons;
