import Coordinates from '../Coordinates.js';
import Match3Board from '../Match3Board.js';

import swapBlocks from './swapBlocks.js';

describe('swapBlocks', function() {
  it('should swap blocks', async () => {
    const board = new Match3Board([
      [1,2],
      [2,1,3,3,2,3,2],
      [1,2],
    ]);
    const coordinates = [new Coordinates(1, 0), new Coordinates(1, 1)];
    const block0 = board.getBlockAt(coordinates[0]);
    const block1 = board.getBlockAt(coordinates[1]);
    expect(swapBlocks({board, coordinates})).toBe(true);

    // Block's internal positions should be updated
    expect(block0.position.y).toBe(1);
    expect(block1.position.y).toBe(0);

    // The blocks in the board array should be in their new positions
    const finalBlock0 = board.getBlockAt(coordinates[0]);
    const finalBlock1 = board.getBlockAt(coordinates[1]);

    expect(finalBlock0).toBe(block1);
    expect(finalBlock1).toBe(block0);
  });

  it('should not swap with nothing', async () => {
    const board = new Match3Board([
      [1,2],
      [2,1,3,3,2,3,2],
      [1,2],
    ]);
    const coordinates = [new Coordinates(0, 1), new Coordinates(0, 2)];
    const block0 = board.getBlockAt(coordinates[0]);
    expect(swapBlocks({board, coordinates})).toBe(false);

    expect(block0.position.y).toBe(1);
  });

  it('should not swap with unmovable block', async () => {
    const board = new Match3Board([
      [1],
      [0],
    ]);

    const coordinates = [new Coordinates(0, 0), new Coordinates(1, 0)];
    const block0 = board.getBlockAt(coordinates[0]);
    const block1 = board.getBlockAt(coordinates[1]);
    expect(swapBlocks({board, coordinates})).toBe(false);

    expect(block0.position.x).toBe(0);
    expect(block1.position.x).toBe(1);
  });

  it('should throw an error if coordinates are not next to each other', async () => {
    const board = new Match3Board([
      [1],
      [0],
      [0],
    ]);

    const coordinates = [new Coordinates(0, 0), new Coordinates(2, 0)];
    expect(() => swapBlocks({board, coordinates})).toThrow();
  });

  it('should throw an error if coordinates are the same', async () => {
    const board = new Match3Board([
      [1],
      [0],
    ]);

    const coordinates = [new Coordinates(0, 0), new Coordinates(0, 0)];
    expect(() => swapBlocks({board, coordinates})).toThrow();
  });

  it('should throw an error if coordinates are diagonal', async () => {
    const board = new Match3Board([
      [1,2],
      [0,2],
    ]);

    const coordinates = [new Coordinates(0, 0), new Coordinates(1, 1)];
    expect(() => swapBlocks({board, coordinates})).toThrow();
  });
});
