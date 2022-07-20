import { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import Button from './Button';
import Restart from './Restart';

const Buttons = () => {
  const { gameState, dispatch } = useContext(GameContext);
  const { buttons, buttonState, turn, lastMove } = gameState;

  useEffect(() => {
    const { row, col } = lastMove;
    // horizontal check
    // if last played column is 0
    if (col === 0) {
      // check if values of three buttons
      // are the same and truthy
      // default button state is null (falsy)
      if (
        buttons[row][col] === buttons[row][col + 1] &&
        buttons[row][col + 2] &&
        buttons[row][col]
      ) {
        // check if state of these buttons are falsy
        // state of buttons that not scored a point yet are null
        if (
          !buttonState[row][col].v &&
          !buttonState[row][col + 1].v &&
          !buttonState[row][col + 2].v
        ) {
          dispatch({
            type: 'SET_SAME_ROW_BUTTON_STATE',
            row,
            col,
          });
        }
      }
    }

    // dikey kontrol
    // capraz 1 kontrol
    // capraz 2 kontrol
  }, [buttonState, buttons, dispatch, lastMove, turn]);

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
