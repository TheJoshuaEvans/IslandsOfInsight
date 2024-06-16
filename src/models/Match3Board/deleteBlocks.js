/** @typedef {import('../Match3Block').default} Match3Block */
/** @typedef {import('../Match3Board').default} Match3Board */

import Coordinates from '../Coordinates.js';

/**
 * @typedef DeleteBlocksParams
 * @prop {Match3Board} board Board to delete blocks from
 * @prop {Match3Block[]} blocksToDelete The blocks to delete
 */

/**
 * Deletes all the provided blocks from their board in-place, and then applies gravity
 *
 * @param {DeleteBlocksParams} params
 */
const deleteBlocks = (params) => {
  const {board, blocksToDelete} = params;
  // First replace all provided blocks in the board array with null
  blocksToDelete.forEach((blockToDelete) => {
    const blockPos = blockToDelete.position;
    board.boardArray[blockPos.x][blockPos.y] = null;
  });

  // Go through all the blocks and move each block downwards until either the floor or another
  // block is hit
  board.boardArray.forEach((column) => {
    column.forEach((block) => {
      // Skip null blocks or blocks that don't move (have a type of 0)
      if (!block?.type) {
        return;
      }

      // Handle falling by performing movement actions until there is nowhere left to fall
      while (board.getBlockUnder(block) === null) {
        // Break if we hit the bottom
        if (block.position.y <= 0) {
          break;
        }

        // Move the block!
        const {x, y} = block.position;
        board.boardArray[x][y] = null;
        board.boardArray[x][y-1] = block;
        block.position = new Coordinates(x, y-1);
      }
    });

    // Truncate columns that might now end with null values
    while (column[column.length-1] === null) {
      column.length = column.length - 1;
    }
  });
};

export default deleteBlocks;
