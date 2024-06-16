/** @typedef {import('./Match3Block.js').default} Match3Block */

import globals from '../globals.js';
import Coordinates from './Coordinates.js';
import checkMatch from './Match3Board/checkMatch.js';

import copyBoardArray from './Match3Board/copyBoardArray.js';
import deleteBlocks from './Match3Board/deleteBlocks.js';
import generateBlockArray from './Match3Board/generateBlockArray.js';
import generateBoardArray from './Match3Board/generateBoardArray.js';
import getBlock from './Match3Board/getBlock.js';
import getMatchingBlocks from './Match3Board/getMatchingBlocks.js';
import processMatches from './Match3Board/processMatches.js';
import swapBlocks from './Match3Board/swapBlocks.js';
import toPrettyString from './Match3Board/toPrettyString.js';

/**
 * Represents a match 3 board
 */
class Match3Board {
  /**
   * @type {Match3Block[][]}
   * The internal 2D board array
   **/
  boardArray = [[]];

  /**
   * @type {Match3Block[][][]}
   * Array of previous board states
   */
  history = [];

  /**
   * @type {Match3Block[]}
   * A flat 1D array of all the movable blocks on the board
   */
  get blocks () {
    return generateBlockArray({boardArray: this.boardArray});
  }

  /**
   * @type {Match3Block[]}
   * Array of all the blocks that are currently part of a match 3
   */
  get matchingBlocks() {
    return getMatchingBlocks({board: this});
  }

  /**
   *
   * @param {number[][] | Match3Block[][] | Match3Board} board
   * @returns
   */
  constructor(board) {
    if (board instanceof Match3Board) {
      // This is being used as a copy constructor
      this.boardArray = copyBoardArray({boardArray: board.boardArray});
      this.history = board.history.map((historicBoard) => {
        return copyBoardArray({boardArray: historicBoard});
      });
      return;
    }

    this.boardArray = generateBoardArray({board});
  }

  //* -------------- Utility methods --------------

  /**
   * Takes a block in the board and determines if it is part of a match 3+
   *
   * @param {Match3Block} block Block to check matches for
   */
  checkMatch(block) {
    return checkMatch({board: this, block});
  }

  /**
   * Takes an array of blocks and deletes them from the board, then applies gravity
   *
   * @param {Match3Block[]} blocksToDelete Array of blocks to delete
   */
  deleteBlocks(blocksToDelete) {
    return deleteBlocks({board: this, blocksToDelete});
  }

  /**
   * Get the block at a specific set of coordinates. Supports x, y parameters, or a coordinate
   * object. Will return null if no block exists at that location
   *
   * @overload
   * @param {Coordinates} coordinates The coordinates of the block to retrieve
   * @returns {Match3Block}
   */
  /**
   * @overload
   * @param {number} x The x coordinate
   * @param {number} y The y coordinate
   * @returns {Match3Block}
   */
  /**
   * @param {number | Coordinates} x
   * @param {number} y
   * @returns {Match3Block}
   */
  getBlockAt(x, y) {
    let coordinates = x;
    if (typeof x === 'number' && typeof y === 'number') {
      coordinates = new Coordinates(x, y);
    }

    return getBlock({board: this, coordinates});
  }

  /**
   * Attempts to retrieve the block directly underneath the provided block. If the block is at
   * the bottom of the board, null will be returned
   *
   * @param {Match3Block} block The block to get the block under
   * @returns
   */
  getBlockUnder(block) {
    return getBlock({board: this, coordinates: block.position.getDirection(globals.DOWN)});
  }

  /**
   * Process all the matches currently present on the board, deleting the matched blocks and
   * applying gravity until no more matches remain
   */
  processMatches() {
    return processMatches({board: this});
  }

  /**
   * Attempt to swap the blocks at the provided coordinates. Returns a boolean indicating if
   * a swap happened
   *
   * @param {Coordinates} coord0 First coordinate to swap at
   * @param {Coordinates} coord1 Second coordinate to swap at
   */
  swapBlocks(coord0, coord1) {
    return swapBlocks({board: this, coordinates: [coord0, coord1]});
  }

  //* -------------- Stringification methods --------------
  /**
   * Retrieve the string representation of the board
   */
  toString() {
    return JSON.stringify(this.boardArray);
  }

  /**
   * Generate a pretty string of the board as it would appear in the game
   */
  toPrettyString() {
    return toPrettyString({board: this});
  }

  /**
   * Pretty-print the board layout as it appears in the game
   */
  print() {
    console.log(this.toPrettyString());
  }

  printHistory() {
    this.history.forEach((historicBoardArray, i) => {
      console.log(`Historical board array ${i}`);
      console.log(toPrettyString({boardArray: historicBoardArray}));
    });
  }
}

export default Match3Board;
