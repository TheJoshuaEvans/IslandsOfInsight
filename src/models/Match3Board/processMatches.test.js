import Match3Board from '../Match3Board.js';

import processMatches from './processMatches.js';
import compareBoards from '../../../test/compareBoards.js';

describe('processMatches', function() {
  it('should process simple matches', async () => {
    const board = new Match3Board([
      [3,1],
      [2,1],
      [3,1],
    ]);
    const expectedBoard = new Match3Board([
      [3],
      [2],
      [3],
    ]);

    processMatches({board});
    compareBoards(board, expectedBoard);
  });

  it('should process no matches', async () => {
    const boardArray = [
      [3,1],
      [2,2],
      [3,1],
    ];
    const board = new Match3Board(boardArray);
    const expectedBoard = new Match3Board(boardArray);

    processMatches({board});
    compareBoards(board, expectedBoard);
  });

  it('should process complex matches', async () => {
    const board = new Match3Board([
      [3,1,0,1],
      [2,1,1,1],
      [3,1,0,1],
    ]);
    const expectedBoard = new Match3Board([
      [3,null,0],
      [2],
      [3,null,0],
    ]);

    processMatches({board});
    compareBoards(board, expectedBoard);
  });
});
