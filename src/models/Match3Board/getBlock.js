/** @typedef {import('../Match3Block').default} Match3Block */
/** @typedef {import('../Match3Board').default} Match3Board */
/** @typedef {import('../Coordinates').default} Coordinates */

/**
 * @typedef GetBlockParams
 * @prop {Match3Board} board The board to perform the operation on
 * @prop {Coordinates} coordinates The coordinates of the block to retrieve
 */

/**
 * Get the block in a board at a specific set of coordinates. Returns null if no block exists
 * at that position
 *
 * @param {GetBlockParams} params
 * @returns {Match3Block}
 */
const getBlock = (params) => {
  const {board, coordinates} = params;
  const {x, y} = coordinates;

  const column = board.boardArray[x];
  if (!column) return null;

  const block = column[y];
  if (!block) return null;

  return block;
};

export default getBlock;
