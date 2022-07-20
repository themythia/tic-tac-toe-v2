import { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import Button from './Button';
import Restart from './Restart';

const Buttons = () => {
  const { gameState, dispatch } = useContext(GameContext);
  const { buttons, buttonState, turn, lastMove } = gameState;

  useEffect(() => {
    const { row, col } = lastMove;
    // initial values of row and col is null
    // check if a turn is played and row and col have a value
    if (row !== null && col !== null) {
      // horizontal check
      // ---------------------------

      // * if last played column is first of the three buttons *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      if (
        col <= 8 &&
        buttons[row][col] === buttons[row][col + 1] &&
        buttons[row][col] === buttons[row][col + 2] &&
        buttons[row][col] &&
        !buttonState[row][col].v &&
        !buttonState[row][col + 1].v &&
        !buttonState[row][col + 2].v
      ) {
        console.log('1');
        dispatch({
          type: 'SET_SAME_ROW_BUTTON_STATE',
          row,
          first: col,
          second: col + 1,
          third: col + 2,
        });
      }
      // * if last played column is in middle of the three buttons *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        col >= 1 &&
        col <= 9 &&
        buttons[row][col] === buttons[row][col + 1] &&
        buttons[row][col] === buttons[row][col - 1] &&
        buttons[row][col] &&
        !buttonState[row][col].v &&
        !buttonState[row][col + 1].v &&
        !buttonState[row][col - 1].v
      ) {
        console.log('2');

        dispatch({
          type: 'SET_SAME_ROW_BUTTON_STATE',
          row,
          first: col,
          second: col + 1,
          third: col - 1,
        });
      }

      // * if last played column is last of the three buttons *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        col >= 2 &&
        buttons[row][col] === buttons[row][col - 1] &&
        buttons[row][col] === buttons[row][col - 2] &&
        buttons[row][col] &&
        !buttonState[row][col].v &&
        !buttonState[row][col - 1].v &&
        !buttonState[row][col - 2].v
      ) {
        console.log('3');

        dispatch({
          type: 'SET_SAME_ROW_BUTTON_STATE',
          row,
          first: col,
          second: col - 1,
          third: col - 2,
        });
      }

      // vertical check
      // ----------------

      // * if last played column is top of the three buttons *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        row <= 18 &&
        buttons[row][col] === buttons[row + 1][col] &&
        buttons[row][col] === buttons[row + 2][col] &&
        buttons[row][col] &&
        !buttonState[row][col].h &&
        !buttonState[row + 1][col].h &&
        !buttonState[row + 2][col].h
      ) {
        console.log('4');

        dispatch({
          type: 'SET_SAME_COL_BUTTON_STATE',
          col,
          first: row,
          second: row + 1,
          third: row + 2,
        });
      }

      // * if last played column is in middle of the three buttons *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        row >= 2 &&
        row <= 19 &&
        buttons[row][col] === buttons[row + 1][col] &&
        buttons[row][col] === buttons?.[row - 1]?.[col] &&
        buttons[row][col] &&
        !buttonState[row][col].h &&
        !buttonState[row + 1][col].h &&
        !buttonState?.[row - 1]?.[col]?.h
      ) {
        console.log('9999');
        dispatch({
          type: 'SET_SAME_COL_BUTTON_STATE',
          col,
          first: row,
          second: row + 1,
          third: row - 1,
        });
      }

      // * if last played column is bottom of the three buttons *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        row >= 3 &&
        buttons[row][col] === buttons[row - 1][col] &&
        buttons[row][col] === buttons[row - 2][col] &&
        buttons[row][col] &&
        !buttonState[row][col].h &&
        !buttonState[row - 1][col].h &&
        !buttonState[row - 2][col].h
      ) {
        console.log('9999');
        dispatch({
          type: 'SET_SAME_COL_BUTTON_STATE',
          col,
          first: row,
          second: row - 1,
          third: row - 2,
        });
      }

      // capraz 1 kontrol
      // capraz 2 kontrol
    }
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
