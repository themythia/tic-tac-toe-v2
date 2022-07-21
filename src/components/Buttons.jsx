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
      console.log('row:', row);
      console.log('col:', col);
      // horizontal check
      // ---------------------------

      // * if last played column is first of the three buttons *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      if (
        col >= 0 &&
        col <= 8 &&
        row >= 1 &&
        row <= 20 &&
        buttons[row][col] === buttons[row][col + 1] &&
        buttons[row][col] === buttons[row][col + 2] &&
        buttons[row][col] &&
        !buttonState[row][col].v &&
        !buttonState[row][col + 1].v &&
        !buttonState[row][col + 2].v
      ) {
        console.group('horizontal - first button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();
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
        row >= 1 &&
        row <= 20 &&
        buttons[row][col] === buttons[row][col + 1] &&
        buttons[row][col] === buttons[row][col - 1] &&
        buttons[row][col] &&
        !buttonState[row][col].v &&
        !buttonState[row][col + 1].v &&
        !buttonState[row][col - 1].v
      ) {
        console.group('horizontal - middle button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();

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
        col <= 10 &&
        row >= 1 &&
        row <= 20 &&
        buttons[row][col] === buttons[row][col - 1] &&
        buttons[row][col] === buttons[row][col - 2] &&
        buttons[row][col] &&
        !buttonState[row][col].v &&
        !buttonState[row][col - 1].v &&
        !buttonState[row][col - 2].v
      ) {
        console.group('horizontal - last button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();

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
        row >= 1 &&
        row <= 18 &&
        col >= 0 &&
        col <= 10 &&
        buttons[row][col] === buttons[row + 1][col] &&
        buttons[row][col] === buttons[row + 2][col] &&
        buttons[row][col] &&
        !buttonState[row][col].h &&
        !buttonState[row + 1][col].h &&
        !buttonState[row + 2][col].h
      ) {
        console.group('vertical - top button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();

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
        col >= 0 &&
        col <= 10 &&
        buttons[row][col] === buttons[row + 1][col] &&
        buttons[row][col] === buttons?.[row - 1]?.[col] &&
        buttons[row][col] &&
        !buttonState[row][col].h &&
        !buttonState[row + 1][col].h &&
        !buttonState?.[row - 1]?.[col]?.h
      ) {
        console.group('vertical - mid button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();
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
        row <= 20 &&
        col >= 0 &&
        col <= 10 &&
        buttons[row][col] === buttons[row - 1][col] &&
        buttons[row][col] === buttons[row - 2][col] &&
        buttons[row][col] &&
        !buttonState[row][col].h &&
        !buttonState[row - 1][col].h &&
        !buttonState[row - 2][col].h
      ) {
        console.group('vertical - bottom button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();
        dispatch({
          type: 'SET_SAME_COL_BUTTON_STATE',
          col,
          first: row,
          second: row - 1,
          third: row - 2,
        });
      }

      // diagonal (from top left to bottom right) check

      // * if last played button is top left *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        col >= 0 &&
        col <= 8 &&
        row <= 18 &&
        row >= 0 &&
        buttons[row][col] === buttons[row + 1][col + 1] &&
        buttons[row][col] === buttons[row + 2][col + 2] &&
        buttons[row][col] &&
        !buttonState[row][col].d1 &&
        !buttonState[row + 1][col + 1].d1 &&
        !buttonState[row + 2][col + 2].d1
      ) {
        console.group('d1 - top left button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();

        dispatch({
          type: 'SET_DIAGONAL_BUTTON_STATE',
          first: { row, col },
          second: { row: row + 1, col: col + 1 },
          third: { row: row + 2, col: col + 2 },
          diagonal: 'd1',
        });
      }

      // * if last played button is middle *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        col >= 1 &&
        col <= 9 &&
        row >= 2 &&
        row <= 19 &&
        buttons[row][col] === buttons[row - 1][col - 1] &&
        buttons[row][col] === buttons[row + 1][col + 1] &&
        buttons[row][col] &&
        !buttonState[row][col].d1 &&
        !buttonState[row - 1][col - 1].d1 &&
        !buttonState[row + 1][col + 1].d1
      ) {
        console.group('d1 - middle button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();

        dispatch({
          type: 'SET_DIAGONAL_BUTTON_STATE',
          first: { row, col },
          second: { row: row - 1, col: col - 1 },
          third: { row: row + 1, col: col + 1 },
          diagonal: 'd1',
        });
      }

      // * if last played button is bottom right *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        col >= 2 &&
        col <= 10 &&
        row >= 3 &&
        row <= 20 &&
        buttons[row][col] === buttons[row - 1][col - 1] &&
        buttons[row][col] === buttons[row - 2][col - 2] &&
        buttons[row][col] &&
        !buttonState[row][col].d1 &&
        !buttonState[row - 1][col - 1].d1 &&
        !buttonState[row - 2][col - 2].d1
      ) {
        console.group('d1 - bottom right button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();

        dispatch({
          type: 'SET_DIAGONAL_BUTTON_STATE',
          first: { row, col },
          second: { row: row - 1, col: col - 1 },
          third: { row: row - 2, col: col - 2 },
          diagonal: 'd1',
        });
      }

      // diagonal (from top right to bottom left) check

      // * if last played button is top right *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        col >= 2 &&
        col <= 10 &&
        row <= 18 &&
        row >= 0 &&
        buttons[row][col] === buttons[row + 1][col - 1] &&
        buttons[row][col] === buttons[row + 2][col - 2] &&
        buttons[row][col] &&
        !buttonState[row][col].d2 &&
        !buttonState[row + 1][col - 1].d2 &&
        !buttonState[row + 2][col - 2].d2
      ) {
        console.group('d2 - top right button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();

        dispatch({
          type: 'SET_DIAGONAL_BUTTON_STATE',
          first: { row, col },
          second: { row: row + 1, col: col - 1 },
          third: { row: row + 2, col: col - 2 },
          diagonal: 'd2',
        });
      }

      // * if last played button is middle *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        col >= 1 &&
        col <= 9 &&
        row >= 2 &&
        row <= 19 &&
        buttons[row][col] === buttons[row - 1][col + 1] &&
        buttons[row][col] === buttons[row + 1][col - 1] &&
        buttons[row][col] &&
        !buttonState[row][col].d2 &&
        !buttonState[row - 1][col + 1].d2 &&
        !buttonState[row + 1][col - 1].d2
      ) {
        console.group('d2 - middle button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();

        dispatch({
          type: 'SET_DIAGONAL_BUTTON_STATE',
          first: { row, col },
          second: { row: row - 1, col: col + 1 },
          third: { row: row + 1, col: col - 1 },
          diagonal: 'd2',
        });
      }

      // * if last played button is bottom left *

      // check if values of three buttons are the same and truthy
      // default button state is null (falsy)
      // check if state of these buttons are false
      // state of buttons that not scored a point yet are false
      else if (
        col >= 0 &&
        col <= 8 &&
        row >= 3 &&
        row <= 20 &&
        buttons[row][col] === buttons[row - 1][col + 1] &&
        buttons[row][col] === buttons[row - 2][col + 2] &&
        buttons[row][col] &&
        !buttonState[row][col].d2 &&
        !buttonState[row - 1][col + 1].d2 &&
        !buttonState[row - 2][col + 2].d2
      ) {
        console.group('d2 - bottom left button');
        console.log('row:', row);
        console.log('col:', col);
        console.groupEnd();

        dispatch({
          type: 'SET_DIAGONAL_BUTTON_STATE',
          first: { row, col },
          second: { row: row - 1, col: col + 1 },
          third: { row: row - 2, col: col + 2 },
          diagonal: 'd2',
        });
      }
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
