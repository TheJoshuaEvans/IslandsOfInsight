/** @typedef {import('../src/models/Match3Block').default} Match3Block */
/** @typedef {import('../src/models/Match3Board').default} Match3Board */

/**
 * Test utility takes two boards and returns true if they match (not considering history), and
 * throws/prints a detailed error if they do not
 *
 * @param {Match3Board} boardA
 * @param {Match3Board} boardB
 */
const compareBoards = (boardA, boardB) => {
  // Boards are effectively identical if all blocks match
  boardA.blocks.forEach((blockA, blockIndex) => {
    const blockB = boardB.blocks[blockIndex];
    if (
      blockA.position.x !== blockB.position.x ||
      blockA.position.y !== blockB.position.y ||
      blockA.type !== blockB.type
    ) {
      // These blocks don't match. Throw an error and print the boards
      throw new Error(
        'Board mismatch. Boards:\n' + boardA.toPrettyString() + '\n' + boardB.toPrettyString(),
      );
    }
  });
};

export default compareBoards;
