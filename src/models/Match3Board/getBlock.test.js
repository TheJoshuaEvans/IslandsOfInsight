import Coordinates from '../Coordinates.js';
import Match3Board from '../Match3Board.js';
import getBlock from './getBlock.js';

describe('getBlock', function() {
  const board = new Match3Board([
    [1,2],
    [2,1,3,3,2,3,2],
    [1,2],
  ]);

  it('should get a block', async () => {
    const block = getBlock({board, coordinates: new Coordinates(1,1)});
    expect(block.position.x).toBe(1);
    expect(block.position.y).toBe(1);
  });

  it('should get null if column is out of range', async () => {
    const block = getBlock({board, coordinates: new Coordinates(3,1)});
    expect(block).toBeNull();
  });

  it('should get null if row is out of range', async () => {
    const block = getBlock({board, coordinates: new Coordinates(0,10)});
    expect(block).toBeNull();
  });

  it('should get null if values are negative', async () => {
    let block = getBlock({board, coordinates: new Coordinates(-1,0)});
    expect(block).toBeNull();
    block = getBlock({board, coordinates: new Coordinates(0,-1)});
    expect(block).toBeNull();
  });
});
