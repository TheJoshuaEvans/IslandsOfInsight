import copyBoardArray from './copyBoardArray.js';
import generateBoardArray from './generateBoardArray.js';

describe('CopyBoardArray', function() {
  it('should copy a board array', async () => {
    const boardArray = generateBoardArray({board: [
      [1,2],
      [2,1,3,3,2,3,2],
      [1,2],
    ]});
    const newBoardArray = copyBoardArray({boardArray});

    expect(newBoardArray).toMatchObject(boardArray);
    expect(newBoardArray).not.toBe(boardArray);
    newBoardArray.forEach((newColumn, x) => {
      expect(newColumn).not.toBe(boardArray[x]);
      newColumn.forEach((newBlock, y) => {
        expect(newBlock).not.toBe(boardArray[x][y]);
      });
    });
  });
});
