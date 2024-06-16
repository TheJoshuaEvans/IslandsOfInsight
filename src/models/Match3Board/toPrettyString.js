/** @typedef {import('../Match3Block.js').default} Match3Block */
/** @typedef {import('../Match3Board.js').default} Match3Board */

/**
 * @typedef ToPrettyStringParams
 * @prop {Match3Board} board The board to make pretty
 * @prop {Match3Block[][]} boardArray
 */

/**
 * Takes a match 3 board and turns it into a pretty string. Can take either a board object, or
 * the internally used board array
 *
 * @param {ToPrettyStringParams} params
 */
const toPrettyString = (params) => {
  const {board} = params;

  const boardArray = params.boardArray ? params.boardArray : board.boardArray;
  let text = '';

  const longestColumnLength = boardArray.reduce((p, c) => c.length > p ? c.length : p, 0);
  for (let y=0; y<longestColumnLength; y++) {
    const rowItems = [];
    for (let x=0; x<boardArray.length; x++) {
      const block = boardArray[x][y];

      const rowItem = block ? block.type : ' ';
      rowItems.push(`${rowItem}`);
    }
    text = '|' + rowItems.join(' ') + '|\n' + text;
  }

  return text;
};

export default toPrettyString;
