import Match3Block from '../Match3Block.js';

/**
 * @typedef CopyBoardArrayParams
 * @prop {Match3Block[][]} boardArray Target to copy
 */

/**
 * Takes a board array and creates a copy of it
 *
 * @param {CopyBoardArrayParams} params
 */
const copyBoardArray = (params) => {
  const {boardArray} = params;
  const newBoardArray = [];

  boardArray.forEach((column) => {
    const newColumn = [];
    column.forEach((block) => {
      newColumn.push(new Match3Block(block));
    });
    newBoardArray.push(newColumn);
  });

  return newBoardArray;
};

export default copyBoardArray;
