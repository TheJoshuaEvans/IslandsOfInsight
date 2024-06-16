import Coordinates from '../Coordinates.js';
import Match3Block from '../Match3Block.js';

/**
 * @typedef GenerateBoardArrayParams
 * @prop {number[][]} board 2D array representing the desired board configuration
 */

/**
 * Takes a two dimensional array of numbers representing a match 3 board and returns a new array
 * with Match3Blocks of the desired types in the desired locations
 *
 * @param {GenerateBoardArrayParams} params
 */
const generateBoardArray = (params) => {
  const {board} = params;
  const boardArray = [];

  board.forEach((column, x) => {
    const boardArrayColumn = [];
    column.forEach((type, y) => {
      if (type === null) {
        boardArrayColumn.push(null);
      } else {
        boardArrayColumn.push(new Match3Block({type, position: new Coordinates(x, y)}));
      }
    });
    boardArray.push(boardArrayColumn);
  });

  return boardArray;
};

export default generateBoardArray;
