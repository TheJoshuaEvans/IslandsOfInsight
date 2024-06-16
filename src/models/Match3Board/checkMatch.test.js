import Match3Board from '../Match3Board.js';

import checkMatch from './checkMatch.js';

describe('checkMatch', function() {
  it('should find a valid match when in the center', async () => {
    const board = new Match3Board([
      [1],
      [1],
      [1],
    ]);

    const result = checkMatch({board, block: board.getBlockAt(1,0)});
    expect(result).toBe(true);
  });

  it('should find valid match when at the edge', async () => {
    const board = new Match3Board([
      [1],
      [1],
      [1],
    ]);

    const result = checkMatch({board, block: board.getBlockAt(0,0)});
    expect(result).toBe(true);
  });

  it('should find a valid vertical match in the middle', async () => {
    const board = new Match3Board([
      [1,1,1],
    ]);

    const result = checkMatch({board, block: board.getBlockAt(0,1)});
    expect(result).toBe(true);
  });

  it('should find a valid vertical match at the edge', async () => {
    const board = new Match3Board([
      [1,1,1],
    ]);

    const result = checkMatch({board, block: board.getBlockAt(0,0)});
    expect(result).toBe(true);
  });

  it('should not identify match two corner', async () => {
    const board = new Match3Board([
      [1,1],
      [1,0],
    ]);

    const result = checkMatch({board, block: board.getBlockAt(0,0)});
    expect(result).toBe(false);
  });

  it('should not identify a match with a gap in it', async () => {
    const board = new Match3Board([
      [1,1,2,1],
    ]);

    const result = checkMatch({board, block: board.getBlockAt(0,1)});
    expect(result).toBe(false);
  });
});
