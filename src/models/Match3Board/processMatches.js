/** @typedef {import('../Match3Block').default} Match3Block */
/** @typedef {import('../Match3Board').default} Match3Board */

/**
 * @typedef ProcessMatchesParams
 * @prop {Match3Board} board The board to process for matches
 */

/**
 * Checks the board for any matches, deletes those matches applying gravity, then checking again
 * for matches to delete until no matches or blocks remain
 *
 * @param {ProcessMatchesParams} params
 */
const processMatches = (params) => {
  const {board} = params;

  let matchingBlocks = board.matchingBlocks;
  while (matchingBlocks.length) {
    board.deleteBlocks(matchingBlocks);
    matchingBlocks = board.matchingBlocks;
  }
};

export default processMatches;
