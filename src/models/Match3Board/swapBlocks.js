/** @typedef {import('../Coordinates').default} Coordinates */
/** @typedef {import('../Match3Board').default} Match3Board */

import Coordinates from '../Coordinates';

/**
 * @typedef SwapBlocksParams
 * @prop {Match3Board} board The board to perform the operation on
 * @prop {Coordinates[]} coordinates The two coordinates to try and swap
 */

/**
 * Takes two coordinates within a match 3 board and attempts to swap their position in-place.
 * Returns true if there was a swap, and false otherwise
 *
 * @param {SwapBlocksParams} params
 * @returns {boolean} If a swap happened
 */
const swapBlocks = (params) => {
  const {board, coordinates} = params;

  // ---- Validation ----
  // Ensure the coordinates are one unit away
  const distanceBetweenCoordinates = coordinates[0].getDistanceTo(coordinates[1]);
  if (distanceBetweenCoordinates !== 1) {
    console.error(board.print());
    throw new Error(
      `Only adjacent blocks can be swapped. ` +
      `Swapping blocks of distance ${distanceBetweenCoordinates}`,
    );
  }

  // Ensure coordinates are in line
  if (coordinates[0].x !== coordinates[1].x && coordinates[0].y !== coordinates[1].y) {
    throw new Error('Diagonally displaced blocks cannot be swapped');
  }

  const blocks = [board.getBlockAt(coordinates[0]), board.getBlockAt(coordinates[1])];

  // If either block is null or 0 (unmovable), return false. No swap can happen
  for (const block of blocks) {
    if (block === null || block.type === 0) {
      return false;
    }
  }

  // Place the first block at the second's location
  board.boardArray[coordinates[1].x][coordinates[1].y] = blocks[0];
  blocks[0].position = new Coordinates(coordinates[1]);

  // Place the second block at the first's location
  board.boardArray[coordinates[0].x][coordinates[0].y] = blocks[1];
  blocks[1].position = new Coordinates(coordinates[0]);

  return true;
};

export default swapBlocks;
