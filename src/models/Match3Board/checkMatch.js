/** @typedef {import('../Match3Block').default} Match3Block */
/** @typedef {import('../Match3Board').default} Match3Board */

/**
 * @typedef CheckMatchParams
 * @prop {Match3Board} board The board the block is on
 * @prop {Match3Block} block The block to check for matches
 */

/**
 * Takes a block and identifies if it is part of a match 3 on the board. Returns true or false
 * depending on if a match 3 was found
 *
 * @param {CheckMatchParams} params
 * @returns {boolean}
 */
const checkMatch = (params) => {
  // A match occurs if there are at least three of the same symbols are in a row, so we need to
  // check up to the block's coordinates +2, so:
  //  |  2  |
  //  |  1  |
  //  |21012|
  //  |  1  |
  //  |  2  |
  // The vertical and horizontal directions are symmetrical, the the operations will be the same
  // for both dimensions. A corner does not count as a match, so the following would not
  // actually trigger:
  //  |0X|
  //  |X |

  // Along a single dimension, there are three possible match states:
  // |0XX|, |X0X|, |XX0|
  // The block in question could be in the middle, or on one of the edges of a possible match. If
  // and adjacent block is of a different type, both the middle and corresponding edge match
  // case can be ruled out, so they should be checked first

  const {board, block} = params;

  // Horizontal dimension -
  //    Check leftward: [X0]
  let posToCheck = block.position.getDirection('left');
  let blockToCheck = board.getBlockAt(posToCheck);

  const leftMatch = block.type === blockToCheck?.type;
  if (leftMatch) {
    // Left was a match! Check to see if we are on the right edge: [XX0]
    posToCheck = blockToCheck.position.getDirection('left');
    blockToCheck = board.getBlockAt(posToCheck);

    if (block.type === blockToCheck?.type) {
      // This block is on the right edge of a match 3
      return true;
    }
  }

  //    Check rightward: [0X]
  posToCheck = block.position.getDirection('right');
  blockToCheck = board.getBlockAt(posToCheck);

  if (block.type === blockToCheck?.type) {
    // Right was a match!
    if (leftMatch) {
      // Left was also a match, meaning we are in the middle: [X0X]
      return true;
    }

    posToCheck = blockToCheck.position.getDirection('right');
    blockToCheck = board.getBlockAt(posToCheck);

    if (block.type === blockToCheck?.type) {
      // This block is on the right edge of a match 3: [XX0]
      return true;
    }
  }

  // Vertical dimension -
  //    Check upward: [X0]
  posToCheck = block.position.getDirection('up');
  blockToCheck = board.getBlockAt(posToCheck);

  const upMatch = block.type === blockToCheck?.type;
  if (upMatch) {
    // Up was a match! Check to see if we are on the down edge: [XX0]
    posToCheck = blockToCheck.position.getDirection('up');
    blockToCheck = board.getBlockAt(posToCheck);

    if (block.type === blockToCheck?.type) {
      // This block is on the down edge of a match 3
      return true;
    }
  }

  //    Check downward: [0X]
  posToCheck = block.position.getDirection('down');
  blockToCheck = board.getBlockAt(posToCheck);

  if (block.type === blockToCheck?.type) {
    // Down was a match!
    if (upMatch) {
      // Up was also a match, meaning we are in the middle: [X0X]
      return true;
    }

    posToCheck = blockToCheck.position.getDirection('down');
    blockToCheck = board.getBlockAt(posToCheck);

    if (block.type === blockToCheck?.type) {
      // This block is on the down edge of a match 3: [XX0]
      return true;
    }
  }

  // We never found a match :(
  return false;
};

export default checkMatch;
