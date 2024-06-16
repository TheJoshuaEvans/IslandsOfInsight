import Match3Board from '../Match3Board.js';

import getMatchingBlocks from './getMatchingBlocks.js';

describe('getMatchingBlocks', function() {
  it('should get matching blocks when there are just matches', async () => {
    const board = new Match3Board([
      [1],
      [1],
      [1],
    ]);

    const matchingBlocks = getMatchingBlocks({board});
    expect(matchingBlocks).toHaveLength(3);
    expect(matchingBlocks[0]).toBe(board.blocks[0]);
    expect(matchingBlocks[1]).toBe(board.blocks[1]);
    expect(matchingBlocks[2]).toBe(board.blocks[2]);
  });

  it('should not match unmovable blocks', async () => {
    const board = new Match3Board([
      [0],
      [0],
      [0],
    ]);

    const matchingBlocks = getMatchingBlocks({board});
    expect(matchingBlocks).toHaveLength(0);
  });

  it('should not get any matches when there are none', async () => {
    const board = new Match3Board([
      [1,2],
      [2,1],
      [1,2],
    ]);

    const matchingBlocks = getMatchingBlocks({board});
    expect(matchingBlocks).toHaveLength(0);
  });

  it('should get matches in a complex field', async () => {
    const board = new Match3Board([
      [1,2],
      [2,1,3,3,3,2,2],
      [1,2],
    ]);
    const matchingBlocks = getMatchingBlocks({board});
    expect(matchingBlocks).toHaveLength(3);

    expect(matchingBlocks.includes(board.getBlockAt(1,2))).toBe(true);
    expect(matchingBlocks.includes(board.getBlockAt(1,3))).toBe(true);
    expect(matchingBlocks.includes(board.getBlockAt(1,4))).toBe(true);
  });
});
