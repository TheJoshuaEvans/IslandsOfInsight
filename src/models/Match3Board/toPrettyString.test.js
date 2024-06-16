import Match3Board from '../Match3Board.js';
import toPrettyString from './toPrettyString.js';

describe('toPrettyString', function() {
  const expectedString =
    '|  2  |\n' +
    '|  3  |\n' +
    '|  2  |\n' +
    '|  3  |\n' +
    '|  3  |\n' +
    '|2 0 2|\n' +
    '|1 2 1|\n'
  ;
  const board = new Match3Board([
    [1,2],
    [2,0,3,3,2,3,2],
    [1,2],
  ]);
  it('should make a pretty string with a known example', async () => {
    const prettyBoardString = toPrettyString({board});

    expect(prettyBoardString).toBe(expectedString);
  });

  it('should make a pretty string with the board array directly', async () => {
    const prettyBoardString = toPrettyString({boardArray: board.boardArray});

    expect(prettyBoardString).toBe(expectedString);
  });
});


