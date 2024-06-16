import generateBoardArray from './generateBoardArray.js';

describe('generateBoardArray', function() {
  it('should generate a board array', async () => {
    const boardArray = generateBoardArray({board: [
      [1,2],
      [2,1,3,3,2,3,2],
      [1,2],
    ]});

    expect(boardArray).toHaveLength(3);
    expect(boardArray[0]).toHaveLength(2);
    expect(boardArray[1]).toHaveLength(7);
    expect(boardArray[2]).toHaveLength(2);
  });

  it('should keep null as null', async () => {
    const boardArray = generateBoardArray({board: [
      [null,2],
      [null,1,3,3,2,3,2],
      [null,2],
    ]});
    expect(boardArray[0][0]).toBeNull();
    expect(boardArray[1][0]).toBeNull();
    expect(boardArray[2][0]).toBeNull();
  });
});
