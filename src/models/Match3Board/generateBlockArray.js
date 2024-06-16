/** @typedef {import('../Match3Block').default} Match3Block */

/**
 * @typedef GenerateBlockArrayParams
 * @prop {Match3Block[][]} boardArray 2D board array to generate the block array from
 */

/**
 * Takes a previously generated board array consisting of blocks, and generates a 1D array with
 * all of the movable blocks on the board. If there are no moveable blocks on the board an empty
 * array will be returned
 *
 * @param {GenerateBlockArrayParams} params
 */
const generateBlockArray = (params) => {
  const {boardArray} = params;
  const blocks = [];
  boardArray.forEach((column) => {
    column.forEach((block) => {
      if (!block?.type) {
        return;
      }
      blocks.push(block);
    });
  });

  return blocks;
};

export default generateBlockArray;
