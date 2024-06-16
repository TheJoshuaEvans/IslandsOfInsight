import Match3Board from '../Match3Board.js';

import deleteBlocks from './deleteBlocks.js';

describe('deleteBlocks', function() {
  it('should delete some blocks without gravity', async () => {
    const board = new Match3Board([
      [1,2],
      [2,2],
      [1,2],
    ]);
    const blocksToDelete = [
      board.getBlockAt(0,1),
      board.getBlockAt(1,1),
      board.getBlockAt(2,1),
    ];
    const blocksNotToDelete = [
      board.getBlockAt(0,0),
      board.getBlockAt(1,0),
      board.getBlockAt(2,0),
    ];

    deleteBlocks({board, blocksToDelete});

    expect(board.getBlockAt(0,0)).toBe(blocksNotToDelete[0]);
    expect(board.getBlockAt(1,0)).toBe(blocksNotToDelete[1]);
    expect(board.getBlockAt(2,0)).toBe(blocksNotToDelete[2]);
    expect(board.boardArray[0][1]).toBeUndefined();
    expect(board.boardArray[1][1]).toBeUndefined();
    expect(board.boardArray[2][1]).toBeUndefined();
  });

  it('should delete some blocks with gravity and non-moving blocks', async () => {
    const board = new Match3Board([
      [1,2,2,2,1,1],
      [1,2,0,2],
      [3,2,0,2],
    ]);
    const blocksToDelete = [
      board.getBlockAt(0,1),
      board.getBlockAt(1,1),
      board.getBlockAt(2,1),
      board.getBlockAt(0,2),
      board.getBlockAt(0,3),
      board.getBlockAt(1,3),
      board.getBlockAt(2,3),
    ];
    const blocksNotToDelete = [
      board.getBlockAt(0,0),
      board.getBlockAt(1,0),
      board.getBlockAt(2,0),
      board.getBlockAt(1,2),
      board.getBlockAt(2,2),
      board.getBlockAt(0,4),
      board.getBlockAt(0,5),
    ];

    deleteBlocks({board, blocksToDelete});

    board.print();

    expect(board.getBlockAt(0,0)).toBe(blocksNotToDelete[0]);
    expect(board.getBlockAt(1,0)).toBe(blocksNotToDelete[1]);
    expect(board.getBlockAt(2,0)).toBe(blocksNotToDelete[2]);
    expect(board.getBlockAt(0,1)).toBe(blocksNotToDelete[5]);
    expect(board.getBlockAt(1,1)).toBeNull();
    expect(board.getBlockAt(2,1)).toBeNull();
    expect(board.getBlockAt(0,2)).toBe(blocksNotToDelete[6]);
    expect(board.getBlockAt(1,2)).toBe(blocksNotToDelete[3]);
    expect(board.getBlockAt(2,2)).toBe(blocksNotToDelete[4]);
    expect(board.getBlockAt(1,1)).toBeNull();
    expect(board.getBlockAt(2,1)).toBeNull();
  });
});
