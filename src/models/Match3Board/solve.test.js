import Match3Board from '../Match3Board.js';
import solve from './solve.js';

describe('solve', function() {
  it('should solve the board with a simple example', async () => {
    const board = new Match3Board([
      [1,2],
      [2,1],
      [1,2],
    ]);

    solve({board});
    board.print();
    board.printHistory();
  });

  it('should solve a more complex board', async () => {
    const board = new Match3Board([
      [1,2],
      [2,1,3,3,2,3,2],
      [1,2],
    ]);

    solve({board});
    board.print();
    board.printHistory();
  });

  it('should solve a super complicated real-world example', async () => {
    const board = new Match3Board([
      [0,1,0,1,0,0,0,1],
      [0,1,0,1,0,0,0,1],
      [0,2,0,2,0,0,0,2],
      [1,2,2,1,2,2,1,1,2,1,2,2,1],
      [0,1,0,0,1,0,2,0,2],
      [0,2,0,0,2,0,1,0,1],
      [0,2,0,0,2,0,1,0,1],
    ]);

    solve({board});
    board.print();
    board.printHistory();
  });
});
