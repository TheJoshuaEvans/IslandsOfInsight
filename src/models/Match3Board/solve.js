/** @typedef {import('../Match3Block').default} Match3Block */
/** @typedef {import('../Match3Board').default} Match3Board */

import copyBoardArray from './copyBoardArray.js';
import globals from '../../globals.js';

/**
 * @typedef RunParams
 * @prop {Match3Board} board The board to use for running the simulation
 */

/**
 * The core method responsible for running the simulation that solves the match 3 puzzle. Makes
 * changes to the provided board in-place. When finished, the board will be completed and the
 * history will show the full completion path
 *
 * @param {RunParams} params
 */
const solve = (params) => {
  const {board} = params;

  // Save the current board state to the history
  board.history.push(copyBoardArray({boardArray: board.boardArray}));

  // Try to shift every block in sequence...
  let completedBoard = null;
  board.blocks.forEach((block) => {
    if (completedBoard) return;
    // Try to shift this block in each direction...
    globals.DIRECTIONS.forEach((direction) => {
      if (completedBoard) return;
      const neighborPos = block.position.getDirection(direction);
      const neighborBlock = board.getBlockAt(neighborPos);
      if (!neighborBlock) {
        // There is no neighbor in this direction
        return;
      }

      const swapResult = board.swapBlocks(block.position, neighborPos);
      if (swapResult === false) {
        // No swap can happen in this direction, move on to the next
        return;
      }

      // We were able to swap this direction! However, a swap can only be valid if it results in
      // a match 3+, so we need to check the blocks we tried to swap for new matches and revert
      // the board state if no new matches are found
      const isBlockInMatch = board.checkMatch(block);
      const isNeighborInMatch = board.checkMatch(neighborBlock);
      if (!isBlockInMatch && !isNeighborInMatch) {
        // Swap the blocks back and move on to the next direction
        board.swapBlocks(block.position, neighborBlock.position);
        return;
      }

      // A new match 3 was found! Process all the matches and check to see if we are done
      board.processMatches();
      if (!board.blocks.length) {
        // No blocks remain on the board, this is the golden path!
        completedBoard = board;
        return;
      }

      // We aren't done yet, recurse!
      solve({board});
    });
  });
};

export default solve;
