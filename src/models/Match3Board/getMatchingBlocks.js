/** @typedef {import('../Match3Block').default} Match3Block */
/** @typedef {import('../Match3Board').default} Match3Board */

/**
 * @typedef GetMatchingBlocksParams
 * @prop {Match3Board} board Board to get the matches on
 */

/**
 * Get all of the blocks in a board that are currently part of a match 3
 *
 * @param {GetMatchingBlocksParams} params
 * @returns {Match3Block[]}
 */
const getMatchingBlocks = (params) => {
  const {board} = params;

  return board.blocks.filter((block) => board.checkMatch(block));
};

export default getMatchingBlocks;
