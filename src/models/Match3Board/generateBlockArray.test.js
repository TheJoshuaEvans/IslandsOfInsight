import Match3Block from '../Match3Block.js';
import generateBlockArray from './generateBlockArray.js';
import generateBoardArray from './generateBoardArray.js';

describe('generateBlockArray', function() {
  it('should generate a block array', async () => {
    const boardArray = generateBoardArray({board: [
      [1,2],
      [2,1,3,3,2,3,2],
      [1,2],
    ]});

    const blockArray = generateBlockArray({boardArray});
    expect(blockArray).toHaveLength(11);
    blockArray.forEach((block) => {
      expect(block).toBeInstanceOf(Match3Block);
    });
  });

  it('should not count unmovable blocks', async () => {
    const boardArray = generateBoardArray({board: [
      [0,1,2],
      [0,2,1,3,3,2,3,2],
      [0,1,2],
    ]});

    const blockArray = generateBlockArray({boardArray});
    expect(blockArray).toHaveLength(11);
  });

  it('should not count null blocks', async () => {
    const boardArray = generateBoardArray({board: [
      [null,1],
      [null,2],
      [null,1],
    ]});

    const blockArray = generateBlockArray({boardArray});
    expect(blockArray).toHaveLength(3);
    blockArray.forEach((block) => {
      expect(block).toBeInstanceOf(Match3Block);
    });
  });
});
