import Match3Board from '../src/models/Match3Board.js';
import compareBoards from './compareBoards.js';

describe('compareBoards', function() {
  it('should compare matching boards', async () => {
    const boardArray = [
      [0,1,1],
      [0,2,4,5,4],
      [0,2,1,null,0],
    ];
    const boardA = new Match3Board(boardArray);
    const boardB = new Match3Board(boardArray);

    compareBoards(boardA, boardB);
  });

  it('should compare non-matching boards', async () => {
    const boardA = new Match3Board([
      [0,1],
      [0,1],
      [0,1],
    ]);
    const boardB = new Match3Board([
      [0,1],
      [0,1,1],
      [0,1],
    ]);

    expect(() => compareBoards(boardA, boardB)).toThrow();
  });
});
